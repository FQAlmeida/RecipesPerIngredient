import { faker } from "@faker-js/faker";
import { Duration } from "luxon";
import { IngredientRegister, MeasureUnitEnum, MeasureUnitRegister } from "../models/Ingredient";
import { DifficultLevelEnum, DifficultLevelRegister, RecipeRegister } from "../models/Recipe";
import { StepRegister } from "../models/Step";
import { TechniqueRegister } from "../models/Technique";
import { ToolRegister } from "../models/Tool";

function randomEnum<T extends object>(anEnum: T): T[keyof T] {
    const enumValues = Object.values(anEnum)
        .filter(n => !Number.isInteger(n)) as unknown as T[keyof T][];
    const randomIndex = Math.floor(Math.random() * enumValues.length);
    const randomEnumValue = enumValues[randomIndex];
    return randomEnumValue;
}


export function RandomTechniqueFactory(): TechniqueRegister {
    return {
        cod: faker.mersenne.rand(),
        name: faker.name.middleName(),
        description: faker.lorem.paragraph()
    };
}

export function RandomStepFactory(depends_on?: StepRegister): StepRegister {
    return {
        cod: faker.mersenne.rand(),
        cooking_time: Duration.fromObject({
            minutes: faker.mersenne.rand(1, 40)
        }),
        preparation_time: Duration.fromObject({
            minutes: faker.mersenne.rand(1, 40)
        }),
        description: faker.lorem.paragraph(),
        ingredients: RandomIngredientsFactory(faker.mersenne.rand(1, 5)),
        tools: RandomToolsFactory(faker.mersenne.rand(0, 3)),
        technique: RandomTechniqueFactory(),
        depends_on: depends_on?.cod
    };
}

export function RandomMesurementUnit(): MeasureUnitRegister {
    return {
        cod: faker.mersenne.rand(),
        name: `${randomEnum(MeasureUnitEnum)}`,
    };
}

export function RandomDifficultyLevel(): DifficultLevelRegister {
    return {
        cod: faker.mersenne.rand(),
        difficult: `${randomEnum(DifficultLevelEnum)}`,
    };
}

export function RandomIngredientFactory(): IngredientRegister {
    return {
        cod: faker.mersenne.rand(),
        name: faker.name.middleName(),
        is_required: faker.datatype.boolean(),
        quantity: faker.mersenne.rand(1, 999),
        measure_unit: RandomMesurementUnit()
    };
}

export function RandomToolFactory(): ToolRegister {
    return {
        cod: faker.mersenne.rand(),
        name: faker.name.middleName(),
        is_required: faker.datatype.boolean(),
        details: faker.lorem.paragraph(2)
    };
}

export function RandomStepsFactory(qtd_step: number): StepRegister[] {
    if (qtd_step <= 0) {
        return [];
    }
    let step = RandomStepFactory();
    const steps: StepRegister[] = [step];
    for (let index = 1; index < qtd_step; index++) {
        const newStep = RandomStepFactory(step);
        steps.push(newStep);
        step = newStep;

    }
    return steps;

}

export function RandomToolsFactory(qtd_tools: number): ToolRegister[] {
    if (qtd_tools <= 0) {
        return [];
    }
    const tools: ToolRegister[] = [];
    for (let index = 0; index < qtd_tools; index++) {
        const tool = RandomToolFactory();
        tools.push(tool);

    }
    return tools;

}

export function RandomIngredientsFactory(qtd_ingredients: number): IngredientRegister[] {
    if (qtd_ingredients <= 0) {
        return [];
    }
    const ingredients: IngredientRegister[] = [];
    for (let index = 0; index < qtd_ingredients; index++) {
        const ingredient = RandomIngredientFactory();
        ingredients.push(ingredient);
    }
    return ingredients;

}

export function RandomRecipeFactory(id?: number): RecipeRegister {
    return {
        cod: id || faker.mersenne.rand(),
        name: faker.name.middleName(),
        difficult_level: RandomDifficultyLevel(),
        serves_adults: faker.mersenne.rand(4, 1),
        steps: RandomStepsFactory(faker.mersenne.rand(3, 10))
    };
}
export function RandomRecipesFactory(qtd_recipes: number): RecipeRegister[] {
    const recipes = Array<RecipeRegister>(qtd_recipes);
    for (let index = 0; index < recipes.length; index++) {
        recipes[index] = RandomRecipeFactory();
    }
    return recipes;
}
