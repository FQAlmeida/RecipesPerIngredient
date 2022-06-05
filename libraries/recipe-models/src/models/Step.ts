import { Duration } from "luxon";
import {Register} from "./Register";
import { Technique, TechniqueRegister } from "./Technique";
import { Ingredient, IngredientRegister } from "./Ingredient";
import { Tool, ToolRegister } from "./Tool";

export interface Step {
    description: string;
    preparation_time: Duration;
    cooking_time: Duration;
    depends_on?: number,
    technique?: Technique;
    ingredients: Ingredient[];
    tools: Tool[];
}

export interface StepRegister extends Step, Register {
    technique?: TechniqueRegister;
    ingredients: IngredientRegister[];
    tools: ToolRegister[];
}
