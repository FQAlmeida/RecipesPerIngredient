import { Box } from "@mui/material";
import { Recipe, Media } from "@recipes-per-ingredient/recipes-models";

export function RecipeDetail(props: { recipe: Recipe & { medias: Media[]; }; }) {
    const { recipe } = props;
    return (
        <Box sx={{ display: "flex" }}>
            <div>{recipe.name}</div>
        </Box>
    );
}