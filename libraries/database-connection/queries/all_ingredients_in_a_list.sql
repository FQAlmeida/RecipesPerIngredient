SELECT
    *
FROM
    "Recipe"
WHERE
    NOT EXISTS (
        SELECT
            *
        FROM
            "Ingredient"
            INNER JOIN "IngredientsRecipe" ON "Ingredient".cod_ingredient = "IngredientsRecipe".cod_ingredient
        WHERE
            "Recipe".cod_recipe = "IngredientsRecipe".cod_recipe
            AND "Ingredient".name not in (
                'ervilha',
                'salmão',
                'creme fresco',
                'macarrão',
                'cebola',
                'cebolinha',
                'manteiga',
                'caldo de vegetais'
            )
    )