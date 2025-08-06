/**
 * Selected element highlight component
 * Shows selected elements with ability to deselect
 */

import React, { useRef, useEffect, useState } from 'react';
import { useAnimationFrame } from './useAnimationFrame';
import type { SelectedItemProps } from './types';

export function SelectedItem({ targetElement, onDeselect }: SelectedItemProps) {
  const highlightRef = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Update position to track element
  const updatePosition = () => {
    if (!highlightRef.current || !targetElement) return;
    
    const rect = targetElement.getBoundingClientRect();
    const highlight = highlightRef.current;
    
    // Add minimal padding around the element
    const padding = 1;
    highlight.style.top = `${rect.top - padding}px`;
    highlight.style.left = `${rect.left - padding}px`;
    highlight.style.width = `${rect.width + (padding * 2)}px`;
    highlight.style.height = `${rect.height + (padding * 2)}px`;
    highlight.style.opacity = '1';
  };
  
  // Initialize on mount
  useEffect(() => {
    updatePosition();
  }, [targetElement, updatePosition]);
  
  // Continuous position updates
  useAnimationFrame(updatePosition, 30);
  
  return (
    <button
      ref={highlightRef}
      data-selected-element="true"
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        e.preventDefault();
        onDeselect();
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'fixed',
        zIndex: 100000,
        opacity: 0,
        transition: 'border-color 200ms ease-out, background-color 200ms ease-out, box-shadow 200ms ease-out',
        boxSizing: 'border-box',
        border: isHovered 
          ? '3px solid #ef4444'
          : '3px solid #8b5cf6',
        padding: 0,
        background: isHovered 
          ? 'rgba(239, 68, 68, 0.15)' 
          : 'rgba(139, 92, 246, 0.15)',
        borderRadius: '8px',
        cursor: isHovered ? 'pointer' : 'default',
        boxShadow: isHovered 
          ? '0 0 20px rgba(239, 68, 68, 0.5), inset 0 0 20px rgba(239, 68, 68, 0.2)' 
          : '0 0 20px rgba(139, 92, 246, 0.5), inset 0 0 20px rgba(139, 92, 246, 0.2)',
        pointerEvents: 'auto' // Make it clickable
      }}
    >
      {/* Remove indicator on hover */}
      {isHovered && (
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
          background: isHovered ? '#ef4444' : '#8b5cf6',
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