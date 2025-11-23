/**
 * Shared geometry tracker for highlight overlays.
 * Measures all provided elements in a single rAF tick and
 * skips off-screen nodes to avoid needless work while scrolling.
 */

import { useEffect, useMemo, useRef, useState } from "react";
import { getRenderableBox } from "./utils";

type UseElementRectMapOptions = {
  /** When true, log every measurement for debugging. */
  debug?: boolean;
};

export function useElementRectMap(
  elements: Array<HTMLElement | null>,
  { debug = false }: UseElementRectMapOptions = {}
): Map<HTMLElement, DOMRectReadOnly> {
  const [rectMap, setRectMap] = useState<Map<HTMLElement, DOMRectReadOnly>>(
    () => new Map()
  );

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

    const scheduleMeasure = () => {
      if (frameRef.current !== null) return;
      frameRef.current = requestAnimationFrame(() => {
        frameRef.current = null;
        setRectMap((previous) => {
          const next = new Map<HTMLElement, DOMRectReadOnly>();
          let changed = false;

          for (const el of trackedElements) {
            const box = getRenderableBox(el);
            const rect = box?.rect;
            if (!rect) {
              const priorRect = previous.get(el);
              if (priorRect) {
                next.set(el, priorRect);
              }
              continue;
            }

            const prevRect = previous.get(el);
            const rectChanged =
              !prevRect ||
              rect.top !== prevRect.top ||
              rect.left !== prevRect.left ||
              rect.width !== prevRect.width ||
              rect.height !== prevRect.height;

            if (rectChanged) {
              changed = true;
              if (debug) {
                console.debug("[element-selector] measure", {
                  tag: el.tagName,
                  id: el.id,
                  className: el.className,
                  rect: {
                    top: rect.top,
                    left: rect.left,
                    width: rect.width,
                    height: rect.height,
                  },
                });
              }
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

    // Listen for scroll/resize to reposition overlays
    window.addEventListener("scroll", scheduleMeasure, true);
    window.addEventListener("resize", scheduleMeasure);

    // Initial measure
    scheduleMeasure();

    return () => {
      if (resizeObserver) resizeObserver.disconnect();
      window.removeEventListener("scroll", scheduleMeasure, true);
      window.removeEventListener("resize", scheduleMeasure);
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };
  }, [trackedElements]);

  return rectMap;
}
