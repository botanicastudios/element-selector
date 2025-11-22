/**
 * Type definitions for the element selector component
 */
export type ElementSelectorMode = "select" | "insert";
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
     * Text displayed next to the counter in multi-select mode.
     * If a string, `{count}` will be replaced with the current selection count.
     * You can also provide a formatter function.
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
export interface ElementSelectorProps {
    onElementSelected: (elements: ElementInfo[]) => void;
    onCancel: () => void;
    multiSelect?: boolean;
    friendlySelectors?: boolean;
    initialMode?: ElementSelectorMode;
    allowModeToggle?: boolean;
    optionsPanelPosition?: OptionsPanelPosition;
    selectionBarText?: SelectionBarText;
}
export interface HoveredItemProps {
    targetElement: HTMLElement | null;
    friendlySelectors?: boolean;
}
export interface SelectedItemProps {
    targetElement: HTMLElement;
    onDeselect: () => void;
    /**
     * When set to "passive", the highlight remains visible but does not intercept clicks.
     * Useful for persisting highlights after the selector UI is dismissed.
     */
    variant?: "interactive" | "passive";
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
    optionsPanelPosition?: OptionsPanelPosition;
    selectionBarText?: SelectionBarText;
    /**
     * Keep the visual highlight on selected elements after the selector completes.
     * Highlights stay until `resetSelectionHighlights()` is called or the selector
     * is started again in select mode.
     */
    retainSelectionHighlights?: boolean;
}
export interface ContextHtmlOptions {
    maxAncestors?: number;
}
export interface ContextHtmlResult {
    beforeHtml: string;
    elementHtml: string;
    afterHtml: string;
}
