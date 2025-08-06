/**
 * DOM element picker component - allows visual selection of page elements
 */

import React, { useState, useEffect, useRef, useCallback } from "react";
import { HoveredItem } from "./HoveredItem";
import { SelectedItem } from "./SelectedItem";
import { findElementAtCoordinates, buildElementSelector } from "./utils";
import type { ElementSelectorProps, ElementInfo, MousePosition } from "./types";

export function ElementSelector({
  onElementSelected,
  onCancel,
  multiSelect = false,
  friendlySelectors = false,
}: ElementSelectorProps) {
  const [currentHover, setCurrentHover] = useState<HTMLElement | null>(null);
  const [pickedElements, setPickedElements] = useState<HTMLElement[]>([]);
  const [canAddElement, setCanAddElement] = useState(false);

  const mousePositionRef = useRef<MousePosition>({ x: 0, y: 0 });
  const updateTimerRef = useRef<NodeJS.Timeout | null>(null);
  const previousHoverRef = useRef<HTMLElement | null>(null);

  // Update hover element based on current mouse position
  const updateHoverElement = useCallback(() => {
    const targetElement = findElementAtCoordinates(
      mousePositionRef.current.x,
      mousePositionRef.current.y
    );

    // Check if element is already selected
    const isAlreadyPicked = pickedElements.includes(targetElement);

    if (isAlreadyPicked) {
      setCanAddElement(false);
      setCurrentHover(null);
      previousHoverRef.current = null;
    } else if (previousHoverRef.current !== targetElement) {
      previousHoverRef.current = targetElement;
      setCurrentHover(targetElement);
      setCanAddElement(true);
    }
  }, [pickedElements]);

  // Track mouse movement
  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      mousePositionRef.current = {
        x: event.clientX,
        y: event.clientY,
      };

      // Throttle updates to improve performance
      if (updateTimerRef.current) {
        clearTimeout(updateTimerRef.current);
      }

      updateTimerRef.current = setTimeout(() => {
        updateHoverElement();
      }, 50); // 50ms throttle
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
    previousHoverRef.current = null;
  }, []);

  // Handle element selection
  const handleClick = useCallback(
    (event: MouseEvent) => {
      // Check if clicking on a selected element overlay (which has its own click handler)
      if ((event.target as HTMLElement).closest('[data-selected-element="true"]')) {
        return; // Let the button handle its own click
      }

      event.preventDefault();
      event.stopPropagation();

      // Find element at click position
      const targetElement = findElementAtCoordinates(
        event.clientX,
        event.clientY
      );

      if (!targetElement || pickedElements.includes(targetElement)) {
        return;
      }

      if (multiSelect) {
        setPickedElements([...pickedElements, targetElement]);
      } else {
        // Single select mode - immediately complete selection
        const elementData: ElementInfo[] = [
          {
            element: targetElement,
            selector: buildElementSelector(targetElement),
            tag: targetElement.tagName.toLowerCase(),
            id: targetElement.id || null,
            classes: targetElement.className || "",
            textPreview: targetElement.textContent?.substring(0, 50) || "",
          },
        ];
        onElementSelected(elementData);
      }
    },
    [pickedElements, multiSelect, onElementSelected]
  );

  // Remove element from selection
  const deselectElement = useCallback(
    (elementToRemove: HTMLElement) => {
      setPickedElements(pickedElements.filter((el) => el !== elementToRemove));
    },
    [pickedElements]
  );

  // Setup event listeners
  useEffect(() => {
    // Add event listeners to document instead of overlay
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
          if (pickedElements.length > 0) {
            const elementData: ElementInfo[] = pickedElements.map((element) => ({
              element,
              selector: buildElementSelector(element),
              tag: element.tagName.toLowerCase(),
              id: element.id || null,
              classes: element.className || "",
              textPreview: element.textContent?.substring(0, 50) || "",
            }));
            onElementSelected(elementData);
          }
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [pickedElements, onCancel, onElementSelected]);

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
        pointerEvents: "none", // Allow clicks to pass through
        zIndex: 99999,
      }}
    >
      {/* User instructions */}
      <div
        style={{
          position: "fixed",
          top: "24px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
          color: "#f1f5f9",
          padding: "16px 32px",
          borderRadius: "12px",
          fontSize: "15px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          boxShadow: "0 4px 24px rgba(0, 0, 0, 0.3)",
          zIndex: 100001,
          display: "flex",
          alignItems: "center",
          gap: "16px",
          pointerEvents: "auto", // Instructions can be clicked
        }}
      >
        <span>Click {multiSelect ? "elements" : "an element"} to select</span>
        {multiSelect && (
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
        <span style={{ opacity: 0.8 }}>
          {multiSelect ? "Enter to confirm • " : ""}Esc to cancel
        </span>
      </div>

      {/* Hover highlight */}
      {currentHover && !pickedElements.includes(currentHover) && (
        <HoveredItem
          targetElement={currentHover}
          friendlySelectors={friendlySelectors}
        />
      )}

      {/* Selected elements */}
      {multiSelect &&
        pickedElements.map((element, idx) => (
          <SelectedItem
            key={`selected-${idx}`}
            targetElement={element}
            onDeselect={() => deselectElement(element)}
          />
        ))}

      {/* Cursor style indicator */}
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
