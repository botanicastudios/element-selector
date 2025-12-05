/**
 * DOM element picker component - allows visual selection of page elements
 */

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  CSSProperties,
} from "react";
import { HoveredItem } from "./HoveredItem";
import { SelectedItem } from "./SelectedItem";
import { InsertionGuide } from "./InsertionGuide";
import {
  findElementAtCoordinates,
  buildElementSelector,
  balancedContextHtml,
  getRenderableBox,
} from "./utils";
import { useElementRectMap } from "./useElementRects";
import type {
  ElementSelectorProps,
  ElementInfo,
  MousePosition,
  InsertionCandidate,
  ElementSelectorMode,
  ElementSelectorTheme,
} from "./types";

const EDGE_BEHAVIOUR: Record<
  "top" | "bottom" | "left" | "right",
  Pick<InsertionCandidate, "position" | "axis">
> = {
  top: { position: "before", axis: "horizontal" },
  bottom: { position: "after", axis: "horizontal" },
  left: { position: "before", axis: "vertical" },
  right: { position: "after", axis: "vertical" },
};

const CONTEXT_CHARS = 300;

type ThemeTokens = {
  panelBg: string;
  textColor: string;
  subTextColor: string;
  pillBg: string;
  pillBorder: string;
  toggleSelectedBg: string;
  toggleHoverBg: string;
  toggleSelectedText: string;
  toggleIdleText: string;
  toggleIdleTextHover: string;
  chipBg: string;
  chipColor: string;
  actionBg: string;
  actionBgHover: string;
  actionBgDisabled: string;
  actionColor: string;
  actionColorHover: string;
  actionColorDisabled: string;
  instructionTextColor: string;
  shadow: string;
  border: string;
};

function resolveThemeTokens(theme: ElementSelectorTheme): ThemeTokens {
  if (theme === "light") {
    return {
      panelBg: "#f7f7f7",
      textColor: "#111111",
      subTextColor: "#1f1f1f",
      pillBg: "#e6e6e6",
      pillBorder: "rgba(0, 0, 0, 0.10)",
      toggleSelectedBg: "#0f0f0f",
      toggleHoverBg: "rgba(0, 0, 0, 0.08)",
      toggleSelectedText: "#f7f7f7",
      toggleIdleText: "#111111",
      toggleIdleTextHover: "#111111",
      chipBg: "#e6e6e6",
      chipColor: "#111111",
      actionBg: "rgba(0, 0, 0, 0.05)",
      actionBgHover: "rgba(0, 0, 0, 0.12)",
      actionBgDisabled: "rgba(0, 0, 0, 0.03)",
      actionColor: "#111111",
      actionColorHover: "#000000",
      actionColorDisabled: "#6b7280",
      instructionTextColor: "#111111",
      shadow: "0 8px 28px rgba(0, 0, 0, 0.16)",
      border: "1px solid rgba(0, 0, 0, 0.08)",
    };
  }

  return {
    panelBg: "#0f0f10",
    textColor: "#f5f5f5",
    subTextColor: "#e5e5e5",
    pillBg: "#181818",
    pillBorder: "rgba(255, 255, 255, 0.18)",
    toggleSelectedBg: "#f5f5f5",
    toggleHoverBg: "rgba(255, 255, 255, 0.14)",
    toggleSelectedText: "#0f0f10",
    toggleIdleText: "#f5f5f5",
    toggleIdleTextHover: "#ffffff",
    chipBg: "rgba(255, 255, 255, 0.12)",
    chipColor: "#f5f5f5",
    actionBg: "rgba(255, 255, 255, 0.10)",
    actionBgHover: "rgba(255, 255, 255, 0.18)",
    actionBgDisabled: "rgba(255, 255, 255, 0.06)",
    actionColor: "#f5f5f5",
    actionColorHover: "#ffffff",
    actionColorDisabled: "#9ca3af",
    instructionTextColor: "#f5f5f5",
    shadow: "0 6px 28px rgba(0, 0, 0, 0.38)",
    border: "1px solid rgba(255, 255, 255, 0.12)",
  };
}

type AiAttributes = {
  src?: string;
  routeId?: string;
  routeFile?: string;
};

function readAiAttributes(element: Element | null): AiAttributes {
  if (!element) {
    return {};
  }

  const attrs: AiAttributes = {};
  const attrNames: Array<[keyof AiAttributes, string]> = [
    ["src", "data-ai-src"],
    ["routeId", "data-ai-route-id"],
    ["routeFile", "data-ai-route-file"],
  ];

  let current: Element | null = element;

  // Walk up through regular DOM parents and across shadow boundaries (via host)
  // until we find the nearest provider for each attribute.
  while (current) {
    const node = current;
    attrNames.forEach(([key, name]) => {
      if (attrs[key] !== undefined) return;
      const value = node.getAttribute(name);
      if (value) {
        attrs[key] = value;
      }
    });

    if (attrs.src && attrs.routeId && attrs.routeFile) {
      break;
    }

    if (current.parentElement) {
      current = current.parentElement;
      continue;
    }

    const root = current.getRootNode();
    current = root instanceof ShadowRoot ? root.host : null;
  }

  return attrs;
}

const textPreviewFor = (element: HTMLElement): string => {
  const raw = (element.innerText ?? element.textContent ?? "").toString();
  const normalized = raw.replace(/\s+/g, " ").trim();
  const limit = 1024;
  if (normalized.length <= limit) return normalized;
  const trimmed = normalized.slice(0, limit);
  return `${trimmed}<!-- SNIPPET FOR BREVITY -->`;
};

function deriveInsertionCandidate(
  element: HTMLElement | null,
  x: number,
  y: number
): InsertionCandidate | null {
  if (!element || element === document.documentElement) {
    return null;
  }

  const rect = element.getBoundingClientRect();
  if (rect.width === 0 && rect.height === 0) {
    return null;
  }

  const distances: Array<{
    edge: "top" | "bottom" | "left" | "right";
    value: number;
  }> = [
    { edge: "top", value: Math.abs(y - rect.top) },
    { edge: "bottom", value: Math.abs(y - rect.bottom) },
    { edge: "left", value: Math.abs(x - rect.left) },
    { edge: "right", value: Math.abs(x - rect.right) },
  ];

  distances.sort((a, b) => a.value - b.value);
  const nearest = distances[0];
  if (!nearest) {
    return null;
  }

  const behaviour = EDGE_BEHAVIOUR[nearest.edge];
  return {
    element,
    position: behaviour.position,
    axis: behaviour.axis,
  };
}

function isSelectorArtifact(node: HTMLElement | null): boolean {
  if (!node) return false;
  return Boolean(
    node.id === "element-selector-overlay" ||
      node.closest("#element-selector-overlay") ||
      node.id === "element-selector-root" ||
      node.closest("#element-selector-root")
  );
}

function isDocumentRootElement(node: HTMLElement | null): boolean {
  return node === document.body || node === document.documentElement;
}

function preferDeepTarget(
  pathTarget: HTMLElement | null,
  pointTarget: HTMLElement | null
): HTMLElement | null {
  // If pointTarget lives inside the shadow root of the pathTarget host, prefer it.
  if (
    pointTarget &&
    pathTarget &&
    pathTarget.shadowRoot &&
    pointTarget.getRootNode() === pathTarget.shadowRoot
  ) {
    return pointTarget;
  }

  // Otherwise keep the composed-path target when it exists and isn't a document root.
  if (pathTarget && !isDocumentRootElement(pathTarget)) {
    return pathTarget;
  }

  return pointTarget;
}

function targetFromComposedPath(event: MouseEvent): HTMLElement | null {
  const path = event.composedPath?.() ?? [];
  for (const node of path) {
    if (!(node instanceof HTMLElement)) continue;
    if (isSelectorArtifact(node)) continue;
    return node;
  }
  return null;
}

function composedParent(element: HTMLElement | null): HTMLElement | null {
  if (!element) return null;
  if (element.parentElement) return element.parentElement;
  const root = element.getRootNode();
  if (root instanceof ShadowRoot) {
    return root.host as HTMLElement;
  }
  return null;
}

export function ElementSelector({
  onElementSelected,
  onCancel,
  multiSelect = false,
  friendlySelectors = false,
  initialMode = "select",
  allowModeToggle = true,
  lasso = false,
  optionsPanelPosition,
  selectionBarText,
  theme = "dark",
  debug = false,
}: ElementSelectorProps) {
  const resolvedInitialMode =
    initialMode === "lasso" && !lasso ? "select" : initialMode;

  const [mode, setMode] = useState<ElementSelectorMode>(resolvedInitialMode);
  const effectiveMultiSelect = mode === "select" && multiSelect;
  const themeTokens = resolveThemeTokens(theme);
  const [currentHover, setCurrentHover] = useState<HTMLElement | null>(null);
  const [insertionCandidate, setInsertionCandidate] =
    useState<InsertionCandidate | null>(null);
  const [pickedElements, setPickedElements] = useState<HTMLElement[]>([]);
  const [canAddElement, setCanAddElement] = useState(false);
  const [pendingInsert, setPendingInsert] = useState<InsertionCandidate | null>(
    null
  );
  const [lassoBox, setLassoBox] = useState<{
    start: MousePosition;
    current: MousePosition;
  } | null>(null);
  const [lassoElements, setLassoElements] = useState<HTMLElement[]>([]);
  const [isMobileViewport, setIsMobileViewport] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 640px)").matches;
  });

  const trackedElements = useMemo(() => {
    const list: HTMLElement[] = [];
    if (currentHover) list.push(currentHover);
    if (
      insertionCandidate?.element &&
      !list.includes(insertionCandidate.element)
    ) {
      list.push(insertionCandidate.element);
    }
    pickedElements.forEach((el) => {
      if (!list.includes(el)) list.push(el);
    });
    lassoElements.forEach((el) => {
      if (!list.includes(el)) list.push(el);
    });
    return list;
  }, [currentHover, insertionCandidate, pickedElements, lassoElements]);

  const rectMap = useElementRectMap(trackedElements, {
    debug,
  });

  const logDebug = useCallback(
    (...messages: unknown[]) => {
      if (!debug) return;
      console.debug("[element-selector]", ...messages);
    },
    [debug]
  );

  useEffect(() => {
    if (!debug || !currentHover) return;
    logDebug("current hover rect", {
      tag: currentHover.tagName,
      id: currentHover.id,
      className: currentHover.className,
      rect: rectMap.get(currentHover) ?? null,
    });
  }, [currentHover, rectMap, debug, logDebug]);

  const mousePositionRef = useRef<MousePosition>({ x: 0, y: 0 });
  const updateTimerRef = useRef<NodeJS.Timeout | null>(null);
  const previousHoverRef = useRef<HTMLElement | null>(null);
  const previousInsertionRef = useRef<InsertionCandidate | null>(null);
  const lastPointerTargetRef = useRef<HTMLElement | null>(null);
  const lastPathTargetRef = useRef<HTMLElement | null>(null);
  const lassoTargetsRef = useRef<HTMLElement[]>([]);
  const lassoActiveRef = useRef(false);
  const lassoStartRef = useRef<MousePosition | null>(null);
  const suppressClickRef = useRef(false);

  const toElementInfo = useCallback(
    (element: HTMLElement, extra: Partial<ElementInfo> = {}): ElementInfo => {
      const baseContext = (() => {
        try {
          return balancedContextHtml(element, CONTEXT_CHARS);
        } catch (error) {
          return {
            beforeHtml: "",
            elementHtml: element.outerHTML || "",
            afterHtml: "",
          };
        }
      })();

      const info: ElementInfo = {
        element,
        selector: buildElementSelector(element),
        tag: element.tagName.toLowerCase(),
        id: element.id || null,
        classes: element.className || "",
        textPreview: textPreviewFor(element),
        beforeHtml: baseContext.beforeHtml,
        elementHtml: baseContext.elementHtml,
        afterHtml: baseContext.afterHtml,
        ...readAiAttributes(element),
        ...extra,
      };

      // Neighbor AI metadata (used for markdown summaries and insert context)
      const prev = element.previousElementSibling;
      const next = element.nextElementSibling;
      const prevAttrs = readAiAttributes(prev);
      const nextAttrs = readAiAttributes(next);

      info.beforeSrc = prevAttrs.src;
      info.beforeRouteId = prevAttrs.routeId;
      info.beforeRouteFile = prevAttrs.routeFile;
      info.afterSrc = nextAttrs.src;
      info.afterRouteId = nextAttrs.routeId;
      info.afterRouteFile = nextAttrs.routeFile;

      if (info.mode === "insert") {
        info.insertionBeforeHtml =
          info.insertionPosition === "after"
            ? info.beforeHtml + info.elementHtml
            : info.beforeHtml;
        info.insertionAfterHtml =
          info.insertionPosition === "before"
            ? info.elementHtml + info.afterHtml
            : info.afterHtml;

        const insertionSide =
          info.insertionPosition === "before" ? "before" : "after";

        const beforeElement =
          insertionSide === "before" ? element.previousElementSibling : element;
        const afterElement =
          insertionSide === "before" ? element : element.nextElementSibling;

        const beforeAttributes = readAiAttributes(beforeElement);
        const afterAttributes = readAiAttributes(afterElement);

        info.beforeSrc = beforeAttributes.src;
        info.beforeRouteId = beforeAttributes.routeId;
        info.beforeRouteFile = beforeAttributes.routeFile;

        info.afterSrc = afterAttributes.src;
        info.afterRouteId = afterAttributes.routeId;
        info.afterRouteFile = afterAttributes.routeFile;
      } else {
        info.insertionBeforeHtml = info.beforeHtml;
        info.insertionAfterHtml = info.afterHtml;
      }

      return info;
    },
    []
  );

  const computeLassoTargets = useCallback(
    (bounds: { left: number; right: number; top: number; bottom: number }) => {
      const candidates: HTMLElement[] = [];

      const all = Array.from(document.body.querySelectorAll("*")) as HTMLElement[];
      for (const el of all) {
        if (isSelectorArtifact(el)) continue;
        if (el.closest('[data-element-selector-ui="true"]')) continue;
        if (isDocumentRootElement(el)) continue;

        const measurable = getRenderableBox(el);
        const rect = measurable?.rect;
        const targetElement = measurable?.element ?? el;
        if (!rect || rect.width === 0 || rect.height === 0) continue;

        const fullyContained =
          rect.left >= bounds.left &&
          rect.right <= bounds.right &&
          rect.top >= bounds.top &&
          rect.bottom <= bounds.bottom;

        if (fullyContained) {
          candidates.push(targetElement);
        }
      }

      const candidateSet = new Set(candidates);
      const filtered = candidates.filter((el) => {
        let parent = composedParent(el);
        while (parent) {
          if (candidateSet.has(parent)) return false;
          parent = composedParent(parent);
        }
        return true;
      });

      return filtered;
    },
    []
  );

  // Update hover element based on current mouse position
  const updateHoverElement = useCallback(() => {
    if (mode === "lasso") {
      return;
    }

    const pointTarget = findElementAtCoordinates(
      mousePositionRef.current.x,
      mousePositionRef.current.y
    );

    const rawTarget = preferDeepTarget(
      lastPathTargetRef.current,
      pointTarget
    );

    const measurable = getRenderableBox(rawTarget);
    const measurableTarget = measurable?.element ?? rawTarget;

    logDebug("hover update", {
      point: { ...mousePositionRef.current },
      composedTarget: lastPathTargetRef.current?.tagName,
      pointTarget: pointTarget?.tagName,
      chosenTarget: rawTarget?.tagName,
      measurableTarget: measurableTarget?.tagName,
      id: rawTarget?.id,
      className: rawTarget?.className,
      pointRoot:
        pointTarget?.getRootNode() instanceof ShadowRoot
          ? (pointTarget.getRootNode() as ShadowRoot).host.tagName
          : null,
      composedRoot:
        lastPathTargetRef.current?.getRootNode() instanceof ShadowRoot
          ? ((lastPathTargetRef.current.getRootNode() as ShadowRoot).host as HTMLElement).tagName
          : null,
    });

    if (mode === "insert") {
      const candidate = deriveInsertionCandidate(
        measurableTarget,
        mousePositionRef.current.x,
        mousePositionRef.current.y
      );

      const hasChanged =
        (candidate &&
          (!previousInsertionRef.current ||
            previousInsertionRef.current.element !== candidate.element ||
            previousInsertionRef.current.position !== candidate.position ||
            previousInsertionRef.current.axis !== candidate.axis)) ||
        (!candidate && previousInsertionRef.current);

      if (hasChanged) {
        previousInsertionRef.current = candidate;
        setInsertionCandidate(candidate ?? null);
      }

      setCanAddElement(Boolean(candidate));
      setCurrentHover(candidate ? candidate.element : null);
      previousHoverRef.current = candidate ? candidate.element : null;
      return;
    }

    if (previousInsertionRef.current) {
      previousInsertionRef.current = null;
      setInsertionCandidate(null);
    }

    const isInsidePickedElement =
      effectiveMultiSelect &&
      pickedElements.some((picked) => picked.contains(measurableTarget ?? rawTarget ?? picked));

    if (isInsidePickedElement) {
      setCanAddElement(false);
      setCurrentHover(null);
      previousHoverRef.current = null;
      return;
    }

    if (previousHoverRef.current !== measurableTarget) {
      previousHoverRef.current = measurableTarget;
      setCurrentHover(measurableTarget);
      setCanAddElement(true);
      logDebug("setCurrentHover", {
        tag: measurableTarget?.tagName,
        id: measurableTarget?.id,
        className: measurableTarget?.className,
        rect: measurableTarget ? rectMap.get(measurableTarget) ?? null : null,
      });
    }
  }, [effectiveMultiSelect, mode, pickedElements, rectMap, logDebug]);

  // Track mouse movement
  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      const pathTarget = targetFromComposedPath(event);
      const target = pathTarget ?? (event.target as HTMLElement | null);

      if (target?.closest('[data-element-selector-ui="true"]')) {
        if (updateTimerRef.current) {
          clearTimeout(updateTimerRef.current);
          updateTimerRef.current = null;
        }
        lastPointerTargetRef.current = null;
        lastPathTargetRef.current = null;
        setCurrentHover(null);
        setInsertionCandidate(null);
        previousHoverRef.current = null;
        previousInsertionRef.current = null;
        setCanAddElement(false);
        return;
      }

      if (lassoActiveRef.current && lassoStartRef.current && mode === "lasso") {
        const nextPoint = { x: event.clientX, y: event.clientY };
        setLassoBox({ start: lassoStartRef.current, current: nextPoint });

        const left = Math.min(lassoStartRef.current.x, nextPoint.x);
        const right = Math.max(lassoStartRef.current.x, nextPoint.x);
        const top = Math.min(lassoStartRef.current.y, nextPoint.y);
        const bottom = Math.max(lassoStartRef.current.y, nextPoint.y);

        if (Math.abs(right - left) > 2 && Math.abs(bottom - top) > 2) {
          const matches = computeLassoTargets({ left, right, top, bottom });
          lassoTargetsRef.current = matches;
          setLassoElements(matches);
          setCanAddElement(true);
        }
        return;
      }

      const pointTarget = findElementAtCoordinates(event.clientX, event.clientY);
      lastPathTargetRef.current = pathTarget;
      lastPointerTargetRef.current = preferDeepTarget(pathTarget, pointTarget);

      mousePositionRef.current = {
        x: event.clientX,
        y: event.clientY,
      };

      if (updateTimerRef.current) {
        clearTimeout(updateTimerRef.current);
      }

      updateTimerRef.current = setTimeout(() => {
        updateHoverElement();
      }, 50);

      if (mode === "lasso") {
        setCurrentHover(null);
        setInsertionCandidate(null);
        setCanAddElement(true);
      }
    },
    [updateHoverElement, computeLassoTargets, mode]
  );

  const cancelLasso = useCallback(() => {
    lassoActiveRef.current = false;
    lassoStartRef.current = null;
    lassoTargetsRef.current = [];
    setLassoBox(null);
    setLassoElements([]);
  }, []);

  const finalizeLassoSelection = useCallback(() => {
    if (!lassoActiveRef.current) return;

    const selections = lassoTargetsRef.current;
    cancelLasso();

    suppressClickRef.current = true;
    setTimeout(() => {
      suppressClickRef.current = false;
    }, 0);

    if (selections.length) {
      const infos = selections.map((element) =>
        toElementInfo(element, { mode: "select" })
      );
      onElementSelected(infos);
    }
  }, [cancelLasso, onElementSelected, toElementInfo]);

  const handleMouseDown = useCallback(
    (event: MouseEvent) => {
      if (!lasso || mode !== "lasso") return;
      if (event.button !== 0) return;

      const target = event.target as HTMLElement | null;
      if (
        target?.closest('[data-element-selector-ui="true"]') ||
        target?.closest('[data-selected-element="true"]')
      ) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      const startPoint = { x: event.clientX, y: event.clientY };
      lassoActiveRef.current = true;
      lassoStartRef.current = startPoint;
      lassoTargetsRef.current = [];
      setLassoElements([]);
      setLassoBox({ start: startPoint, current: startPoint });
      setCurrentHover(null);
      setInsertionCandidate(null);
      setCanAddElement(true);
    },
    [lasso, mode]
  );

  const handleMouseUp = useCallback(
    (event: MouseEvent) => {
      if (!lassoActiveRef.current || mode !== "lasso") return;

      event.preventDefault();
      event.stopPropagation();
      finalizeLassoSelection();
    },
    [mode, finalizeLassoSelection]
  );

  // Reset hover on mouse leave
  const handleMouseLeave = useCallback(() => {
    if (updateTimerRef.current) {
      clearTimeout(updateTimerRef.current);
      updateTimerRef.current = null;
    }
    setCurrentHover(null);
    setInsertionCandidate(null);
    previousHoverRef.current = null;
    previousInsertionRef.current = null;
    setCanAddElement(false);
    lastPointerTargetRef.current = null;
    lastPathTargetRef.current = null;
    if (lassoActiveRef.current) {
      cancelLasso();
    }
  }, [cancelLasso]);

  const handleModeToggle = useCallback(
    (nextMode: ElementSelectorMode) => {
      if (nextMode === "lasso" && !lasso) return;
      if (nextMode === mode) {
        return;
      }
      logDebug("mode toggle", { from: mode, to: nextMode });
      setMode(nextMode);
      setPickedElements([]);
      setInsertionCandidate(null);
      setPendingInsert(null);
      setCurrentHover(null);
      previousHoverRef.current = null;
      previousInsertionRef.current = null;
      setCanAddElement(nextMode === "lasso" ? true : false);
      setLassoBox(null);
      setLassoElements([]);
      lassoTargetsRef.current = [];
      lassoActiveRef.current = false;
      lassoStartRef.current = null;
    },
    [mode, logDebug, lasso]
  );

  // Handle element selection
  const handleClick = useCallback(
    (event: MouseEvent) => {
      const shouldDeferConfirm = isMobileViewport && !effectiveMultiSelect;
      if (suppressClickRef.current) {
        suppressClickRef.current = false;
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      if (mode === "lasso") {
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      const target = event.target as HTMLElement;
      if (
        target.closest('[data-selected-element="true"]') ||
        target.closest('[data-element-selector-ui="true"]')
      ) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      const fromPath = targetFromComposedPath(event);
      const fromPoint = findElementAtCoordinates(event.clientX, event.clientY);

      const rawTarget = preferDeepTarget(fromPath, fromPoint) ?? fromPoint;

      const measurable = getRenderableBox(rawTarget);
      const targetElement = measurable?.element ?? rawTarget;

      if (mode === "insert") {
        const candidate = deriveInsertionCandidate(
          targetElement,
          event.clientX,
          event.clientY
        );

        if (!candidate) {
          logDebug("insert click with no candidate", {
            point: { x: event.clientX, y: event.clientY },
          });
          return;
        }

        if (shouldDeferConfirm) {
          // On mobile we don't get hover updates, so persist the insertion
          // candidate directly and avoid marking the element as "selected"
          // (which renders the SelectedItem pill instead of the insertion bar).
          setPendingInsert(candidate);
          setInsertionCandidate(candidate);
          setPickedElements([]);
          return;
        }

        onElementSelected([
          toElementInfo(candidate.element, {
            mode: "insert",
            insertionPosition: candidate.position,
            insertionAxis: candidate.axis,
          }),
        ]);
        return;
      }

      if (!targetElement) {
        return;
      }

      if (
        effectiveMultiSelect &&
        pickedElements.some((picked) => picked.contains(targetElement))
      ) {
        return;
      }

      if (effectiveMultiSelect) {
        setPickedElements((previous) => {
          if (previous.includes(targetElement)) {
            return previous;
          }
          return [...previous, targetElement];
        });
        return;
      }

      if (shouldDeferConfirm) {
        setPickedElements([targetElement]);
        setPendingInsert(null);
        return;
      }

      onElementSelected([toElementInfo(targetElement, { mode: "select" })]);
      logDebug("select click", {
        tag: targetElement.tagName,
        id: targetElement.id,
        className: targetElement.className,
        rect: rectMap.get(targetElement) ?? null,
      });
    },
    [
      effectiveMultiSelect,
      isMobileViewport,
      mode,
      onElementSelected,
      pickedElements,
      toElementInfo,
      rectMap,
      logDebug,
    ]
  );

  // Remove element from selection
  const deselectElement = useCallback((elementToRemove: HTMLElement) => {
    setPickedElements((previous) =>
      previous.filter((element) => element !== elementToRemove)
    );
  }, []);

  // Setup event listeners
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);
    document.addEventListener("click", handleClick, true);
    document.addEventListener("mousedown", handleMouseDown, true);
    document.addEventListener("mouseup", handleMouseUp, true);

    logDebug("selector mounted", {
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      tracked: trackedElements.length,
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
      document.removeEventListener("click", handleClick, true);
      document.removeEventListener("mousedown", handleMouseDown, true);
      document.removeEventListener("mouseup", handleMouseUp, true);
      if (updateTimerRef.current) {
        clearTimeout(updateTimerRef.current);
      }
      logDebug("selector unmounted");
    };
  }, [
    handleMouseMove,
    handleMouseLeave,
    handleClick,
    handleMouseDown,
    handleMouseUp,
    trackedElements.length,
    logDebug,
  ]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case "Escape":
          onCancel();
          break;
        case "Enter":
          if (mode === "lasso") {
            return;
          }
          if (mode === "insert" && insertionCandidate) {
            onElementSelected([
              toElementInfo(insertionCandidate.element, {
                mode: "insert",
                insertionPosition: insertionCandidate.position,
                insertionAxis: insertionCandidate.axis,
              }),
            ]);
            break;
          }

          if (effectiveMultiSelect && pickedElements.length > 0) {
            const elementData: ElementInfo[] = pickedElements.map((element) =>
              toElementInfo(element, { mode: "select" })
            );
            onElementSelected(elementData);
          }
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [
    effectiveMultiSelect,
    insertionCandidate,
    mode,
    onCancel,
    onElementSelected,
    pickedElements,
    toElementInfo,
  ]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    const update = () => setIsMobileViewport(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);

    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  const resolvedText = {
    selectLabel: selectionBarText?.selectLabel ?? "Select",
    insertLabel: selectionBarText?.insertLabel ?? "Insert",
    lassoLabel: selectionBarText?.lassoLabel ?? "Lasso",
    instructionSelectSingle:
      selectionBarText?.instructionSelectSingle ?? "Click an element to select",
    instructionSelectMulti:
      selectionBarText?.instructionSelectMulti ?? "Click elements to select",
    instructionInsert:
      selectionBarText?.instructionInsert ??
      "Click to choose where to insert new content",
    instructionLasso:
      selectionBarText?.instructionLasso ??
      "Click and drag to select everything inside the box",
    confirmLabel: selectionBarText?.confirmLabel ?? "✓",
    cancelLabel: selectionBarText?.cancelLabel ?? "✕",
  };

  const instructionText = (() => {
    if (mode === "lasso") {
      return resolvedText.instructionLasso;
    }

    if (mode === "insert") {
      return resolvedText.instructionInsert;
    }

    return effectiveMultiSelect
      ? resolvedText.instructionSelectMulti
      : resolvedText.instructionSelectSingle;
  })();

  const isLassoMode = mode === "lasso";

  const confirmSelection = useCallback(() => {
    if (isLassoMode) return;

    const shouldDeferConfirm = isMobileViewport && !effectiveMultiSelect;

    if (effectiveMultiSelect && pickedElements.length > 0) {
      const elementData: ElementInfo[] = pickedElements.map((element) =>
        toElementInfo(element, { mode: "select" })
      );
      onElementSelected(elementData);
      return;
    }

    if (shouldDeferConfirm) {
      if (mode === "select" && pickedElements[0]) {
        onElementSelected([
          toElementInfo(pickedElements[0], { mode: "select" }),
        ]);
        return;
      }

      if (mode === "insert" && pendingInsert) {
        onElementSelected([
          toElementInfo(pendingInsert.element, {
            mode: "insert",
            insertionPosition: pendingInsert.position,
            insertionAxis: pendingInsert.axis,
          }),
        ]);
      }
    }
  }, [
    effectiveMultiSelect,
    isMobileViewport,
    mode,
    onElementSelected,
    pendingInsert,
    pickedElements,
    toElementInfo,
    isLassoMode,
  ]);

  const shouldDeferConfirm =
    !isLassoMode && isMobileViewport && !effectiveMultiSelect;
  const canConfirm = isLassoMode
    ? false
    : effectiveMultiSelect
    ? pickedElements.length > 0
    : shouldDeferConfirm
    ? mode === "select"
      ? pickedElements.length > 0
      : Boolean(pendingInsert)
    : false;

  const showConfirmButton =
    !isLassoMode && (effectiveMultiSelect || shouldDeferConfirm);

  const lassoBounds = useMemo(() => {
    if (!lassoBox) return null;
    const { start, current } = lassoBox;
    return {
      left: Math.min(start.x, current.x),
      top: Math.min(start.y, current.y),
      width: Math.abs(current.x - start.x),
      height: Math.abs(current.y - start.y),
    };
  }, [lassoBox]);

  const resolvedPanelPosition = {
    vertical: optionsPanelPosition?.vertical ?? "top",
    horizontal: optionsPanelPosition?.horizontal ?? "center",
  } as const;

  const panelStyle: CSSProperties = {
    position: "fixed",
    background: themeTokens.panelBg,
    color: themeTokens.textColor,
    padding: isMobileViewport ? "14px 16px" : "16px 24px",
    borderRadius: isMobileViewport ? "16px" : "12px",
    fontSize: "15px",
    fontFamily: "system-ui, -apple-system, sans-serif",
    boxShadow: themeTokens.shadow,
    border: themeTokens.border,
    zIndex: 100001,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: isMobileViewport ? "10px" : "16px",
    pointerEvents: "auto",
    width: isMobileViewport ? "calc(100% - 24px)" : undefined,
    maxWidth: isMobileViewport
      ? "min(720px, calc(100% - 24px))"
      : "min(960px, calc(100% - 48px))",
    boxSizing: "border-box",
    flexWrap: "nowrap",
    overflowX: "auto",
    justifyContent: "space-between",
  };

  if (isMobileViewport) {
    panelStyle.left = "12px";
    panelStyle.right = "12px";
    panelStyle.bottom = "16px";
    panelStyle.top = undefined;
    panelStyle.transform = "none";
  } else {
    if (resolvedPanelPosition.vertical === "top") {
      panelStyle.top = "24px";
    } else {
      panelStyle.bottom = "24px";
    }

    switch (resolvedPanelPosition.horizontal) {
      case "left":
        panelStyle.left = "24px";
        panelStyle.transform = "none";
        break;
      case "right":
        panelStyle.right = "24px";
        panelStyle.transform = "none";
        break;
      default:
        panelStyle.left = "50%";
        panelStyle.transform = "translateX(-50%)";
        break;
    }
  }

  return (
    <div
      id="element-selector-overlay"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 99999,
      }}
    >
      <div
        data-element-selector-ui="true"
        style={{
          pointerEvents: "auto",
          ...panelStyle,
        }}
      >
        {allowModeToggle && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "transparent",
              borderRadius: "999px",
              padding: 0,
              gap: 0,
              boxShadow: "none",
              width: undefined,
              justifyContent: "flex-start",
              flexShrink: 1,
              flexGrow: isMobileViewport ? 1 : undefined,
            }}
          >
            <div
              style={{
                display: "flex",
                gap: isMobileViewport ? "6px" : "4px",
                flex: isMobileViewport ? "1 1 auto" : undefined,
                flexShrink: 1,
              }}
            >
              <button
                type="button"
                className="element-selector-toggle"
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  handleModeToggle("select");
                }}
                style={
                  {
                    border:
                      mode === "select"
                        ? "1px solid " + themeTokens.toggleSelectedBg
                        : theme === "light"
                        ? "1px solid rgba(0, 0, 0, 0.24)"
                        : "1px solid rgba(255, 255, 255, 0.32)",
                    borderRadius: "999px 0 0 999px",
                    padding: isMobileViewport ? "10px 12px" : "6px 14px",
                    minHeight: isMobileViewport ? "44px" : undefined,
                    cursor: "pointer",
                    fontWeight: mode === "select" ? 600 : 500,
                    transition: "background-color 120ms ease, color 120ms ease",
                    boxShadow: "none",
                    transform: "none",
                    flex: isMobileViewport ? 1 : undefined,
                    background:
                      mode === "select"
                        ? themeTokens.toggleSelectedBg
                        : "transparent",
                    color:
                      mode === "select"
                        ? themeTokens.toggleSelectedText
                        : themeTokens.toggleIdleText,
                    "--es-toggle-bg": "transparent",
                    "--es-toggle-bg-hover": "transparent",
                    "--es-toggle-color": "inherit",
                    "--es-toggle-color-hover":
                      mode === "select"
                        ? themeTokens.toggleSelectedText
                        : themeTokens.toggleIdleTextHover,
                  } as React.CSSProperties
                }
              >
                {resolvedText.selectLabel}
              </button>
              <button
                type="button"
                className="element-selector-toggle"
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  handleModeToggle("insert");
                }}
                style={
                  {
                    border:
                      mode === "insert"
                        ? "1px solid " + themeTokens.toggleSelectedBg
                        : theme === "light"
                        ? "1px solid rgba(0, 0, 0, 0.24)"
                        : "1px solid rgba(255, 255, 255, 0.32)",
                    borderRadius: lasso
                      ? "0"
                      : "0 999px 999px 0",
                    padding: isMobileViewport ? "10px 12px" : "6px 14px",
                    minHeight: isMobileViewport ? "44px" : undefined,
                    cursor: "pointer",
                    fontWeight: mode === "insert" ? 600 : 500,
                    transition: "background-color 120ms ease, color 120ms ease",
                    boxShadow: "none",
                    transform: "none",
                    flex: isMobileViewport ? 1 : undefined,
                    background:
                      mode === "insert"
                        ? themeTokens.toggleSelectedBg
                        : "transparent",
                    color:
                      mode === "insert"
                      ? themeTokens.toggleSelectedText
                      : themeTokens.toggleIdleText,
                    "--es-toggle-bg": "transparent",
                    "--es-toggle-bg-hover": "transparent",
                    "--es-toggle-color": "inherit",
                    "--es-toggle-color-hover":
                      mode === "insert"
                      ? themeTokens.toggleSelectedText
                      : themeTokens.toggleIdleTextHover,
                  } as React.CSSProperties
                }
              >
                {resolvedText.insertLabel}
              </button>

              {lasso && (
                <button
                  type="button"
                  className="element-selector-toggle"
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    handleModeToggle("lasso");
                  }}
                  style={
                    {
                      border:
                        mode === "lasso"
                          ? "1px solid " + themeTokens.toggleSelectedBg
                          : theme === "light"
                          ? "1px solid rgba(0, 0, 0, 0.24)"
                          : "1px solid rgba(255, 255, 255, 0.32)",
                      borderRadius: "0 999px 999px 0",
                      padding: isMobileViewport ? "10px 12px" : "6px 14px",
                      minHeight: isMobileViewport ? "44px" : undefined,
                      cursor: "pointer",
                      fontWeight: mode === "lasso" ? 600 : 500,
                      transition: "background-color 120ms ease, color 120ms ease",
                      boxShadow: "none",
                      transform: "none",
                      flex: isMobileViewport ? 1 : undefined,
                      background:
                        mode === "lasso"
                          ? themeTokens.toggleSelectedBg
                          : "transparent",
                      color:
                        mode === "lasso"
                          ? themeTokens.toggleSelectedText
                          : themeTokens.toggleIdleText,
                      "--es-toggle-bg": "transparent",
                      "--es-toggle-bg-hover": "transparent",
                      "--es-toggle-color": "inherit",
                      "--es-toggle-color-hover":
                        mode === "lasso"
                          ? themeTokens.toggleSelectedText
                          : themeTokens.toggleIdleTextHover,
                    } as React.CSSProperties
                  }
                >
                  {resolvedText.lassoLabel}
                </button>
              )}
            </div>
          </div>
        )}

        {!isMobileViewport && (
          <span
            className="element-selector-instruction"
            style={{
              color: themeTokens.instructionTextColor,
              fontWeight: 600,
              flex: 1,
              textAlign: "center",
              lineHeight: 1.4,
              fontSize: "15px",
            }}
          >
            {instructionText}
          </span>
        )}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: isMobileViewport ? "10px" : "8px",
            width: undefined,
            justifyContent: "flex-end",
            flex: isMobileViewport ? "1 1 auto" : undefined,
            flexWrap: "nowrap",
          }}
        >
          {showConfirmButton && (
            <button
              type="button"
              disabled={!canConfirm}
              className="element-selector-action element-selector-confirm"
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                if (canConfirm) {
                  confirmSelection();
                }
              }}
              style={
                {
                  border: "none",
                  borderRadius: isMobileViewport ? "10px" : "8px",
                  padding: isMobileViewport ? "12px 14px" : "8px 12px",
                  minHeight: isMobileViewport ? "44px" : undefined,
                  flex: isMobileViewport ? "0 1 auto" : undefined,
                  cursor: canConfirm ? "pointer" : "not-allowed",
                  fontSize: isMobileViewport ? "15px" : "14px",
                  fontWeight: 700,
                  transition: "background-color 120ms ease, color 120ms ease",
                  boxShadow: "none",
                  transform: "none",
                  "--es-action-bg": themeTokens.actionBg,
                  "--es-action-bg-hover": themeTokens.actionBgHover,
                  "--es-action-bg-disabled": themeTokens.actionBgDisabled,
                  "--es-action-color": themeTokens.actionColor,
                  "--es-action-color-hover": themeTokens.actionColorHover,
                  "--es-action-color-disabled": themeTokens.actionColorDisabled,
                } as React.CSSProperties
              }
              aria-label={resolvedText.confirmLabel}
            >
              {resolvedText.confirmLabel}
            </button>
          )}
          <button
            type="button"
            className="element-selector-action element-selector-cancel"
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              onCancel();
            }}
            style={
              {
                border: "none",
                borderRadius: isMobileViewport ? "10px" : "8px",
                padding: isMobileViewport ? "12px 14px" : "8px 12px",
                cursor: "pointer",
                fontSize: isMobileViewport ? "15px" : "14px",
                fontWeight: 700,
                transition: "background-color 120ms ease, color 120ms ease",
                boxShadow: "none",
                transform: "none",
                "--es-action-bg": themeTokens.actionBg,
                "--es-action-bg-hover": themeTokens.actionBgHover,
                "--es-action-bg-disabled": themeTokens.actionBgDisabled,
                "--es-action-color": themeTokens.actionColor,
                "--es-action-color-hover": themeTokens.actionColorHover,
                "--es-action-color-disabled": themeTokens.actionColorDisabled,
                flex: isMobileViewport ? "0 1 auto" : undefined,
                marginLeft: isMobileViewport ? "6px" : undefined,
              } as React.CSSProperties
            }
            aria-label={resolvedText.cancelLabel}
          >
            {resolvedText.cancelLabel}
          </button>
        </div>
      </div>

      {isLassoMode && lassoBounds && (
        <div
          style={{
            position: "fixed",
            pointerEvents: "none",
            zIndex: 100002,
            left: `${lassoBounds.left}px`,
            top: `${lassoBounds.top}px`,
            width: `${lassoBounds.width}px`,
            height: `${lassoBounds.height}px`,
            border: "2px dashed #38bdf8",
            background: "rgba(56, 189, 248, 0.12)",
            borderRadius: "10px",
            boxShadow: "0 0 18px rgba(56, 189, 248, 0.35)",
          }}
        />
      )}

      {isLassoMode &&
        lassoElements.map((element, index) => (
          <SelectedItem
            key={`lasso-${index}`}
            targetElement={element}
            onDeselect={() => {}}
            variant="passive"
            rect={rectMap.get(element) ?? null}
          />
        ))}

      {mode === "select" &&
        currentHover &&
        (!effectiveMultiSelect || !pickedElements.includes(currentHover)) &&
        !isMobileViewport && (
          <HoveredItem
            targetElement={currentHover}
            friendlySelectors={friendlySelectors}
            rect={rectMap.get(currentHover) ?? null}
          />
        )}

      {mode === "insert" && insertionCandidate && (
        <InsertionGuide
          element={insertionCandidate.element}
          position={insertionCandidate.position}
          axis={insertionCandidate.axis}
          friendlySelectors={friendlySelectors}
          rect={rectMap.get(insertionCandidate.element) ?? null}
        />
      )}

      {(effectiveMultiSelect ||
        (isMobileViewport && pickedElements.length > 0)) &&
        pickedElements.map((element, index) => (
          <SelectedItem
            key={`selected-${index}`}
            targetElement={element}
            onDeselect={() => deselectElement(element)}
            rect={rectMap.get(element) ?? null}
          />
        ))}

      <style>{`
        body {
          cursor: ${canAddElement ? "crosshair" : "default"} !important;
        }
        body * {
          cursor: ${canAddElement ? "crosshair" : "default"} !important;
        }
        #element-selector-overlay [data-element-selector-ui="true"],
        #element-selector-overlay [data-element-selector-ui="true"] * {
          cursor: default !important;
        }
        #element-selector-overlay .element-selector-toggle,
        #element-selector-overlay .element-selector-action,
        #element-selector-overlay button {
          cursor: pointer !important;
        }
        #element-selector-overlay .element-selector-toggle {
          background-color: var(--es-toggle-bg);
          color: var(--es-toggle-color);
        }
        #element-selector-overlay .element-selector-toggle:hover {
          background-color: var(--es-toggle-bg-hover);
          color: var(--es-toggle-color-hover);
        }
        #element-selector-overlay .element-selector-action {
          background-color: var(--es-action-bg);
          color: var(--es-action-color);
        }
        #element-selector-overlay .element-selector-action:hover:not(:disabled) {
          background-color: var(--es-action-bg-hover);
          color: var(--es-action-color-hover, var(--es-action-color));
        }
        #element-selector-overlay .element-selector-action:disabled {
          background-color: var(--es-action-bg-disabled);
          color: var(--es-action-color-disabled);
        }
        #element-selector-overlay .element-selector-instruction {
          text-align: center;
        }
        @media (min-width: 768px) {
          #element-selector-overlay .element-selector-instruction {
            min-width: 22em;
          }
        }
      `}</style>
    </div>
  );
}
