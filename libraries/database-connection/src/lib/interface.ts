import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient({
    log: [
        // "query"
    ]
});

export type GetRecipesParamsType = { filter?: Prisma.RecipeWhereInput, take?: number; };
type UnboxPromise<T extends Promise<unknown>> = T extends Promise<infer U> ? U : never;
type ArrayElement<ArrayType extends readonly unknown[]> = 
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;
export type GetRecipesReturnType = UnboxPromise<ReturnType<typeof getRecipes>>;
export type Recipe = ArrayElement<GetRecipesReturnType>

export async function getRecipes(args: GetRecipesParamsType) {
    return await prisma.recipe.findMany({
        where: args.filter,
        take: args.take,
        include: {
            medias: true,
            difficulty_level: true,
            ingredients_recipe: {
                include: {
                    ingredient: {
                        select: {
                            cod_ingredient: true,
                            name: true
                        }
                    },
                    measurement_unit: {
                        select: {
                            cod_measurement_unit: true,
                            name: true
                        }
                    }
                }
            },
            steps: {
                include: {
                    depends_on: {
                        select: {
                            cod_step: true
                        }
                    },
                    technique: {
                        select: {
                            cod_technique: true,
                            name: true,
                            description: true,
                        }
                    }
                }
            },
            tools_recipe: {
                include: {
                    tool: {
                        select: {
                            cod_tool: true,
                            name: true,
                            details: true
                        }
                    }
                }
            }
        }
    });
}
