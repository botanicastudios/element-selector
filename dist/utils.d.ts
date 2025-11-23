/**
 * DOM utilities for element selection
 */
import type { ContextHtmlOptions, ContextHtmlResult } from "./types";
/**
 * Safely extract class names from any element (HTML or SVG)
 * Handles string, SVGAnimatedString, and DOMTokenList variants
 */
export declare function getClassNames(element: Element | null): string[];
/**
 * Find the deepest (shadow-inclusive) element at given coordinates.
 * Excludes selector UI artifacts and SVG internals.
 */
export declare function findElementAtCoordinates(x: number, y: number): HTMLElement;
/**
 * Build a CSS selector for an element
 * Tries to create the most specific selector possible
 */
export declare function buildElementSelector(element: HTMLElement): string;
/**
 * Get a human-readable description of an element
 */
export declare function getElementDescription(element: HTMLElement): string;
/**
 * Convert HTML tag names to friendly, human-readable names
 */
export declare function getFriendlyTagName(tagName: string): string;
/**
 * Compute a renderable box for an element without climbing out of its root.
 * Handles display: contents and slots by unioning descendant/assigned rects.
 */
export declare function getRenderableBox(element: HTMLElement | null): {
    element: HTMLElement;
    rect: DOMRectReadOnly;
} | null;
/**
 * Balanced, well-formed HTML context around `node`.
 * Builds an ancestor container that reaches the desired context size,
 * replaces the node with markers, then splits the container HTML so the
 * before/after strings include all necessary wrapper tags. Selector UI
 * artifacts are removed automatically.
 */
export declare function balancedContextHtml(node: Node, contextChars?: number, { maxAncestors }?: ContextHtmlOptions): ContextHtmlResult;
