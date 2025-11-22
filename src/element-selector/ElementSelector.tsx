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

const EDGE_BEHAVIOUR: Record<"top" | "bottom" | "left" | "right", Pick<InsertionCandidate, "position" | "axis">> = {
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

  const read = (name: string) => {
    const value = element.getAttribute(name);
    return value || undefined;
  };

  return {
    src: read("data-ai-src"),
    routeId: read("data-ai-route-id"),
    routeFile: read("data-ai-route-file"),
  };
}

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

  const distances: Array<{ edge: "top" | "bottom" | "left" | "right"; value: number }> = [
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

export function ElementSelector({
  onElementSelected,
  onCancel,
  multiSelect = false,
  friendlySelectors = false,
  initialMode = "select",
  allowModeToggle = true,
  optionsPanelPosition,
  selectionBarText,
  theme = "dark",
}: ElementSelectorProps) {
  const [mode, setMode] = useState<ElementSelectorMode>(initialMode);
  const effectiveMultiSelect = mode === "select" && multiSelect;
  const themeTokens = resolveThemeTokens(theme);
  const [currentHover, setCurrentHover] = useState<HTMLElement | null>(null);
  const [insertionCandidate, setInsertionCandidate] =
    useState<InsertionCandidate | null>(null);
  const [pickedElements, setPickedElements] = useState<HTMLElement[]>([]);
  const [canAddElement, setCanAddElement] = useState(false);
  const [pendingInsert, setPendingInsert] = useState<InsertionCandidate | null>(null);
  const [isMobileViewport, setIsMobileViewport] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 640px)").matches;
  });

  const trackedElements = useMemo(() => {
    const list: HTMLElement[] = [];
    if (currentHover) list.push(currentHover);
    if (insertionCandidate?.element && !list.includes(insertionCandidate.element)) {
      list.push(insertionCandidate.element);
    }
    pickedElements.forEach((el) => {
      if (!list.includes(el)) list.push(el);
    });
    return list;
  }, [currentHover, insertionCandidate, pickedElements]);

  const rectMap = useElementRectMap(trackedElements);

  const mousePositionRef = useRef<MousePosition>({ x: 0, y: 0 });
  const updateTimerRef = useRef<NodeJS.Timeout | null>(null);
  const previousHoverRef = useRef<HTMLElement | null>(null);
  const previousInsertionRef = useRef<InsertionCandidate | null>(null);

  const toElementInfo = useCallback(
    (
      element: HTMLElement,
      extra: Partial<ElementInfo> = {}
    ): ElementInfo => {
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
        textPreview: element.textContent?.substring(0, 50) || "",
        beforeHtml: baseContext.beforeHtml,
        elementHtml: baseContext.elementHtml,
        afterHtml: baseContext.afterHtml,
        ...readAiAttributes(element),
        ...extra,
      };

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
          insertionSide === "before"
            ? element.previousElementSibling
            : element;
        const afterElement =
          insertionSide === "before"
            ? element
            : element.nextElementSibling;

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

  // Update hover element based on current mouse position
  const updateHoverElement = useCallback(() => {
    const targetElement = findElementAtCoordinates(
      mousePositionRef.current.x,
      mousePositionRef.current.y
    );

    if (mode === "insert") {
      const candidate = deriveInsertionCandidate(
        targetElement,
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
      pickedElements.some((picked) => picked.contains(targetElement));

    if (isInsidePickedElement) {
      setCanAddElement(false);
      setCurrentHover(null);
      previousHoverRef.current = null;
      return;
    }

    if (previousHoverRef.current !== targetElement) {
      previousHoverRef.current = targetElement;
      setCurrentHover(targetElement);
      setCanAddElement(true);
    }
  }, [effectiveMultiSelect, mode, pickedElements]);

  // Track mouse movement
  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.closest('[data-element-selector-ui="true"]')) {
        if (updateTimerRef.current) {
          clearTimeout(updateTimerRef.current);
          updateTimerRef.current = null;
        }
        setCurrentHover(null);
        setInsertionCandidate(null);
        previousHoverRef.current = null;
        previousInsertionRef.current = null;
        setCanAddElement(false);
        return;
      }

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
    },
    [updateHoverElement]
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
  }, []);

  const handleModeToggle = useCallback(
    (nextMode: ElementSelectorMode) => {
      if (nextMode === mode) {
        return;
      }
      setMode(nextMode);
      setPickedElements([]);
      setInsertionCandidate(null);
      setPendingInsert(null);
      setCurrentHover(null);
      previousHoverRef.current = null;
      previousInsertionRef.current = null;
      setCanAddElement(false);
    },
    [mode]
  );

  // Handle element selection
  const handleClick = useCallback(
    (event: MouseEvent) => {
      const shouldDeferConfirm = isMobileViewport && !effectiveMultiSelect;
      const target = event.target as HTMLElement;
      if (
        target.closest('[data-selected-element="true"]') ||
        target.closest('[data-element-selector-ui="true"]')
      ) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (mode === "insert") {
        const candidate = deriveInsertionCandidate(
          findElementAtCoordinates(event.clientX, event.clientY),
          event.clientX,
          event.clientY
        );

        if (!candidate) {
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

      const targetElement = findElementAtCoordinates(
        event.clientX,
        event.clientY
      );

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

      onElementSelected([
        toElementInfo(targetElement, { mode: "select" }),
      ]);
    },
    [effectiveMultiSelect, isMobileViewport, mode, onElementSelected, pickedElements, toElementInfo]
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

    return () => {
      document.removeEventListener("mousemove", handleMouseMove, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
      document.removeEventListener("click", handleClick, true);
      if (updateTimerRef.current) {
        clearTimeout(updateTimerRef.current);
      }
    };
  }, [handleMouseMove, handleMouseLeave, handleClick]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case "Escape":
          onCancel();
          break;
        case "Enter":
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
    instructionSelectSingle:
      selectionBarText?.instructionSelectSingle ??
      "Click an element to select",
    instructionSelectMulti:
      selectionBarText?.instructionSelectMulti ??
      "Click elements to select",
    instructionInsert:
      selectionBarText?.instructionInsert ??
      "Click to choose where to insert new content",
    confirmLabel: selectionBarText?.confirmLabel ?? "✓",
    cancelLabel: selectionBarText?.cancelLabel ?? "✕",
  };

  const instructionText = (() => {
    if (mode === "insert") {
      return resolvedText.instructionInsert;
    }

    return effectiveMultiSelect
      ? resolvedText.instructionSelectMulti
      : resolvedText.instructionSelectSingle;
  })();

  const confirmSelection = useCallback(() => {
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
  ]);

  const shouldDeferConfirm = isMobileViewport && !effectiveMultiSelect;
  const canConfirm = effectiveMultiSelect
    ? pickedElements.length > 0
    : shouldDeferConfirm
      ? mode === "select"
        ? pickedElements.length > 0
        : Boolean(pendingInsert)
      : false;

  const showConfirmButton = effectiveMultiSelect || shouldDeferConfirm;

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
        style={panelStyle}
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
              style={{
                border: mode === "select"
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
                background: mode === "select"
                  ? themeTokens.toggleSelectedBg
                  : "transparent",
                color: mode === "select"
                  ? themeTokens.toggleSelectedText
                  : themeTokens.toggleIdleText,
                "--es-toggle-bg": "transparent",
                "--es-toggle-bg-hover": "transparent",
                "--es-toggle-color": "inherit",
                "--es-toggle-color-hover": mode === "select"
                  ? themeTokens.toggleSelectedText
                  : themeTokens.toggleIdleTextHover,
              } as React.CSSProperties}
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
              style={{
                border: mode === "insert"
                  ? "1px solid " + themeTokens.toggleSelectedBg
                  : theme === "light"
                    ? "1px solid rgba(0, 0, 0, 0.24)"
                    : "1px solid rgba(255, 255, 255, 0.32)",
                borderRadius: "0 999px 999px 0",
                padding: isMobileViewport ? "10px 12px" : "6px 14px",
                minHeight: isMobileViewport ? "44px" : undefined,
                cursor: "pointer",
                fontWeight: mode === "insert" ? 600 : 500,
                transition: "background-color 120ms ease, color 120ms ease",
                boxShadow: "none",
                transform: "none",
                flex: isMobileViewport ? 1 : undefined,
                background: mode === "insert"
                  ? themeTokens.toggleSelectedBg
                  : "transparent",
                color: mode === "insert"
                  ? themeTokens.toggleSelectedText
                  : themeTokens.toggleIdleText,
                "--es-toggle-bg": "transparent",
                "--es-toggle-bg-hover": "transparent",
                "--es-toggle-color": "inherit",
                "--es-toggle-color-hover": mode === "insert"
                  ? themeTokens.toggleSelectedText
                  : themeTokens.toggleIdleTextHover,
              } as React.CSSProperties}
            >
              {resolvedText.insertLabel}
            </button>
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
              style={{
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
              } as React.CSSProperties}
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
            style={{
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
            } as React.CSSProperties}
            aria-label={resolvedText.cancelLabel}
          >
            {resolvedText.cancelLabel}
          </button>
        </div>
      </div>

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

      {(effectiveMultiSelect || (isMobileViewport && pickedElements.length > 0)) &&
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
