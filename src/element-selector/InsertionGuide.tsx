import React, { useEffect, useRef } from "react";
import { getFriendlyTagName } from "./utils";
import type { InsertionGuideProps } from "./types";

const LINE_THICKNESS = 4;

export function InsertionGuide({
  element,
  position,
  axis,
  friendlySelectors = false,
  rect = null,
}: InsertionGuideProps) {
  const lineRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lineRef.current || !labelRef.current) return;
    if (!rect) {
      lineRef.current.style.opacity = "0";
      labelRef.current.style.opacity = "0";
      return;
    }

    lineRef.current.style.opacity = "1";
    labelRef.current.style.opacity = "1";

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
  }, [rect, axis, position]);

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
          opacity: 0,
          background: "#f59e0b",
          boxShadow: "0 0 14px rgba(245, 158, 11, 0.45)",
          borderRadius: LINE_THICKNESS,
        }}
      />
      <div
        ref={labelRef}
        style={{
          position: "fixed",
          pointerEvents: "none",
          zIndex: 100001,
          opacity: 0,
          background: "#2b1b0a",
          color: "#f6f1e8",
          padding: "6px 12px",
          borderRadius: "8px",
          fontSize: "12px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.28)",
          whiteSpace: "nowrap",
        }}
      >
        {labelText}
      </div>
    </>
  );
}
