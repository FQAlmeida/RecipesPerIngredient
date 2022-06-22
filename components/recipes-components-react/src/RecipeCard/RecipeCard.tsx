import React from "react";
import { Recipe } from "recipe-models/src/models/Recipe";

import { Card, CardContent, CardActionArea, CardMedia, Typography } from "@mui/material";

interface RecipeCardProps extends Pick<Recipe, "name" | "difficult_level" | "serves_adults" | "cooking_time" | "preparation_time"> {
    recipe_image_url: string;
}

export function RecipeCard(props: RecipeCardProps) {
    const { name, recipe_image_url } = props;
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height={140}
                    image={recipe_image_url}
                    alt="Recipe Image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
