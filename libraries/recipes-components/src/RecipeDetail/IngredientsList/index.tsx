import {
    CheckCircleTwoTone as CheckCircleTwoToneIcon,
    HelpTwoTone as HelpTwoToneIcon,
} from "@mui/icons-material";
import { Box, Container, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from "@mui/material";

import { Ingredient } from "@recipes-per-ingredient/recipes-models";

type IngredientsData = Pick<Ingredient,
    "name" | "is_required" | "measure_unit" | "quantity">;


export function IngredientsList(props: {
    ingredients: IngredientsData[];
}) {
    const { ingredients } = props;
    const renderItem = (ingredient: IngredientsData) => {
        return (
            <ListItem>
                <ListItemIcon>
                    {
                        ingredient.is_required ?
                            <CheckCircleTwoToneIcon /> :
                            <HelpTwoToneIcon />
                    }
                </ListItemIcon>
                <ListItemText secondary={
                    `${ingredient.quantity} ${ingredient.measure_unit.name}(s)`
                }>
                    {ingredient.name}
                </ListItemText>
            </ListItem>
        );
    };
    const renderItens = () => {
        return ingredients.map(renderItem);
    };
    return (
        <Container id="recipe-ingredients-container">
            <Paper >
                <Box margin="1%">
                    <Typography variant="h5" component="h5" textAlign="center" id="recipe-ingredients">
                        Ingredients
                    </Typography>
                    <List dense>
                        {renderItens()}
                    </List>
                </Box>
            </Paper>
        </Container>
    );
}