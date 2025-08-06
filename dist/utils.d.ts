/**
 * DOM utilities for element selection
 */
/**
 * Find the topmost element at given coordinates
 * Excludes overlay elements and SVG internals
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
