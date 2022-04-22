import { Parcelle } from "./parcelle";
import { Row } from "./row";
export interface GardenContent {
    parcelles: Parcelle[],
    rows: Row[],
}