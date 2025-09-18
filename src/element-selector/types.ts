/**
 * Type definitions for the element selector component
 */

export type ElementSelectorMode = "select" | "insert";

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
}

export interface ElementSelectorProps {
  onElementSelected: (elements: ElementInfo[]) => void;
  onCancel: () => void;
  multiSelect?: boolean;
  friendlySelectors?: boolean;
  initialMode?: ElementSelectorMode;
  allowModeToggle?: boolean;
}

export interface HoveredItemProps {
  targetElement: HTMLElement | null;
  friendlySelectors?: boolean;
}

export interface SelectedItemProps {
  targetElement: HTMLElement;
  onDeselect: () => void;
}

export interface InsertionCandidate {
  element: HTMLElement;
  position: "before" | "after";
  axis: "horizontal" | "vertical";
}

export interface InsertionGuideProps extends InsertionCandidate {
  friendlySelectors?: boolean;
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
}

export interface ContextHtmlOptions {
  maxAncestors?: number;
}

export interface ContextHtmlResult {
  beforeHtml: string;
  elementHtml: string;
  afterHtml: string;
}
