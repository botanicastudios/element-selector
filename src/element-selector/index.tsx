/**
 * Element selector API - Visual DOM element picker
 */

import React from "react";
import ReactDOM from "react-dom/client";
import { ElementSelector } from "./ElementSelector";
import { SelectedItem } from "./SelectedItem";
import { InsertionGuide } from "./InsertionGuide";
import type { ElementInfo, LaunchSelectorOptions } from "./types";

let persistentContainer: HTMLDivElement | null = null;
let persistentRoot: ReactDOM.Root | null = null;

function ensurePersistentRoot() {
  if (persistentContainer && persistentRoot) {
    return persistentRoot;
  }

  persistentContainer = document.createElement("div");
  persistentContainer.id = "element-selector-persistent-highlights";
  persistentContainer.style.position = "fixed";
  persistentContainer.style.inset = "0";
  persistentContainer.style.pointerEvents = "none";
  persistentContainer.style.zIndex = "99998";
  document.body.appendChild(persistentContainer);

  persistentRoot = ReactDOM.createRoot(persistentContainer);
  return persistentRoot;
}

function renderPersistentHighlights(elements: ElementInfo[], friendlySelectors: boolean) {
  if (!elements.length) return;

  const root = ensurePersistentRoot();
  root.render(
    <React.StrictMode>
      <>
        {elements.map((element, index) => {
          if (element.mode === "insert" && element.insertionPosition && element.insertionAxis) {
            return (
              <InsertionGuide
                key={`persistent-insert-${index}`}
                element={element.element}
                position={element.insertionPosition}
                axis={element.insertionAxis}
                friendlySelectors={friendlySelectors}
              />
            );
          }

          return (
            <SelectedItem
              key={`persistent-select-${index}`}
              targetElement={element.element}
              onDeselect={() => {}}
              variant="passive"
            />
          );
        })}
      </>
    </React.StrictMode>
  );
}

export function resetSelectionHighlights() {
  if (persistentRoot) {
    persistentRoot.unmount();
    persistentRoot = null;
  }

  if (persistentContainer?.parentNode) {
    persistentContainer.parentNode.removeChild(persistentContainer);
  }

  persistentContainer = null;
}

/**
 * Launch the element selector interface
 * @param options - Configuration options
 * @returns Promise resolving to single element (single select) or array (multi select)
 */
export function launchSelector(
  options: LaunchSelectorOptions = {}
): Promise<ElementInfo | ElementInfo[]> {
  const {
    multiSelect = false,
    friendlySelectors = false,
    mode = "select",
    allowModeToggle = true,
    retainSelectionHighlights = false,
    optionsPanelPosition,
    selectionBarText,
    theme = "dark",
  } = options;

  // Always start with a clean slate; persisted highlights are cleared on every launch
  resetSelectionHighlights();

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
      if (retainSelectionHighlights) {
        renderPersistentHighlights(selectedElements, friendlySelectors);
      }

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
          initialMode={mode}
          allowModeToggle={allowModeToggle}
          optionsPanelPosition={optionsPanelPosition}
          selectionBarText={selectionBarText}
          theme={theme}
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
  ElementSelectorMode,
  ElementSelectorTheme,
  ContextHtmlOptions,
  ContextHtmlResult,
  OptionsPanelPosition,
  SelectionBarText,
  PanelHorizontalPosition,
  PanelVerticalPosition,
} from "./types";
