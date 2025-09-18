import React, { useCallback, useEffect, useRef } from "react";
import { useAnimationFrame } from "./useAnimationFrame";
import { getFriendlyTagName } from "./utils";
import type { InsertionGuideProps } from "./types";

const LINE_THICKNESS = 4;

export function InsertionGuide({
  element,
  position,
  axis,
  friendlySelectors = false,
}: InsertionGuideProps) {
  const lineRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback(() => {
    if (!lineRef.current || !labelRef.current) return;

    const rect = element.getBoundingClientRect();

    if (axis === "horizontal") {
      const y = position === "before" ? rect.top : rect.bottom;
      lineRef.current.style.top = `${y - LINE_THICKNESS / 2}px`;
      lineRef.current.style.left = `${rect.left}px`;
      lineRef.current.style.width = `${Math.max(rect.width, 1)}px`;
      lineRef.current.style.height = `${LINE_THICKNESS}px`;

      // Place label slightly offset from the line
      const labelY = position === "before" ? y - 32 : y + 8;
      labelRef.current.style.top = `${labelY}px`;
      labelRef.current.style.left = `${rect.left}px`;
    } else {
      const x = position === "before" ? rect.left : rect.right;
      lineRef.current.style.left = `${x - LINE_THICKNESS / 2}px`;
      lineRef.current.style.top = `${rect.top}px`;
      lineRef.current.style.height = `${Math.max(rect.height, 1)}px`;
      lineRef.current.style.width = `${LINE_THICKNESS}px`;

      const labelX = position === "before" ? x - 140 : x + 12;
      labelRef.current.style.left = `${labelX}px`;
      labelRef.current.style.top = `${rect.top}px`;
    }
  }, [element, position, axis]);

  useEffect(() => {
    updatePosition();
  }, [updatePosition]);

  useAnimationFrame(updatePosition, 30);

  const tag = element.tagName.toLowerCase();
  const friendlyTag = friendlySelectors
    ? getFriendlyTagName(element.tagName)
    : tag;
  const labelText = `${position === "before" ? "Insert before" : "Insert after"} ${friendlyTag}`;

  return (
    <>
      <div
        ref={lineRef}
        style={{
          position: "fixed",
          pointerEvents: "none",
          zIndex: 100000,
          background:
            "linear-gradient(90deg, rgba(147, 197, 253, 0.9), rgba(59, 130, 246, 0.9))",
          boxShadow: "0 0 18px rgba(59, 130, 246, 0.6)",
          borderRadius: LINE_THICKNESS,
        }}
      />
      <div
        ref={labelRef}
        style={{
          position: "fixed",
          pointerEvents: "none",
          zIndex: 100001,
          background: "linear-gradient(135deg, #1d4ed8, #0ea5e9)",
          color: "#f8fafc",
          padding: "6px 12px",
          borderRadius: "8px",
          fontSize: "12px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          boxShadow: "0 8px 20px rgba(14, 165, 233, 0.3)",
          whiteSpace: "nowrap",
        }}
      >
        {labelText}
      </div>
    </>
  );
}
