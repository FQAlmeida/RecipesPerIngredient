import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export async function getRecipes(filter: RecipeWhereInput) {
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
