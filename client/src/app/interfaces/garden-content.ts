import { Parcelle } from "./parcelle";
import { Row } from "./row";
import { RowContent } from "./row-content";
export interface GardenContent {
    parcelles: Parcelle[],
    rows: Row[],
    rowContents: RowContent[],
}