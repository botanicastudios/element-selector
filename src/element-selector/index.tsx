/**
 * Element selector API - Visual DOM element picker
 */

import React from "react";
import ReactDOM from "react-dom/client";
import { ElementSelector } from "./ElementSelector";
import type { ElementInfo, LaunchSelectorOptions } from "./types";

/**
 * Launch the element selector interface
 * @param options - Configuration options
 * @returns Promise resolving to single element (single select) or array (multi select)
 */
export function launchSelector(
  options: LaunchSelectorOptions = {}
): Promise<ElementInfo | ElementInfo[]> {
  const { multiSelect = false, friendlySelectors = false } = options;

  return new Promise((resolve, reject) => {
    // Create root container
    const container = document.createElement("div");
    container.id = "element-selector-root";
    container.style.position = "fixed";
    container.style.zIndex = "999999";
    container.style.inset = "0";
    document.body.appendChild(container);

    // Create React root
    const root = ReactDOM.createRoot(container);

    // Cleanup function
    const cleanup = () => {
      root.unmount();
      if (container.parentNode) {
        container.parentNode.removeChild(container);
      }
    };

    // Handle selection complete
    const handleSelection = (selectedElements: ElementInfo[]) => {
      cleanup();
      // For single select, return just the first element
      if (!multiSelect && selectedElements.length > 0) {
        resolve(selectedElements[0]);
      } else {
        resolve(selectedElements);
      }
    };

    // Handle cancellation
    const handleCancel = () => {
      cleanup();
      reject(new Error("Element selection cancelled by user"));
    };

    // Render selector component
    root.render(
      <React.StrictMode>
        <ElementSelector
          onElementSelected={handleSelection}
          onCancel={handleCancel}
          multiSelect={multiSelect}
          friendlySelectors={friendlySelectors}
        />
      </React.StrictMode>
    );
  });
}

// Export component for direct usage
export { ElementSelector } from "./ElementSelector";
export { findElementAtCoordinates, buildElementSelector } from "./utils";
export type {
  ElementInfo,
  ElementSelectorProps,
  LaunchSelectorOptions,
} from "./types";
