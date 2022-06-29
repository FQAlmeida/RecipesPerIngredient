import { Card, CardContent, CardActionArea, CardMedia, Typography, Chip, Grid } from "@mui/material";

import {
    FaceTwoTone as FaceIcon,
    AccessTimeTwoTone as AccessTimeIcon,
    CookieTwoTone as CookieIcon,
    SignalCellular0BarTwoTone as SignalCellular0BarIcon,
    SignalCellular2BarTwoTone as SignalCellular2BarIcon,
    SignalCellular3BarTwoTone as SignalCellular3BarIcon,
} from "@mui/icons-material";
import { DifficultLevelEnum } from "@recipes-per-ingredient/recipes-models";
import { RecipeData } from "../types/RecipeData";

export function RecipeCard(props: { recipe: RecipeData; }) {
    const { name, recipe_image_url } = props.recipe;
    const { difficult_level, serves_adults, cooking_time, preparation_time } = props.recipe;
    const DifficultyIconChooser = () => {
        switch (difficult_level.difficult) {
        case DifficultLevelEnum.EASY:
            return SignalCellular0BarIcon;
        case DifficultLevelEnum.MEDIUM:
            return SignalCellular2BarIcon;
        case DifficultLevelEnum.HARD:
            return SignalCellular3BarIcon;
        default:
            return SignalCellular2BarIcon;
        }
    };
    const DifficultyIcon = DifficultyIconChooser();
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height={240}
                    image={recipe_image_url}
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
        </Card>
    );
}
