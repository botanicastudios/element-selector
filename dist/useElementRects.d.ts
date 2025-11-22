/**
 * Shared geometry tracker for highlight overlays.
 * Measures all provided elements in a single rAF tick and
 * skips off-screen nodes to avoid needless work while scrolling.
 */
type UseElementRectMapOptions = {
    /**
     * If true, elements that are outside the viewport won't be measured
     * until they enter the viewport again.
     */
    skipOffscreen?: boolean;
};
export declare function useElementRectMap(elements: Array<HTMLElement | null>, { skipOffscreen }?: UseElementRectMapOptions): Map<HTMLElement, DOMRectReadOnly>;
export {};
