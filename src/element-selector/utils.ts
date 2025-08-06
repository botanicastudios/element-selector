/**
 * DOM utilities for element selection
 */

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
    if (current.className && typeof current.className === "string") {
      const classes = current.className
        .split(/\s+/)
        .filter((c) => c && !c.includes(":"))
        .map((c) => `.${CSS.escape(c)}`)
        .slice(0, 2) // Limit to 2 classes for readability
        .join("");
      if (classes) {
        selector += classes;
      }
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
  const classes =
    element.className && typeof element.className === "string"
      ? element.className
          .split(/\s+/)
          .filter((c) => c)
          .map((c) => `.${c}`)
          .slice(0, 2)
          .join("")
      : "";

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
