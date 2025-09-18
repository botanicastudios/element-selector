/**
 * DOM element picker component - allows visual selection of page elements
 */

import React, { useState, useEffect, useRef, useCallback } from "react";
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
} from "./types";

const EDGE_BEHAVIOUR: Record<"top" | "bottom" | "left" | "right", Pick<InsertionCandidate, "position" | "axis">> = {
  top: { position: "before", axis: "horizontal" },
  bottom: { position: "after", axis: "horizontal" },
  left: { position: "before", axis: "vertical" },
  right: { position: "after", axis: "vertical" },
};

const CONTEXT_CHARS = 300;

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
}: ElementSelectorProps) {
  const [mode, setMode] = useState<ElementSelectorMode>(initialMode);
  const effectiveMultiSelect = mode === "select" && multiSelect;
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

  const instructionText =
    mode === "insert"
      ? "Click to choose where to insert new content"
      : `Click ${effectiveMultiSelect ? "elements" : "an element"} to select`;

  const helperText =
    mode === "insert"
      ? "Click to confirm • Esc to cancel"
      : effectiveMultiSelect
      ? "Enter to confirm • Esc to cancel"
      : "Esc to cancel";

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
          position: "fixed",
          top: "24px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
          color: "#f1f5f9",
          padding: "16px 24px",
          borderRadius: "12px",
          fontSize: "15px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          boxShadow: "0 4px 24px rgba(0, 0, 0, 0.3)",
          zIndex: 100001,
          display: "flex",
          alignItems: "center",
          gap: "16px",
          pointerEvents: "auto",
        }}
      >
        {allowModeToggle && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#1f2937",
              borderRadius: "999px",
              padding: "4px",
              gap: "4px",
            }}
          >
            <button
              type="button"
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
                backgroundColor: mode === "select" ? "#38bdf8" : "transparent",
                color: mode === "select" ? "#0f172a" : "#e2e8f0",
                fontWeight: mode === "select" ? 600 : 500,
                transition: "background-color 120ms ease, color 120ms ease",
              }}
            >
              Select
            </button>
            <button
              type="button"
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
                backgroundColor: mode === "insert" ? "#38bdf8" : "transparent",
                color: mode === "insert" ? "#0f172a" : "#e2e8f0",
                fontWeight: mode === "insert" ? 600 : 500,
                transition: "background-color 120ms ease, color 120ms ease",
              }}
            >
              Insert
            </button>
          </div>
        )}

        <span>{instructionText}</span>
        {effectiveMultiSelect && (
          <span
            style={{
              background: "#475569",
              padding: "4px 12px",
              borderRadius: "6px",
              fontWeight: "bold",
            }}
          >
            {pickedElements.length} selected
          </span>
        )}
        <span style={{ opacity: 0.8 }}>{helperText}</span>
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
      `}</style>
    </div>
  );
}
