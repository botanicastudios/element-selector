/**
 * DOM utilities for element selection
 */

import type { ContextHtmlOptions, ContextHtmlResult } from "./types";

/**
 * Safely extract class names from any element (HTML or SVG)
 * Handles string, SVGAnimatedString, and DOMTokenList variants
 */
export function getClassNames(element: Element | null): string[] {
  if (!element) return [];

  const classNameValue = (element as HTMLElement).className as unknown;

  // Plain string (common for HTML elements)
  if (typeof classNameValue === "string") {
    return classNameValue.split(/\s+/).filter(Boolean);
  }

  // SVGAnimatedString exposes the value on baseVal
  const baseVal = (classNameValue as { baseVal?: unknown })?.baseVal;
  if (typeof baseVal === "string") {
    return baseVal.split(/\s+/).filter(Boolean);
  }

  // Fallback to classList if available
  if ((element as Element).classList) {
    return Array.from(element.classList).filter(Boolean);
  }

  return [];
}

/**
 * Find the deepest (shadow-inclusive) element at given coordinates.
 * Excludes selector UI artifacts and SVG internals.
 */
export function findElementAtCoordinates(x: number, y: number): HTMLElement {
  const isSelectorArtifact = (el: Element | null) =>
    !!el &&
    (
      el.id === "element-selector-overlay" ||
      el.closest("#element-selector-overlay") ||
      el.id === "element-selector-root" ||
      el.closest("#element-selector-root")
    );

  const deepFromPoint = (
    root: Document | ShadowRoot,
    cx: number,
    cy: number,
    visited = new Set<Document | ShadowRoot>()
  ): HTMLElement | null => {
    // Guard against browsers that return the same root/host repeatedly
    // (e.g. elementFromPoint on a ShadowRoot returning the host), which can
    // otherwise recurse forever and blow the stack in production builds.
    if (visited.has(root)) return null;
    visited.add(root);

    const elementFromPoint = (root as any).elementFromPoint as
      | ((x: number, y: number) => Element | null)
      | undefined;

    if (!elementFromPoint) return null;

    const hit = elementFromPoint.call(root, cx, cy) as HTMLElement | null;
    if (!hit) return null;

    // Follow assigned slot content, preferring the assigned node under the point
    if (hit instanceof HTMLSlotElement) {
      const assigned = hit.assignedElements({ flatten: true }) as HTMLElement[];
      const underPoint =
        assigned.find((el) => {
          const r = el.getBoundingClientRect();
          return cx >= r.left && cx <= r.right && cy >= r.top && cy <= r.bottom;
        }) || assigned[0];

      if (underPoint) {
        if (underPoint.shadowRoot && !visited.has(underPoint.shadowRoot)) {
          const inner = deepFromPoint(underPoint.shadowRoot, cx, cy, visited);
          if (inner) return inner;
        }
        return underPoint;
      }
    }

    if (hit.shadowRoot && !visited.has(hit.shadowRoot)) {
      const inner = deepFromPoint(hit.shadowRoot, cx, cy, visited);
      if (inner) return inner;
    }

    return hit;
  };

  // Start from the document root and walk into shadow roots; this avoids
  // re-sampling the same overlay with elementsFromPoint loops.
  const pickFromStack = (): HTMLElement | null => {
    const stack = document
      .elementsFromPoint(x, y)
      .filter(
        (el): el is HTMLElement =>
          el instanceof HTMLElement && !isSelectorArtifact(el)
      );

    const nonDocument = stack.find(
      (el) => el !== document.documentElement && el !== document.body
    );

    return nonDocument ?? stack[0] ?? null;
  };

  const pickCandidate = (): HTMLElement | null => {
    let candidate = deepFromPoint(document, x, y);

    // If we landed on a host with an open shadow root, try to pick the inner hit first.
    if (candidate?.shadowRoot) {
      const inner = deepFromPoint(candidate.shadowRoot, x, y);
      if (inner) candidate = inner;
    }

    if (
      candidate &&
      !isSelectorArtifact(candidate) &&
      candidate !== document.body &&
      candidate !== document.documentElement
    ) {
      return candidate;
    }

    return pickFromStack();
  };

  const element = pickCandidate() ?? document.body;

  // Skip SVG internal elements (but allow top-level SVG)
  if (
    element.tagName !== "svg" &&
    element.tagName !== "SVG" &&
    element.closest("svg")
  ) {
    const svgHost = element.closest("svg");
    return (svgHost as unknown as HTMLElement) || document.body;
  }

  return element;
}

/**
 * Build a CSS selector for an element
 * Tries to create the most specific selector possible
 */
export function buildElementSelector(element: HTMLElement): string {
  if (!element || element === document.body) {
    return "body";
  }

  // If element has a unique ID, use it
  if (element.id) {
    return `#${CSS.escape(element.id)}`;
  }

  // Build selector path from element to root
  const path: string[] = [];
  let current: HTMLElement | null = element;

  while (current && current !== document.body) {
    let selector = current.tagName.toLowerCase();

    // Add classes if available
    const classNames = getClassNames(current)
      .filter((c) => !c.includes(":"))
      .slice(0, 2); // Limit to 2 classes for readability

    if (classNames.length > 0) {
      const classes = classNames.map((c) => `.${CSS.escape(c)}`).join("");
      selector += classes;
    }

    // Add nth-child if needed for uniqueness
    if (current.parentElement) {
      const currentTag = current.tagName;
      const siblings = Array.from(current.parentElement.children);
      const sameTagSiblings = siblings.filter(
        (sibling) => sibling.tagName === currentTag
      );

      if (sameTagSiblings.length > 1) {
        const index = sameTagSiblings.indexOf(current) + 1;
        selector += `:nth-of-type(${index})`;
      }
    }

    path.unshift(selector);

    // Stop if we've found a unique enough selector
    try {
      const testSelector = path.join(" > ");
      const matches = document.querySelectorAll(testSelector);
      if (matches.length === 1 && matches[0] === element) {
        return testSelector;
      }
    } catch (e) {
      // Invalid selector, continue building
    }

    current = current.parentElement;
  }

  return path.join(" > ");
}

/**
 * Get a human-readable description of an element
 */
export function getElementDescription(element: HTMLElement): string {
  if (!element) return "";

  const tag = element.tagName.toLowerCase();
  const id = element.id ? `#${element.id}` : "";
  const classes = getClassNames(element)
    .slice(0, 2)
    .map((c) => `.${c}`)
    .join("");

  const text = element.textContent?.trim().slice(0, 30);
  const textPreview = text ? ` "${text}${text.length > 30 ? "..." : ""}"` : "";

  return `${tag}${id}${classes}${textPreview}`;
}

/**
 * Convert HTML tag names to friendly, human-readable names
 */
export function getFriendlyTagName(tagName: string): string {
  const friendlyNames: Record<string, string> = {
    // Links
    a: "link",

    // Text content
    p: "paragraph",
    span: "text",
    strong: "bold text",
    b: "bold text",
    em: "italic text",
    i: "italic text",
    u: "underlined text",
    code: "code",
    pre: "code block",
    blockquote: "quote",

    // Headings
    h1: "heading 1",
    h2: "heading 2",
    h3: "heading 3",
    h4: "heading 4",
    h5: "heading 5",
    h6: "heading 6",

    // Lists
    ul: "unordered list",
    ol: "ordered list",
    li: "list item",
    dl: "description list",
    dt: "term",
    dd: "description",

    // Structure
    div: "container",
    section: "section",
    article: "article",
    aside: "sidebar",
    header: "header",
    footer: "footer",
    nav: "navigation",
    main: "main content",

    // Forms
    form: "form",
    input: "input field",
    button: "button",
    textarea: "text area",
    select: "dropdown",
    option: "option",
    label: "label",
    fieldset: "field group",
    legend: "field group title",

    // Media
    img: "image",
    video: "video",
    audio: "audio",
    picture: "picture",
    figure: "figure",
    figcaption: "caption",

    // Tables
    table: "table",
    thead: "table header",
    tbody: "table body",
    tfoot: "table footer",
    tr: "table row",
    th: "table header cell",
    td: "table cell",

    // Other
    br: "line break",
    hr: "horizontal line",
    iframe: "embedded frame",
    canvas: "canvas",
    svg: "graphic",
  };

  return friendlyNames[tagName.toLowerCase()] || tagName.toLowerCase();
}

function isZeroRect(rect: DOMRectReadOnly): boolean {
  return rect.width === 0 && rect.height === 0;
}

function isDisplayContents(el: HTMLElement): boolean {
  return getComputedStyle(el).display === "contents";
}

function unionRects(rects: DOMRectReadOnly[]): DOMRectReadOnly {
  const left = Math.min(...rects.map((r) => r.left));
  const top = Math.min(...rects.map((r) => r.top));
  const right = Math.max(...rects.map((r) => r.right));
  const bottom = Math.max(...rects.map((r) => r.bottom));
  return new DOMRectReadOnly(left, top, right - left, bottom - top);
}

/**
 * Compute a renderable box for an element without climbing out of its root.
 * Handles display: contents and slots by unioning descendant/assigned rects.
 */
export function getRenderableBox(
  element: HTMLElement | null
): { element: HTMLElement; rect: DOMRectReadOnly } | null {
  if (!element) return null;

  const root = element.getRootNode();

  const rect = element.getBoundingClientRect();
  if (!isZeroRect(rect) && !isDisplayContents(element)) {
    return { element, rect };
  }

  if (isDisplayContents(element)) {
    const childRects = Array.from(element.children)
      .filter((n): n is HTMLElement => n instanceof HTMLElement)
      .map((child) => child.getBoundingClientRect())
      .filter((r) => !isZeroRect(r));

    if (childRects.length) {
      return { element, rect: unionRects(childRects) };
    }
  }

  if (element instanceof HTMLSlotElement) {
    const assignedRects = element
      .assignedElements({ flatten: true })
      .map((el) => el.getBoundingClientRect())
      .filter((r) => !isZeroRect(r));
    if (assignedRects.length) {
      return { element, rect: unionRects(assignedRects) };
    }
  }

  let current: HTMLElement | null = element;
  while (current) {
    const parent: HTMLElement | null = current.parentElement;
    if (!parent || parent === document.body || parent.getRootNode() !== root) {
      break;
    }
    const parentRect = parent.getBoundingClientRect();
    if (!isZeroRect(parentRect) && !isDisplayContents(parent)) {
      return { element: parent, rect: parentRect };
    }
    current = parent;
  }

  // Fallback: zero rect for the original element
  return { element, rect };
}

/**
 * Balanced, well-formed HTML context around `node`.
 * Builds an ancestor container that reaches the desired context size,
 * replaces the node with markers, then splits the container HTML so the
 * before/after strings include all necessary wrapper tags. Selector UI
 * artifacts are removed automatically.
 */
export function balancedContextHtml(
  node: Node,
  contextChars = 300,
  { maxAncestors = 10 }: ContextHtmlOptions = {}
): ContextHtmlResult {
  if (!node || !node.parentNode) {
    throw new Error("Node must be attached to the DOM (with a parent).");
  }

  const serializeSingleNode = (target: Node): string => {
    if (target.nodeType === Node.ELEMENT_NODE) {
      return (target as Element).outerHTML;
    }
    if (target.nodeType === Node.TEXT_NODE) {
      return (target.textContent ?? "").toString();
    }
    return new XMLSerializer().serializeToString(target);
  };

  const getNodePath = (root: Node, target: Node): number[] => {
    const path: number[] = [];
    let current: Node | null = target;

    while (current && current !== root) {
      const parent = current.parentNode as (Node & ParentNode) | null;
      if (!parent) {
        throw new Error("Failed to resolve node path for context extraction.");
      }

      const index = Array.prototype.indexOf.call(parent.childNodes, current);
      if (index === -1) {
        throw new Error("Unable to map node into cloned context tree.");
      }

      path.unshift(index);
      current = parent;
    }

    if (current !== root) {
      throw new Error("Context root does not contain the requested node.");
    }

    return path;
  };

  const removeSelectorArtifacts = (container: HTMLElement) => {
    const artifacts = container.querySelectorAll(
      "#element-selector-root, #element-selector-overlay"
    );
    artifacts.forEach((element) => element.remove());
  };

  const markers = {
    start: `__element_selector_start_${Math.random().toString(36).slice(2)}__`,
    end: `__element_selector_end_${Math.random().toString(36).slice(2)}__`,
  };

  const serializeForRoot = (root: Node): ContextHtmlResult => {
    const wrapper = document.createElement("div");
    const clonedRoot =
      root instanceof ShadowRoot
        ? (() => {
            const frag = document.createDocumentFragment();
            root.childNodes.forEach((child) =>
              frag.appendChild(child.cloneNode(true))
            );
            return frag;
          })()
        : root.cloneNode(true);

    // ShadowRoot/DocumentFragment cannot be appended directly (their children are
    // moved instead), so wrap them to preserve the structure we mirror against.
    const cloneContainer =
      clonedRoot.nodeType === Node.DOCUMENT_FRAGMENT_NODE
        ? (() => {
            const container = document.createElement("div");
            container.appendChild(clonedRoot);
            return container;
          })()
        : (clonedRoot as Node);

    wrapper.appendChild(cloneContainer);
    removeSelectorArtifacts(wrapper);

    // Traverse the clone contained in `cloneContainer` so child indices match
    // the original root (DocumentFragments end up with their children moved
    // into the container).
    const cloneTraversalRoot = cloneContainer as Node;

    if (!cloneTraversalRoot.firstChild) {
      return {
        beforeHtml: "",
        elementHtml: serializeSingleNode(node),
        afterHtml: "",
      };
    }

    const path = getNodePath(root, node);
    let cloneTarget: Node = cloneTraversalRoot;
    for (const index of path) {
      const next = cloneTarget.childNodes.item(index);
      if (!next) {
        throw new Error("Failed to mirror node inside cloned context tree.");
      }
      cloneTarget = next;
    }

    const parentClone = cloneTarget.parentNode;
    if (!parentClone) {
      // The node itself is the root; no surrounding context exists.
      return {
        beforeHtml: "",
        elementHtml: serializeSingleNode(node),
        afterHtml: "",
      };
    }

    const startMarkerNode = document.createTextNode(markers.start);
    const endMarkerNode = document.createTextNode(markers.end);

    parentClone.insertBefore(startMarkerNode, cloneTarget);
    parentClone.insertBefore(endMarkerNode, cloneTarget.nextSibling);
    parentClone.removeChild(cloneTarget);

    const serialized =
      root.nodeType === Node.DOCUMENT_FRAGMENT_NODE
        ? (cloneContainer as HTMLElement).innerHTML
        : wrapper.innerHTML;
    const startIndex = serialized.indexOf(markers.start);
    const endIndex = serialized.indexOf(markers.end);

    if (startIndex === -1 || endIndex === -1 || endIndex < startIndex) {
      throw new Error("Failed to locate context markers during serialization.");
    }

    const beforeHtml = serialized.slice(0, startIndex);
    const afterHtml = serialized.slice(endIndex + markers.end.length);

    return {
      beforeHtml,
      elementHtml: serializeSingleNode(node),
      afterHtml,
    };
  };

  const nextRoot = (current: Node): Node | null => {
    if (!current.parentNode) {
      return null;
    }
    if (current.parentNode.nodeType === Node.DOCUMENT_NODE) {
      const doc = current.parentNode as Document;
      return doc.documentElement ?? null;
    }
    return current.parentNode;
  };

  let depth = 0;
  let contextRoot: Node | null = node.parentNode ?? node;
  let context = serializeForRoot(contextRoot);

  while (
    depth < maxAncestors &&
    (context.beforeHtml.length < contextChars ||
      context.afterHtml.length < contextChars)
  ) {
    const candidate = nextRoot(contextRoot!);
    if (!candidate) {
      break;
    }

    // Stop if we've reached the same root again (e.g., html element)
    if (candidate === contextRoot) {
      break;
    }

    depth += 1;
    contextRoot = candidate;
    context = serializeForRoot(contextRoot);

    if (!contextRoot.parentNode || contextRoot.parentNode.nodeType === Node.DOCUMENT_NODE) {
      break;
    }
  }

  return context;
}
