/**
 * Shared geometry tracker for highlight overlays.
 * Measures all provided elements in a single rAF tick and
 * skips off-screen nodes to avoid needless work while scrolling.
 */
type UseElementRectMapOptions = {
    /** When true, log every measurement for debugging. */
    debug?: boolean;
};
export declare function useElementRectMap(elements: Array<HTMLElement | null>, { debug }?: UseElementRectMapOptions): Map<HTMLElement, DOMRectReadOnly>;
export {};
