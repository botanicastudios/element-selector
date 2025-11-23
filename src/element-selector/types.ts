/**
 * Type definitions for the element selector component
 */

export type ElementSelectorMode = "select" | "insert";
export type ElementSelectorTheme = "light" | "dark";

export type PanelVerticalPosition = "top" | "bottom";
export type PanelHorizontalPosition = "left" | "center" | "right";

export interface OptionsPanelPosition {
  vertical?: PanelVerticalPosition;
  horizontal?: PanelHorizontalPosition;
}

export interface SelectionBarText {
  /** Label for the select-mode toggle button */
  selectLabel?: string;
  /** Label for the insert-mode toggle button */
  insertLabel?: string;
  /** Instruction copy shown in select mode when only one element can be picked */
  instructionSelectSingle?: string;
  /** Instruction copy shown in select mode when multi-select is enabled */
  instructionSelectMulti?: string;
  /** Instruction copy shown in insert mode */
  instructionInsert?: string;
  /**
   * @deprecated The selection count chip has been removed from the selection bar.
   * This value is currently ignored.
   */
  selectedCount?: string | ((count: number) => string);
  /** Label for the confirm button */
  confirmLabel?: string;
  /** Label for the cancel button */
  cancelLabel?: string;
}

export interface ElementInfo {
  element: HTMLElement;
  selector: string;
  tag: string;
  id: string | null;
  classes: string;
  textPreview: string;
  mode?: ElementSelectorMode;
  insertionPosition?: "before" | "after";
  insertionAxis?: "horizontal" | "vertical";
  beforeHtml: string;
  elementHtml: string;
  afterHtml: string;
  insertionBeforeHtml?: string;
  insertionAfterHtml?: string;
  /**
   * ai-src integration metadata (if present on matched DOM nodes)
   */
  src?: string;
  routeId?: string;
  routeFile?: string;
  beforeSrc?: string;
  beforeRouteId?: string;
  beforeRouteFile?: string;
  afterSrc?: string;
  afterRouteId?: string;
  afterRouteFile?: string;
}

export interface SelectResult {
  mode: "select";
  selectedElement: HTMLElement;
  htmlBefore: string;
  elementBefore: HTMLElement | null;
  elementBeforeHtml: string | null;
  htmlAfter: string;
  elementAfter: HTMLElement | null;
  elementAfterHtml: string | null;
  selectedSrc?: string;
  selectedRouteId?: string;
  selectedRouteFile?: string;
  selectedElementHtml: string;
  selectedElementClasses: string;
  selectedElementId: string | null;
  selectedElementTextPreview: string;
  selectedElementTag: string;
  selectedElementSelector: string;
  beforeSrc?: string;
  afterSrc?: string;
  markdownSummary: string;
}

export interface InsertResult {
  mode: "insert";
  htmlBefore: string;
  elementBefore: HTMLElement | null;
  htmlAfter: string;
  elementAfter: HTMLElement | null;
  elementBeforeHtml: string | null;
  elementAfterHtml: string | null;
  htmlWithMarker: string;
  srcBefore?: string;
  srcAfter?: string;
  routeIdBefore?: string;
  routeIdAfter?: string;
  routeFileBefore?: string;
  routeFileAfter?: string;
  elementBeforeClasses: string | null;
  elementBeforeId: string | null;
  elementBeforeTextPreview: string | null;
  elementBeforeTag: string | null;
  elementBeforeSelector: string | null;
  elementAfterClasses: string | null;
  elementAfterId: string | null;
  elementAfterTextPreview: string | null;
  elementAfterTag: string | null;
  elementAfterSelector: string | null;
  markdownSummary: string;
}

export type SelectionResult = SelectResult | InsertResult;

export interface ElementSelectorProps {
  onElementSelected: (elements: ElementInfo[]) => void;
  onCancel: () => void;
  multiSelect?: boolean;
  friendlySelectors?: boolean;
  initialMode?: ElementSelectorMode;
  allowModeToggle?: boolean;
  optionsPanelPosition?: OptionsPanelPosition;
  selectionBarText?: SelectionBarText;
  /**
   * Visual theme for the floating options panel
   */
  theme?: ElementSelectorTheme;
  /**
   * When true, emit verbose console diagnostics for hover / measurement
   * lifecycle. Useful for debugging iframe or layout issues.
   */
  debug?: boolean;
}

export interface HoveredItemProps {
  targetElement: HTMLElement | null;
  friendlySelectors?: boolean;
  rect?: DOMRectReadOnly | null;
}

export interface SelectedItemProps {
  targetElement: HTMLElement;
  onDeselect: () => void;
  /**
   * When set to "passive", the highlight remains visible but does not intercept clicks.
   * Useful for persisting highlights after the selector UI is dismissed.
   */
  variant?: "interactive" | "passive";
  rect?: DOMRectReadOnly | null;
}

export interface InsertionCandidate {
  element: HTMLElement;
  position: "before" | "after";
  axis: "horizontal" | "vertical";
}

export interface InsertionGuideProps extends InsertionCandidate {
  friendlySelectors?: boolean;
  rect?: DOMRectReadOnly | null;
}

export interface AnimationFrameHook {
  (callback: () => void, targetFps?: number): void;
}

export interface MousePosition {
  x: number;
  y: number;
}

export interface LaunchSelectorOptions {
  multiSelect?: boolean;
  friendlySelectors?: boolean;
  mode?: ElementSelectorMode;
  allowModeToggle?: boolean;
  optionsPanelPosition?: OptionsPanelPosition;
  selectionBarText?: SelectionBarText;
  /**
   * Switch between light and dark styling for the options panel UI
   */
  theme?: ElementSelectorTheme;
  /**
   * Keep the visual highlight on selected elements after the selector completes.
   * Highlights stay until `resetSelectionHighlights()` is called or the selector
   * is started again in select mode.
   */
  retainSelectionHighlights?: boolean;
  /** Enable verbose console diagnostics. */
  debug?: boolean;
  /**
   * Truncate element HTML snippets (selected element and neighbors).
   * true (default) trims to ~2kB with a snip marker; false disables snipping;
   * a number trims to that many bytes.
   */
  snipElementHtml?: number | boolean;
  /**
   * Truncate context HTML (beforeHtml / afterHtml).
   * true (default) trims to ~2kB with a snip marker; false disables snipping;
   * a number trims to that many bytes.
   */
  snipHtml?: number | boolean;
}

export interface ContextHtmlOptions {
  maxAncestors?: number;
}

export interface ContextHtmlResult {
  beforeHtml: string;
  elementHtml: string;
  afterHtml: string;
}
