/**
 * Hover highlight component
 * Uses solid borders and warm glow instead of dotted borders
 */

import React, { useRef, useEffect } from "react";
import { getFriendlyTagName } from "./utils";
import type { HoveredItemProps } from "./types";

export function HoveredItem({
  targetElement,
  friendlySelectors = false,
  rect = null,
}: HoveredItemProps) {
  const highlightRef = useRef<HTMLDivElement>(null);

  // Update position to track element
  useEffect(() => {
    const highlight = highlightRef.current;
    if (!highlight) return;

    if (!rect) {
      highlight.style.opacity = "0";
      return;
    }

    // Add minimal padding around the element
    const padding = 1;
    highlight.style.top = `${rect.top - padding}px`;
    highlight.style.left = `${rect.left - padding}px`;
    highlight.style.width = `${rect.width + padding * 2}px`;
    highlight.style.height = `${rect.height + padding * 2}px`;
    highlight.style.opacity = "1";
  }, [rect]);

  // Element info tag
  const elementInfo = targetElement
    ? {
        tag: targetElement.tagName.toLowerCase(),
        friendlyTag: friendlySelectors
          ? getFriendlyTagName(targetElement.tagName)
          : targetElement.tagName.toLowerCase(),
        id: targetElement.id,
        classes: targetElement.className
          ?.split(" ")
          .filter((c) => c)
          .slice(0, 2),
      }
    : null;

  return (
    <div
      ref={highlightRef}
      style={{
        position: "fixed",
        pointerEvents: "none",
        zIndex: 100000,
        opacity: 0,
        transition: "opacity 150ms ease-out",
        // Thick dashed border with warm color
        border: "3px dashed #f59e0b",
        borderRadius: "8px",
        background: "rgba(245, 158, 11, 0.18)",
        boxShadow:
          "0 0 20px rgba(245, 158, 11, 0.55), inset 0 0 18px rgba(245, 158, 11, 0.3)",
        animation: "pulse 1.5s infinite",
        boxSizing: "border-box",
      }}
    >
      {/* Element info badge */}
      {elementInfo && (
        <div
          style={{
            position: "absolute",
            top: "-32px",
            left: "0",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            fontSize: "12px",
            fontFamily: "ui-monospace, monospace",
            background: "#2b1b0a",
            color: "#f6f1e8",
            padding: "4px 8px",
            borderRadius: "6px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
            whiteSpace: "nowrap",
          }}
        >
          <strong>{elementInfo.friendlyTag}</strong>
          {elementInfo.id && (
            <span style={{ opacity: 0.9 }}>#{elementInfo.id}</span>
          )}
          {elementInfo.classes?.length > 0 && (
            <span style={{ opacity: 0.8 }}>
              .{elementInfo.classes.join(".")}
            </span>
          )}
        </div>
      )}

      {/* Pulse animation */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(245, 158, 11, 0.55), inset 0 0 20px rgba(245, 158, 11, 0.28);
          }
          50% {
            box-shadow: 0 0 28px rgba(245, 158, 11, 0.75), inset 0 0 24px rgba(245, 158, 11, 0.34);
          }
        }
      `}</style>
    </div>
  );
}
