import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export type GetFilterType = Prisma.RecipeWhereInput;
export type GetReturnType = ReturnType<typeof getRecipes>;

export async function getRecipes(filter: Prisma.RecipeWhereInput) {
    return await prisma.recipe.findMany({
        where: filter, include: {
            difficulty_level: true,
            ingredients_recipe: {
                include: {
                    ingredient: true,
                    measurement_unit: true
                }
            },
            steps: {
                include: {
                    depends_on: true,
                    technique: true
                }
            },
            tools_recipe: {
                include: {
                    tool: true
                }
            }
        }
    });
}


export async function addRecipes(recipes: Prisma.RecipeCreateManyInput[]) {
    return prisma.recipe.createMany({ data: recipes });
} 
