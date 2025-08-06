/**
 * Hover highlight component
 * Uses solid borders and gradient effects instead of dotted borders
 */

import React, { useRef, useEffect } from "react";
import { useAnimationFrame } from "./useAnimationFrame";
import { getFriendlyTagName } from "./utils";
import type { HoveredItemProps } from "./types";

export function HoveredItem({ targetElement, friendlySelectors = false }: HoveredItemProps) {
  const highlightRef = useRef<HTMLDivElement>(null);

  // Update position to track element
  const updatePosition = () => {
    if (!highlightRef.current || !targetElement) return;

    const rect = targetElement.getBoundingClientRect();
    const highlight = highlightRef.current;

    // Add minimal padding around the element
    const padding = 1;
    highlight.style.top = `${rect.top - padding}px`;
    highlight.style.left = `${rect.left - padding}px`;
    highlight.style.width = `${rect.width + padding * 2}px`;
    highlight.style.height = `${rect.height + padding * 2}px`;
    highlight.style.opacity = "1";
  };

  // Initialize on mount
  useEffect(() => {
    updatePosition();
  }, [targetElement, updatePosition]);

  // Continuous position updates
  useAnimationFrame(updatePosition, 30);

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
        // Thick dashed border with strong color
        border: "3px dashed #0ea5e9",
        borderRadius: "8px",
        background: "rgba(14, 165, 233, 0.2)",
        boxShadow:
          "0 0 20px rgba(14, 165, 233, 0.6), inset 0 0 20px rgba(14, 165, 233, 0.3)",
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
            background: "linear-gradient(135deg, #3b82f6, #10b981)",
            color: "white",
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
            box-shadow: 0 0 20px rgba(14, 165, 233, 0.6), inset 0 0 20px rgba(14, 165, 233, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(14, 165, 233, 0.9), inset 0 0 30px rgba(14, 165, 233, 0.4);
          }
        }
      `}</style>
    </div>
  );
}
