/**
 * Element selector API - Visual DOM element picker
 */

import React, { useMemo } from "react";
import ReactDOM from "react-dom/client";
import { ElementSelector } from "./ElementSelector";
import { SelectedItem } from "./SelectedItem";
import { InsertionGuide } from "./InsertionGuide";
import { useElementRectMap } from "./useElementRects";
import type {
  ElementInfo,
  LaunchSelectorOptions,
  SelectionResult,
  InsertResult,
  SelectResult,
} from "./types";
import { buildElementSelector } from "./utils";

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

function PersistentHighlights({
  elements,
  friendlySelectors,
}: {
  elements: ElementInfo[];
  friendlySelectors: boolean;
}) {
  const targets = useMemo(
    () => elements.map((item) => item.element),
    [elements]
  );
  const rectMap = useElementRectMap(targets);

  if (!elements.length) return null;

  return (
    <>
      {elements.map((element, index) => {
        const rect = rectMap.get(element.element) ?? null;

        if (element.mode === "insert" && element.insertionPosition && element.insertionAxis) {
          return (
            <InsertionGuide
              key={`persistent-insert-${index}`}
              element={element.element}
              position={element.insertionPosition}
              axis={element.insertionAxis}
              friendlySelectors={friendlySelectors}
              rect={rect}
            />
          );
        }

        return (
          <SelectedItem
            key={`persistent-select-${index}`}
            targetElement={element.element}
            onDeselect={() => {}}
            variant="passive"
            rect={rect}
          />
        );
      })}
    </>
  );
}

function renderPersistentHighlights(elements: ElementInfo[], friendlySelectors: boolean) {
  if (!elements.length) return;

  const root = ensurePersistentRoot();
  root.render(
    <React.StrictMode>
      <PersistentHighlights elements={elements} friendlySelectors={friendlySelectors} />
    </React.StrictMode>
  );
}

type ElementSummary = {
  element: HTMLElement | null;
  html: string | null;
  classes: string | null;
  id: string | null;
  textPreview: string | null;
  tag: string | null;
  selector: string | null;
};

const textPreviewFor = (element: HTMLElement): string => {
  const raw = (element.innerText ?? element.textContent ?? "").toString();
  const normalized = raw.replace(/\s+/g, " ").trim();
  const limit = 1024;
  if (normalized.length <= limit) return normalized;
  const trimmed = normalized.slice(0, limit);
  return `${trimmed}<!-- SNIPPET FOR BREVITY -->`;
};

const summarizeElement = (element: HTMLElement | null): ElementSummary => {
  if (!element) {
    return {
      element: null,
      html: null,
      classes: null,
      id: null,
      textPreview: null,
      tag: null,
      selector: null,
    };
  }

  return {
    element,
    html: element.outerHTML ?? null,
    classes: element.className || null,
    id: element.id || null,
    textPreview: textPreviewFor(element),
    tag: element.tagName.toLowerCase(),
    selector: buildElementSelector(element),
  };
};

const buildSelectMarkdown = (result: SelectResult): string => {
  const lines: string[] = [];
  lines.push("The user has selected an HTML element:");
  const tagLine = result.selectedElementTag
    ? `tag: "${result.selectedElementTag}"`
    : null;
  if (tagLine) lines.push(tagLine);
  if (result.selectedElementId) {
    lines.push(`id: "#${result.selectedElementId}"`);
  }
  if (result.selectedElementClasses) {
    lines.push(`class: "${result.selectedElementClasses}"`);
  }
  if (result.selectedSrc) {
    lines.push(`source code ref: "${result.selectedSrc}"`);
  }

  const uniqueBeforeSrc =
    result.beforeSrc && result.beforeSrc !== result.selectedSrc;
  const uniqueAfterSrc = result.afterSrc && result.afterSrc !== result.selectedSrc;

  if (uniqueBeforeSrc) {
    lines.push(`source code ref BEFORE the selected element: "${result.beforeSrc}"`);
  }
  if (uniqueAfterSrc) {
    lines.push(`source code ref AFTER the selected element: "${result.afterSrc}"`);
  }

  if (result.selectedElementHtml) {
    lines.push("", "source:", "```html", result.selectedElementHtml, "```");
  }

  if (result.elementBeforeHtml) {
    lines.push(
      "",
      "This is the element BEFORE the selected element:",
      "",
      "```html",
      result.elementBeforeHtml,
      "```"
    );
  }

  if (result.elementAfterHtml) {
    lines.push(
      "",
      "This is the element AFTER the selected element:",
      "",
      "```html",
      result.elementAfterHtml,
      "```"
    );
  }

  return lines.join("\n");
};

const buildInsertMarkdown = (result: InsertResult): string => {
  const lines: string[] = [];
  lines.push("The user has selected an insertion point:");

  const hasBefore = Boolean(result.srcBefore);
  const hasAfter = Boolean(result.srcAfter);
  const sameRef =
    hasBefore && hasAfter && result.srcBefore === result.srcAfter;

  if (sameRef && result.srcBefore) {
    lines.push(`source code around the insertion point: "${result.srcBefore}"`);
  } else {
    if (result.srcBefore) {
      lines.push(`source code ref BEFORE the insertion point: "${result.srcBefore}"`);
    }
    if (result.srcAfter) {
      lines.push(`source code ref AFTER the insertion point: "${result.srcAfter}"`);
    }
  }

  if (result.htmlWithMarker) {
    lines.push("", "```html", result.htmlWithMarker, "```" );
  }

  return lines.join("\n");
};

const truncateHtmlSnippet = (
  html: string | null,
  limitOption: number | boolean | undefined
): string | null => {
  if (!html) return html;

  const resolvedLimit = (() => {
    if (limitOption === false) return null; // no snip
    if (limitOption === true || limitOption === undefined) return 2000;
    if (typeof limitOption === "number" && limitOption > 0) return limitOption;
    return null;
  })();

  if (!resolvedLimit) return html;

  const keep = Math.max(1, Math.floor(resolvedLimit / 2));
  if (html.length <= resolvedLimit) return html;

  const head = html.slice(0, keep);
  const tail = html.slice(-keep);
  return `${head}\n<!-- SNIPPED FOR BREVITY -->\n${tail}`;
};

function mapElementInfoToResult(
  info: ElementInfo,
  truncation: { snipElementHtml?: number | boolean; snipHtml?: number | boolean }
): SelectionResult {
  if (info.mode === "insert") {
    const position = info.insertionPosition ?? "after";
    const beforeElement =
      position === "before" ? info.element.previousElementSibling : info.element;
    const afterElement =
      position === "before" ? info.element : info.element.nextElementSibling;

    const beforeSummary = summarizeElement(beforeElement as HTMLElement | null);
    const afterSummary = summarizeElement(afterElement as HTMLElement | null);

    const htmlBefore =
      truncateHtmlSnippet(
        info.insertionBeforeHtml ?? info.beforeHtml,
        truncation.snipHtml
      ) ?? "";
    const htmlAfter =
      truncateHtmlSnippet(
        info.insertionAfterHtml ?? info.afterHtml,
        truncation.snipHtml
      ) ?? "";

    const result: InsertResult = {
      mode: "insert",
      htmlBefore,
      elementBefore: beforeSummary.element,
      htmlAfter,
      elementAfter: afterSummary.element,
      elementBeforeHtml: truncateHtmlSnippet(
        beforeSummary.html,
        truncation.snipElementHtml
      ),
      elementAfterHtml: truncateHtmlSnippet(
        afterSummary.html,
        truncation.snipElementHtml
      ),
      htmlWithMarker: `${
        truncateHtmlSnippet(beforeSummary.html, truncation.snipElementHtml) ?? ""
      }\n<!-- INSERTION POINT -->\n${
        truncateHtmlSnippet(afterSummary.html, truncation.snipElementHtml) ?? ""
      }`,
      srcBefore: info.beforeSrc,
      srcAfter: info.afterSrc,
      routeIdBefore: info.beforeRouteId,
      routeIdAfter: info.afterRouteId,
      routeFileBefore: info.beforeRouteFile,
      routeFileAfter: info.afterRouteFile,
      elementBeforeClasses: beforeSummary.classes,
      elementBeforeId: beforeSummary.id,
      elementBeforeTextPreview: beforeSummary.textPreview,
      elementBeforeTag: beforeSummary.tag,
      elementBeforeSelector: beforeSummary.selector,
      elementAfterClasses: afterSummary.classes,
      elementAfterId: afterSummary.id,
      elementAfterTextPreview: afterSummary.textPreview,
      elementAfterTag: afterSummary.tag,
      elementAfterSelector: afterSummary.selector,
      markdownSummary: "",
    };

    result.markdownSummary = buildInsertMarkdown(result);

    return result;
  }

  const prevSibling = info.element.previousElementSibling as HTMLElement | null;
  const nextSibling = info.element.nextElementSibling as HTMLElement | null;
  const prevSummary = summarizeElement(prevSibling);
  const nextSummary = summarizeElement(nextSibling);

  const selectResult: SelectResult = {
    mode: "select",
    selectedElement: info.element,
    htmlBefore: truncateHtmlSnippet(info.beforeHtml, truncation.snipHtml) ?? "",
    elementBefore: prevSummary.element,
    elementBeforeHtml: truncateHtmlSnippet(
      prevSummary.html,
      truncation.snipElementHtml
    ),
    htmlAfter: truncateHtmlSnippet(info.afterHtml, truncation.snipHtml) ?? "",
    elementAfter: nextSummary.element,
    elementAfterHtml: truncateHtmlSnippet(
      nextSummary.html,
      truncation.snipElementHtml
    ),
    selectedSrc: info.src,
    selectedRouteId: info.routeId,
    selectedRouteFile: info.routeFile,
    selectedElementHtml:
      truncateHtmlSnippet(info.elementHtml, truncation.snipElementHtml) ?? "",
    selectedElementClasses: info.classes,
    selectedElementId: info.id,
    selectedElementTextPreview: info.textPreview,
    selectedElementTag: info.tag,
    selectedElementSelector: info.selector,
    beforeSrc: info.beforeSrc,
    afterSrc: info.afterSrc,
    markdownSummary: "",
  };

  selectResult.markdownSummary = buildSelectMarkdown(selectResult);

  return selectResult;
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
): Promise<SelectionResult | SelectionResult[]> {
  const {
    multiSelect = false,
    friendlySelectors = false,
    mode = "select",
    allowModeToggle = true,
    lasso = false,
    retainSelectionHighlights = false,
    optionsPanelPosition,
    selectionBarText,
    theme = "dark",
    debug = false,
    snipElementHtml = true,
    snipHtml = true,
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
    container.style.pointerEvents = "none";
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
    const truncation = {
      snipElementHtml,
      snipHtml,
    };

    const handleSelection = (selectedElements: ElementInfo[]) => {
      if (retainSelectionHighlights) {
        renderPersistentHighlights(selectedElements, friendlySelectors);
      }

      const results = selectedElements.map((info) =>
        mapElementInfoToResult(info, truncation)
      );

      cleanup();

      if (!multiSelect && results.length === 1) {
        resolve(results[0]);
        return;
      }

      resolve(results);
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
          lasso={lasso}
          optionsPanelPosition={optionsPanelPosition}
          selectionBarText={selectionBarText}
          theme={theme}
          debug={debug}
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
  SelectionResult,
  SelectResult,
  InsertResult,
} from "./types";
