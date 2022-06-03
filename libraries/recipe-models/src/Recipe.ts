import { Duration } from "luxon";

interface Register {
    cod: number;
}

export enum DifficultLevelEnum {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

export interface DifficultLevel extends Register {
    difficult: DifficultLevel | string
}

export interface Technique extends Register {
    name: string
    description: string
}

export enum MeasureUnitEnum {
    KG = "killogram",
    G = "gram",
    MG = "milligram",
    ML = "Milliliter",
    L = "Liter"
}

export interface MeasureUnit extends Register {
    name: MeasureUnit | string
}

export interface Ingredient extends Register {
    name: string
    quantity: number
    measure_unit: MeasureUnit
    is_required: boolean
}

export interface Tool extends Register {
    name: string
    details?: string
    is_required: boolean
}

export interface Step extends Register {
    description: string
    preparation_time: Duration
    cooking_time: Duration
    depends_on?: number,
    technique?: Technique
    ingredients: Ingredient[]
    tools: Tool[]
}

export interface Recipe extends Register {
    name: string;
    difficult_level: DifficultLevel;
    serves_adults: number
    steps: Step[]
}

export enum MediaTypeEnum {

}

export interface MediaType extends Register {
    name: MediaTypeEnum | string
}
export interface Media extends Register {
    source: string
    type: MediaType
}
