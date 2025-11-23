/**
 * Element selector API - Visual DOM element picker
 */
import type { LaunchSelectorOptions, SelectionResult } from "./types";
export declare function resetSelectionHighlights(): void;
/**
 * Launch the element selector interface
 * @param options - Configuration options
 * @returns Promise resolving to single element (single select) or array (multi select)
 */
export declare function launchSelector(options?: LaunchSelectorOptions): Promise<SelectionResult | SelectionResult[]>;
export { ElementSelector } from "./ElementSelector";
export { findElementAtCoordinates, buildElementSelector } from "./utils";
export type { ElementInfo, ElementSelectorProps, LaunchSelectorOptions, ElementSelectorMode, ElementSelectorTheme, ContextHtmlOptions, ContextHtmlResult, OptionsPanelPosition, SelectionBarText, PanelHorizontalPosition, PanelVerticalPosition, SelectionResult, SelectResult, InsertResult, } from "./types";
