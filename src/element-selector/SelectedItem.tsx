/**
 * Selected element highlight component
 * Shows selected elements with ability to deselect
 */

import React, { useRef, useEffect, useState } from 'react';
import type { SelectedItemProps } from './types';

export function SelectedItem({ targetElement, onDeselect, variant = 'interactive', rect = null }: SelectedItemProps) {
  const highlightRef = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const isInteractive = variant === 'interactive';
  
  // Update position to track element
  useEffect(() => {
    const highlight = highlightRef.current;
    if (!highlight) return;

    if (!rect) {
      highlight.style.opacity = '0';
      return;
    }

    const padding = 1;
    highlight.style.top = `${rect.top - padding}px`;
    highlight.style.left = `${rect.left - padding}px`;
    highlight.style.width = `${rect.width + (padding * 2)}px`;
    highlight.style.height = `${rect.height + (padding * 2)}px`;
    highlight.style.opacity = '1';
  }, [rect]);
  
  return (
    <button
      ref={highlightRef}
      data-selected-element="true"
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        if (!isInteractive) return;
        e.stopPropagation();
        e.preventDefault();
        onDeselect();
      }}
      onMouseEnter={() => isInteractive && setIsHovered(true)}
      onMouseLeave={() => isInteractive && setIsHovered(false)}
      style={{
        position: 'fixed',
        zIndex: 100000,
        opacity: 0,
        transition: 'border-color 200ms ease-out, background-color 200ms ease-out, box-shadow 200ms ease-out',
        boxSizing: 'border-box',
    border: isHovered 
      ? '3px solid #dc2626'
      : '3px solid #f59e0b',
        padding: 0,
    background: isHovered 
      ? 'rgba(220, 38, 38, 0.14)' 
      : 'rgba(245, 158, 11, 0.16)',
        borderRadius: '8px',
        cursor: isHovered ? 'pointer' : 'default',
    boxShadow: isHovered 
      ? '0 0 18px rgba(220, 38, 38, 0.45), inset 0 0 16px rgba(220, 38, 38, 0.18)' 
      : '0 0 18px rgba(245, 158, 11, 0.45), inset 0 0 16px rgba(245, 158, 11, 0.18)',
        pointerEvents: isInteractive ? 'auto' : 'none'
      }}
    >
      {/* Remove indicator on hover */}
      {isInteractive && isHovered && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgba(239, 68, 68, 0.95)',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: 'bold',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
            pointerEvents: 'none',
            zIndex: 1
          }}
        >
          Deselect
        </div>
      )}
      
      {/* Selection badge */}
      <div
        style={{
          position: 'absolute',
          top: '-12px',
          right: '-12px',
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          background: isHovered ? '#dc2626' : '#f59e0b',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '16px',
          fontWeight: 'bold',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
          pointerEvents: 'none'
        }}
      >
        ✓
      </div>
    </button>
  );
}
