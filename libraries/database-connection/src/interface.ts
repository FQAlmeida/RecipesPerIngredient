import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// A `main` function so that you can use async/await
export async function getRecipes(filter: Prisma.RecipeWhereInput) {
    return prisma.recipe.findMany({
        where: filter, include: {
            steps: {
                include: {
                    depends_on: true,
                    IngredientsStep: {
                        include: {
                            ingredient: true,
                            measurement_unit: true
                        }
                    },
                    technique: true,
                    ToolsStep: {
                        include: {
                            tool: true
                        }
                    },
                }
            },
            difficulty_level: true
        }
    });
}

export async function addRecipes(recipes: Prisma.RecipeCreateManyInput[]) {
    return prisma.recipe.createMany({ data: recipes });
} 
