/**
 * DOM element picker component - allows visual selection of page elements
 */

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
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

    const isAlreadyPicked =
      effectiveMultiSelect && pickedElements.includes(targetElement);

    if (isAlreadyPicked) {
      setCanAddElement(false);
      setCurrentHover(null);
      previousHoverRef.current = null;
    } else if (previousHoverRef.current !== targetElement) {
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

      if (effectiveMultiSelect) {
        setPickedElements((previous) => {
          if (previous.includes(targetElement)) {
            return previous;
          }
          return [...previous, targetElement];
        });
        return;
      }

      onElementSelected([
        toElementInfo(targetElement, { mode: "select" }),
      ]);
    },
    [effectiveMultiSelect, mode, onElementSelected, toElementInfo]
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
    selectedCount: selectionBarText?.selectedCount ?? "{count} selected",
    confirmLabel: selectionBarText?.confirmLabel ?? "✓",
    cancelLabel: selectionBarText?.cancelLabel ?? "✕",
  };

  const renderSelectedCount = (count: number) => {
    const { selectedCount } = resolvedText;

    if (typeof selectedCount === "function") {
      return selectedCount(count);
    }

    return selectedCount.replace("{count}", String(count));
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
    if (effectiveMultiSelect && pickedElements.length > 0) {
      const elementData: ElementInfo[] = pickedElements.map((element) =>
        toElementInfo(element, { mode: "select" })
      );
      onElementSelected(elementData);
    }
  }, [effectiveMultiSelect, onElementSelected, pickedElements, toElementInfo]);

  const canConfirm = effectiveMultiSelect && pickedElements.length > 0;

  const showConfirmButton = effectiveMultiSelect;

  const resolvedPanelPosition = {
    vertical: optionsPanelPosition?.vertical ?? "top",
    horizontal: optionsPanelPosition?.horizontal ?? "center",
  } as const;

  const panelStyle: CSSProperties = {
    position: "fixed",
    background: themeTokens.panelBg,
    color: themeTokens.textColor,
    padding: "16px 24px",
    borderRadius: "12px",
    fontSize: "15px",
    fontFamily: "system-ui, -apple-system, sans-serif",
    boxShadow: themeTokens.shadow,
    border: themeTokens.border,
    zIndex: 100001,
    display: "flex",
    alignItems: "center",
    gap: "16px",
    pointerEvents: "auto",
  };

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
              background: themeTokens.pillBg,
              borderRadius: "999px",
              padding: "4px",
              gap: "4px",
              boxShadow:
                theme === "light"
                  ? "inset 0 0 0 1px rgba(15, 23, 42, 0.08)"
                  : "inset 0 0 0 1px rgba(248, 250, 252, 0.12)",
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
                border: "none",
                borderRadius: "999px",
                padding: "6px 14px",
                cursor: mode === "select" ? "default" : "pointer",
                fontWeight: mode === "select" ? 600 : 500,
                transition: "background-color 120ms ease, color 120ms ease",
                boxShadow: "none",
                transform: "none",
                "--es-toggle-bg": mode === "select"
                  ? themeTokens.toggleSelectedBg
                  : "transparent",
                "--es-toggle-bg-hover": mode === "select"
                  ? themeTokens.toggleSelectedBg
                  : themeTokens.toggleHoverBg,
                "--es-toggle-color": mode === "select"
                  ? themeTokens.toggleSelectedText
                  : themeTokens.toggleIdleText,
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
                border: "none",
                borderRadius: "999px",
                padding: "6px 14px",
                cursor: mode === "insert" ? "default" : "pointer",
                fontWeight: mode === "insert" ? 600 : 500,
                transition: "background-color 120ms ease, color 120ms ease",
                boxShadow: "none",
                transform: "none",
                "--es-toggle-bg": mode === "insert"
                  ? themeTokens.toggleSelectedBg
                  : "transparent",
                "--es-toggle-bg-hover": mode === "insert"
                  ? themeTokens.toggleSelectedBg
                  : themeTokens.toggleHoverBg,
                "--es-toggle-color": mode === "insert"
                  ? themeTokens.toggleSelectedText
                  : themeTokens.toggleIdleText,
                "--es-toggle-color-hover": mode === "insert"
                  ? themeTokens.toggleSelectedText
                  : themeTokens.toggleIdleTextHover,
              } as React.CSSProperties}
            >
              {resolvedText.insertLabel}
            </button>
          </div>
        )}

        <span style={{ color: themeTokens.instructionTextColor, fontWeight: 600 }}>
          {instructionText}
        </span>
        {effectiveMultiSelect && (
          <span
            style={{
              background: themeTokens.chipBg,
              padding: "4px 12px",
              borderRadius: "6px",
              fontWeight: "bold",
              color: themeTokens.chipColor,
            }}
          >
            {renderSelectedCount(pickedElements.length)}
          </span>
        )}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
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
                borderRadius: "8px",
                padding: "8px 12px",
                cursor: canConfirm ? "pointer" : "not-allowed",
                fontSize: "14px",
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
                borderRadius: "8px",
                padding: "8px 12px",
                cursor: "pointer",
                fontSize: "14px",
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
              aria-label={resolvedText.cancelLabel}
            >
            {resolvedText.cancelLabel}
          </button>
        </div>
      </div>

      {mode === "select" &&
        currentHover &&
        (!effectiveMultiSelect || !pickedElements.includes(currentHover)) && (
          <HoveredItem
            targetElement={currentHover}
            friendlySelectors={friendlySelectors}
          />
        )}

      {mode === "insert" && insertionCandidate && (
        <InsertionGuide
          element={insertionCandidate.element}
          position={insertionCandidate.position}
          axis={insertionCandidate.axis}
          friendlySelectors={friendlySelectors}
        />
      )}

      {effectiveMultiSelect &&
        pickedElements.map((element, index) => (
          <SelectedItem
            key={`selected-${index}`}
            targetElement={element}
            onDeselect={() => deselectElement(element)}
          />
        ))}

      <style>{`
        body {
          cursor: ${canAddElement ? "crosshair" : "default"} !important;
        }
        body * {
          cursor: ${canAddElement ? "crosshair" : "default"} !important;
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
      `}</style>
    </div>
  );
}
