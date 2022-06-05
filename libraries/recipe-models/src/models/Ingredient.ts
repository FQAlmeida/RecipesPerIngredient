import { Register } from "./Register";

export enum MeasureUnitEnum {
    KG = "killogram",
    G = "gram",
    MG = "milligram",
    ML = "Milliliter",
    L = "Liter"
}

export interface MeasureUnit {
    name: MeasureUnit | string;
}
export interface MeasureUnitRegister extends MeasureUnit, Register {
}

export interface Ingredient {
    name: string;
    quantity: number;
    measure_unit: MeasureUnit;
    is_required: boolean;
}

export interface IngredientRegister extends Ingredient, Register {
    measure_unit: MeasureUnitRegister;
}
