/**
 * Type definitions for the element selector component
 */
export interface ElementInfo {
    element: HTMLElement;
    selector: string;
    tag: string;
    id: string | null;
    classes: string;
    textPreview: string;
}
export interface ElementSelectorProps {
    onElementSelected: (elements: ElementInfo[]) => void;
    onCancel: () => void;
    multiSelect?: boolean;
    friendlySelectors?: boolean;
}
export interface HoveredItemProps {
    targetElement: HTMLElement | null;
    friendlySelectors?: boolean;
}
export interface SelectedItemProps {
    targetElement: HTMLElement;
    onDeselect: () => void;
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
}
