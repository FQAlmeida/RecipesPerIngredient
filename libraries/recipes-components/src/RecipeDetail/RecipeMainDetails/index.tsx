import { Box, Container, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from "@mui/material";
import {
    FaceTwoTone as FaceIcon,
    AccessTimeTwoTone as AccessTimeIcon,
    CookieTwoTone as CookieIcon,
} from "@mui/icons-material";
import { DifficultyIconChooser } from "../../util/DifficultyIconChooser";
import { Recipe } from "@recipes-per-ingredient/recipes-models";

export function RecipeMainDetail(props: {
    recipe: Pick<Recipe,
        "difficult_level" | "name" | "preparation_time" | "cooking_time" | "serves_adults">;
}) {
    const { recipe } = props;
    const DifficultyIcon = DifficultyIconChooser(recipe.difficult_level);
    return (
        <Container style={{ height: "100%" }}>
            <Paper style={{ height: "100%", display: "grid", alignItems: "center" }}>
                <Box marginX="1%">
                    <Typography variant="h4" component="h1" textAlign="center">
                        {recipe.name}
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <DifficultyIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Difficulty: {recipe.difficult_level.difficult.toString()}
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <FaceIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Servers: {recipe.serves_adults}
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <AccessTimeIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Preparation Time: {recipe.preparation_time.toHuman()}
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CookieIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Cooking Time: {recipe.cooking_time?.toHuman()}
                            </ListItemText>
                        </ListItem>
                    </List>
                </Box>
            </Paper>
        </Container>
    );
}