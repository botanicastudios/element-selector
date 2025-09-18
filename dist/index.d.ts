/**
 * Element selector API - Visual DOM element picker
 */
import type { ElementInfo, LaunchSelectorOptions } from "./types";
/**
 * Launch the element selector interface
 * @param options - Configuration options
 * @returns Promise resolving to single element (single select) or array (multi select)
 */
export declare function launchSelector(options?: LaunchSelectorOptions): Promise<ElementInfo | ElementInfo[]>;
export { ElementSelector } from "./ElementSelector";
export { findElementAtCoordinates, buildElementSelector } from "./utils";
export type { ElementInfo, ElementSelectorProps, LaunchSelectorOptions, ElementSelectorMode, } from "./types";
