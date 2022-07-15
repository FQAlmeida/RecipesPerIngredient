import { Card, CardContent, CardActionArea, CardMedia, Typography, Chip, Grid } from "@mui/material";

import {
    FaceTwoTone as FaceIcon,
    AccessTimeTwoTone as AccessTimeIcon,
    CookieTwoTone as CookieIcon,
} from "@mui/icons-material";
import { RecipeData } from "../types/RecipeData";
import Link from "next/link";
import { DifficultyIconChooser } from "../util/DifficultyIconChooser";

export function RecipeCard(props: { recipe: RecipeData; }) {
    const { name, medias, cod } = props.recipe;
    const { difficult_level, serves_adults, cooking_time, preparation_time } = props.recipe;

    const DifficultyIcon = DifficultyIconChooser(difficult_level);
    return (
        <Card sx={{ maxWidth: 345 }}>
            <Link href={`/recipes/${cod}`}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height={240}
                        image={medias[0] ? medias[0].source : "https://www.jasminealimentos.com/wp-content/uploads/2016/08/comfort-food-1.jpg"}
                        alt="Recipe Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Grid direction="row" spacing={2} container>
                            <Grid item>
                                <Chip icon={<DifficultyIcon />} size="small" label={difficult_level.difficult.toString()} />
                            </Grid>
                            <Grid item>
                                <Chip icon={<FaceIcon />} size="small" label={`Servers: ${serves_adults}`} />
                            </Grid>
                            <Grid item>
                                <Chip icon={<AccessTimeIcon />} size="small" label={`Prep: ${preparation_time.toHuman()}`} />
                            </Grid>
                            <Grid item>
                                <Chip icon={<CookieIcon />} size="small" label={`Cook: ${cooking_time?.toHuman()}`} />
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card>
    );
}
