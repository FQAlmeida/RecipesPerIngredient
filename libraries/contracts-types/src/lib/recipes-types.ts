import type { RecipeRegister } from "@recipes-per-ingredient/recipes-models";

export interface RecipeRegisterContract extends Omit<RecipeRegister, "cooking_time" | "preparation_time"> {
    cooking_time?: string,
    preparation_time: string;
}

import type {
    DifficultLevel,
    DifficultLevelRegister,
    Ingredient,
    IngredientRegister,
    MeasureUnit,
    MeasureUnitRegister,
    Media,
    MediaRegister,
    MediaType,
    MediaTypeRegister,
    Recipe,
    Step,
    StepRegister,
    Technique,
    TechniqueRegister,
    Tool,
    ToolRegister,
} from "@recipes-per-ingredient/recipes-models";

import {
    DifficultLevelEnum,
    MeasureUnitEnum,
    MediaTypeEnum,
} from "@recipes-per-ingredient/recipes-models";

export type {
    DifficultLevelEnum,
    MeasureUnitEnum,
    MediaTypeEnum,

};

export type {
    RecipeRegister,
    DifficultLevel,
    DifficultLevelRegister,
    Ingredient,
    IngredientRegister,
    MeasureUnit,
    MeasureUnitRegister,
    Media,
    MediaRegister,
    MediaType,
    MediaTypeRegister,
    Recipe,
    Step,
    StepRegister,
    Technique,
    TechniqueRegister,
    Tool,
    ToolRegister
};

export {
    RandomDifficultyLevel, RandomIngredientFactory, RandomIngredientsFactory, RandomMediaFactory
    , RandomMediaTypeFactory, RandomMesurementUnit, RandomRecipeFactory, RandomRecipesFactory, RandomStepFactory
    , RandomStepsFactory, RandomTechniqueFactory, RandomToolFactory, RandomToolsFactory, convertToDuration
} from "@recipes-per-ingredient/recipes-models";

