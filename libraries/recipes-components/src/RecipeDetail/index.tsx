import { Container, Divider, Grid, Typography } from "@mui/material";
import { Recipe, Media } from "@recipes-per-ingredient/recipes-models";

export function RecipeDetail(props: { recipe: Recipe & { medias: Media[]; }; }) {
    const { recipe } = props;
    return (
        <Grid container style={{ minHeight: "100vh" }}>
            <Grid item xs={4} style={{ overflow: "hidden", justifyContent: "center", alignItems: "center" }}>
                <img
                    src={`${recipe.medias[0].source}`}
                    srcSet={`${recipe.medias[0].source}`}
                    alt={`${recipe.name}`}
                    loading="lazy"
                    style={{
                        flexShrink: 0,
                        minWidth: "100%",
                        minHeight: "100%"
                    }}
                />
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item >
                <Container>
                    <Typography variant="h3" component="h3">
                        {recipe.name}
                    </Typography>
                </Container>
            </Grid>
        </Grid>
    );
}