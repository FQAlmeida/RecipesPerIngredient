import { Container, Grid } from "@mui/material";

import { RecipeCard } from "../RecipeCard";
import { RecipeData } from "../types/RecipeData";

export function RecipeList(props: { recipes: RecipeData[]; }) {
    const children = props.recipes.map((recipe_data, index) => {
        return (
            <Grid key={index} item>
                <RecipeCard recipe={recipe_data} />
            </Grid>
        );
    });
    return (
        <Container>
            <Grid container spacing={3}>
                {children}
            </Grid>
        </Container>
    );
}