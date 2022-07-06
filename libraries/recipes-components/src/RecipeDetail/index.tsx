import { Box } from "@mui/material";
import { Recipe } from "@recipes-per-ingredient/recipes-models";

export function RecipeDetail(props: { recipe: Recipe & { recipe_image_url: string; }; }) {
    const { recipe } = props;
    return (
        <Box sx={{ display: "flex" }}>
            <div>{recipe.name}</div>
        </Box>
    );
}