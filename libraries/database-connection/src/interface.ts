import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export type GetRecipesParamsType = { filter?: Prisma.RecipeWhereInput, take?: number; };
export type GetRecipesReturnType = ReturnType<typeof getRecipes>;

export async function getRecipes(args: GetRecipesParamsType) {
    return await prisma.recipe.findMany({
        where: args.filter,
        take: args.take,
        include: {
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
