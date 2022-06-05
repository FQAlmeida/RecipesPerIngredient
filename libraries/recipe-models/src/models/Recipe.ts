import {Register} from "./Register";
import { Step, StepRegister } from "./Step";

export enum DifficultLevelEnum {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
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
}

export interface RecipeRegister extends Recipe, Register {
    difficult_level: DifficultLevelRegister;
    steps: StepRegister[];
}


