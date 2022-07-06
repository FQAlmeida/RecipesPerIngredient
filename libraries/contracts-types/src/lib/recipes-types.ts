import type {RecipeRegister} from "@recipes-per-ingredient/recipes-models"

export interface RecipeRegisterContract extends RecipeRegister {
    cooking_time?: string,
    preparation_time: string
}

export * from "@recipes-per-ingredient/recipes-models";