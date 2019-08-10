import { Components, Action, Column, Options, Query, QueryResult, Localization } from "material-table";
import { GridRowActionDefinitions } from "./GridRowActionDefinitions";
import { EventType } from "../base/Event";
/** @ElementDoc
 * @example
 * // usage: TODO: add docs
 * 
 * 
 */
// Element: Grid
/**../base/Event
 * @[{"bidirectional":false,"required":false,"typeguard":"isColumnDefinitions","default":"[]"}]
 * TODO: add docs
 */
export type ColumnDefinitions = Column[];
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isActionDefinitions","default":"[]"}]
 * TODO: add docs
 */
export type ActionDefinitions = (Action | ((rowData: any) => Action))[];
/**
 * @[{"bidirectional":false,"required":false,"default":"{}"}]
 * TODO: add docs
 */
export type ComponentsOverride = Components;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isDatasource","default":"[]"}]
 * TODO: add docs
 */
export type Datasource = any[] | ((query: Query) => Promise<QueryResult>);
/**
 * @[{"bidirectional":false,"required":false,"default":"{}"}]
 * TODO: add docs
 */
export type RowActionDefinitions = GridRowActionDefinitions;
/**
 * @[{"bidirectional":false,"required":false,"default":"{}"}]
 * TODO: add docs
 */
export type GridOptions = Options;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isTitle","default":"''"}]
 * TODO: add docs
 */
export type Title = string;
/**
 * @[{"bidirectional":false,"required":false,"default":"undefined"}]
 * TODO: add docs
 */
export type LocalizationDefinition = Localization | undefined;
/**
 * @[{"bidirectional":true,"required":false,"default":"null"}]
 * TODO: add docs
 */
export type RefreshEvent = EventType;
// End Element

// type guards

export const TypeGuards = {
    isColumnDefinitions: (value: any): value is ColumnDefinitions => value.forEach != null,
    isActionDefinitions: (value: any): value is ActionDefinitions => value.forEach != null,
    isDatasource: (value: any): value is Datasource => (value.map != null && value.length != null) || typeof (value) == "function",
    isTitle: (value: any): value is Title => typeof (value) == "string",
}
