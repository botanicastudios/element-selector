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
 * Find the topmost element at given coordinates
 * Excludes overlay elements and SVG internals
 */
export function findElementAtCoordinates(x: number, y: number): HTMLElement {
  // Get all elements at the point
  const elements = document.elementsFromPoint(x, y);

  // Find first valid element
  for (const element of elements) {
    // Skip our own overlay and its children
    if (
      element.id === "element-selector-overlay" ||
      element.closest("#element-selector-overlay") ||
      element.id === "element-selector-root" ||
      element.closest("#element-selector-root")
    ) {
      continue;
    }

    // Skip SVG internal elements (but allow top-level SVG)
    if (
      element.tagName !== "svg" &&
      element.tagName !== "SVG" &&
      element.closest("svg")
    ) {
      continue;
    }

    // Return the first valid element we find
    return element as HTMLElement;
  }

  // Fallback to body
  return document.body;
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
    const clonedRoot = root.cloneNode(true);

    wrapper.appendChild(clonedRoot);
    removeSelectorArtifacts(wrapper);

    if (!wrapper.firstChild) {
      return {
        beforeHtml: "",
        elementHtml: serializeSingleNode(node),
        afterHtml: "",
      };
    }

    const path = getNodePath(root, node);
    let cloneTarget: Node = wrapper.firstChild;
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

    const serialized = wrapper.innerHTML;
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
