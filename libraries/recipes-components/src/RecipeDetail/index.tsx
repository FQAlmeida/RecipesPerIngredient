import { Container, Divider, Grid, Paper } from "@mui/material";
import { Recipe, Media } from "@recipes-per-ingredient/recipes-models";
import { RecipeMainDetail } from "./RecipeMainDetails";
import { EggTwoTone as EggIcon } from "@mui/icons-material";
import { IngredientsList } from "./IngredientsList";
import { ToolList } from "./ToolsList";
import { StepsList } from "./StepsList";

export function RecipeDetail(props: { recipe: Recipe & { medias: Media[]; }; }) {
    const { recipe } = props;
    const media = recipe.medias[0] ? recipe.medias[0].source : "https://www.jasminealimentos.com/wp-content/uploads/2016/08/comfort-food-1.jpg"
    return (
        <Container>
            <Paper
                elevation={0}
                variant="outlined"
                style={{ minHeight: "98vh", marginBlock: "1vh", padding: "1%" }}>
                <Grid container style={{ height: "100%" }}>
                    <Grid item xs={4} style={{
                        height: "100%",
                        overflow: "hidden",
                    }}>
                        <img
                            src={`${media}`}
                            srcSet={`${media}`}
                            alt={`${recipe.name}`}
                            loading="lazy"
                            style={{
                                flexShrink: 0,
                                maxWidth: "100%",
                                maxHeight: "100%",
                                borderRadius: "4px"
                            }}
                        />
                    </Grid>
                    <Grid item xs={8} >
                        <RecipeMainDetail recipe={recipe} />
                    </Grid>
                </Grid>
                <Divider><EggIcon /></Divider>
                <Grid container style={{ height: "100%" }}>
                    <Grid item xs={6} style={{
                        height: "100%",
                        overflow: "hidden",
                    }}>
                        <IngredientsList ingredients={recipe.ingredients} />
                        <ToolList tools={recipe.tools} />
                    </Grid>
                    <Grid item xs={6} >
                        <StepsList steps={recipe.steps.map((step, index) => { return { ...step, index } })} />
                    </Grid>
                </Grid>
            </Paper>
        </Container >
    );
}