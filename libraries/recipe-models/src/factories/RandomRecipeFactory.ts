import { faker } from "@faker-js/faker"
import { Duration } from "luxon";
import { DifficultLevel, DifficultLevelEnum, Ingredient, MeasureUnit, MeasureUnitEnum, Recipe, Step, Technique, Tool } from "../Recipe"

function randomEnum<T>(anEnum: T): T[keyof T] {
    const enumValues = Object.values(anEnum)
        .filter(n => !Number.isInteger(n)) as unknown as T[keyof T][]
    const randomIndex = Math.floor(Math.random() * enumValues.length)
    const randomEnumValue = enumValues[randomIndex]
    return randomEnumValue;
}


export function RandomTechniqueFactory(): Technique {
    return {
        cod: faker.mersenne.rand(),
        name: faker.name.middleName(),
        description: faker.lorem.paragraph()
    }
}

export function RandomStepFactory(depends_on?: Step): Step {
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
    }
}

export function RandomMesurementUnit(): MeasureUnit {
    var rand = Math.floor(Math.random() * Object.keys(MeasureUnitEnum).length);

    return {
        cod: faker.mersenne.rand(),
        name: `${randomEnum(MeasureUnitEnum)}`,
    }
}

export function RandomDifficultyLevel(): DifficultLevel {
    const rand = Math.floor(Math.random() * Object.keys(DifficultLevelEnum).length);
    return {
        cod: faker.mersenne.rand(),
        difficult: `${randomEnum(DifficultLevelEnum)}`,
    }
}

export function RandomIngredientFactory(): Ingredient {
    return {
        cod: faker.mersenne.rand(),
        name: faker.name.middleName(),
        is_required: faker.datatype.boolean(),
        quantity: faker.mersenne.rand(1, 999),
        measure_unit: RandomMesurementUnit()
    }
}

export function RandomToolFactory(): Tool {
    return {
        cod: faker.mersenne.rand(),
        name: faker.name.middleName(),
        is_required: faker.datatype.boolean(),
        details: faker.lorem.paragraph(2)
    }
}

export function RandomStepsFactory(qtd_step: number): Step[] {
    if (qtd_step <= 0) {
        return []
    }
    let step = RandomStepFactory()
    const steps: Step[] = [step];
    for (let index = 1; index < qtd_step; index++) {
        const newStep = RandomStepFactory(step)
        steps.push(newStep)
        step = newStep

    }
    return steps

}

export function RandomToolsFactory(qtd_tools: number): Tool[] {
    if (qtd_tools <= 0) {
        return []
    }
    const tools: Tool[] = [];
    for (let index = 0; index < qtd_tools; index++) {
        const tool = RandomToolFactory()
        tools.push(tool)

    }
    return tools

}

export function RandomIngredientsFactory(qtd_ingredients: number): Ingredient[] {
    if (qtd_ingredients <= 0) {
        return []
    }
    const ingredients: Ingredient[] = [];
    for (let index = 0; index < qtd_ingredients; index++) {
        const ingredient = RandomIngredientFactory()
        ingredients.push(ingredient)
    }
    return ingredients

}

export function RandomRecipeFactory(id?: number): Recipe {
    return {
        cod: id || faker.mersenne.rand(),
        name: faker.name.middleName(),
        difficult_level: RandomDifficultyLevel(),
        serves_adults: 2,
        steps: RandomStepsFactory(faker.mersenne.rand(3, 10))
    }
}