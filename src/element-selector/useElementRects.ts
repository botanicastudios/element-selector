/**
 * Shared geometry tracker for highlight overlays.
 * Measures all provided elements in a single rAF tick and
 * skips off-screen nodes to avoid needless work while scrolling.
 */

import { useEffect, useMemo, useRef, useState } from "react";

type UseElementRectMapOptions = {
  /**
   * If true, elements that are outside the viewport won't be measured
   * until they enter the viewport again.
   */
  skipOffscreen?: boolean;
};

export function useElementRectMap(
  elements: Array<HTMLElement | null>,
  { skipOffscreen = true }: UseElementRectMapOptions = {}
): Map<HTMLElement, DOMRectReadOnly> {
  const [rectMap, setRectMap] = useState<Map<HTMLElement, DOMRectReadOnly>>(
    () => new Map()
  );

  // Keep intersection state in a ref to avoid extra renders
  const visibilityRef = useRef<Map<HTMLElement, boolean>>(new Map());
  const frameRef = useRef<number | null>(null);

  // Deduplicate elements to avoid double observing the same node
  const trackedElements = useMemo(() => {
    const seen = new Set<HTMLElement>();
    const list: HTMLElement[] = [];
    for (const el of elements) {
      if (el && !seen.has(el)) {
        seen.add(el);
        list.push(el);
      }
    }
    return list;
  }, [elements]);

  useEffect(() => {
    if (!trackedElements.length) {
      setRectMap(new Map());
      return;
    }

    let resizeObserver: ResizeObserver | null = null;
    let intersectionObserver: IntersectionObserver | null = null;

    const scheduleMeasure = () => {
      if (frameRef.current !== null) return;
      frameRef.current = requestAnimationFrame(() => {
        frameRef.current = null;
        setRectMap((previous) => {
          const next = new Map<HTMLElement, DOMRectReadOnly>();
          let changed = false;

          for (const el of trackedElements) {
            const isVisible =
              !skipOffscreen ||
              visibilityRef.current.get(el) ||
              visibilityRef.current.size === 0;

            // If we're skipping off-screen items and this one isn't visible,
            // preserve the previous rect if we had one so consumers can decide
            // whether to render.
            if (!isVisible) {
              const priorRect = previous.get(el);
              if (priorRect) {
                next.set(el, priorRect);
              }
              continue;
            }

            const rect = el.getBoundingClientRect();
            const prevRect = previous.get(el);
            const rectChanged =
              !prevRect ||
              rect.top !== prevRect.top ||
              rect.left !== prevRect.left ||
              rect.width !== prevRect.width ||
              rect.height !== prevRect.height;

            if (rectChanged) {
              changed = true;
            }
            next.set(el, rect);
          }

          // Avoid state updates if nothing changed
          if (!changed && previous.size === next.size) {
            return previous;
          }

          return next;
        });
      });
    };

    // Watch element size changes
    resizeObserver = new ResizeObserver(scheduleMeasure);
    trackedElements.forEach((el) => resizeObserver?.observe(el));

    // Watch viewport visibility
    if ("IntersectionObserver" in window) {
      intersectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            visibilityRef.current.set(entry.target as HTMLElement, entry.isIntersecting);
          });
          scheduleMeasure();
        },
        { root: null, threshold: 0 }
      );
      trackedElements.forEach((el) => intersectionObserver?.observe(el));
    }

    // Listen for scroll/resize to reposition overlays
    window.addEventListener("scroll", scheduleMeasure, true);
    window.addEventListener("resize", scheduleMeasure);

    // Initial measure
    scheduleMeasure();

    return () => {
      if (resizeObserver) resizeObserver.disconnect();
      if (intersectionObserver) intersectionObserver.disconnect();
      window.removeEventListener("scroll", scheduleMeasure, true);
      window.removeEventListener("resize", scheduleMeasure);
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };
  }, [trackedElements, skipOffscreen]);

  return rectMap;
}
