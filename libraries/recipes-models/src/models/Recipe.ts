import { Duration } from "luxon";
import { Ingredient, IngredientRegister } from "./Ingredient";
import { Register } from "./Register";
import { Step, StepRegister } from "./Step";
import { Technique } from "./Technique";
import { Tool, ToolRegister } from "./Tool";

export enum DifficultLevelEnum {
    EASY = "Easy",
    MEDIUM = "Medium",
    HARD = "Hard"
}

export interface DifficultLevel {
    difficult: DifficultLevel | string;
}

export interface DifficultLevelRegister extends DifficultLevel, Register {
}

export interface Recipe {
    name: string;
    difficult_level: DifficultLevel;
    serves_adults: number;
    steps: Step[];
    preparation_time: Duration | string;
    cooking_time?: Duration | string;
    ingredients: Ingredient[];
    tools: Tool[];
}

export interface RecipeRegister extends Recipe, Register {
    difficult_level: DifficultLevelRegister;
    steps: StepRegister[];
    ingredients: IngredientRegister[];
    tools: ToolRegister[];
}


