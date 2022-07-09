import {
    CheckCircleTwoTone as CheckCircleTwoToneIcon,
} from "@mui/icons-material";
import { Box, Container, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from "@mui/material";

import { Step } from "@recipes-per-ingredient/recipes-models";

type StepData = Pick<Step,
    "description"> & { index: number; };


export function StepsList(props: {
    steps: StepData[];
}) {
    const { steps } = props;
    const renderItem = (step: StepData) => {
        return (
            <ListItem>
                <ListItemIcon style={{display: "flex", justifyContent: "center"}}>
                    <Typography variant="h6" component="h6">
                        {step.index}
                    </Typography>
                </ListItemIcon>
                <ListItemText>
                    {step.description}
                </ListItemText>
            </ListItem>
        );
    };
    const renderItens = () => {
        return steps.map(renderItem);
    };
    return (
        <Container >
            <Paper >
                <Box margin="1%">
                    <Typography variant="h5" component="h5" textAlign="center">
                        Steps
                    </Typography>
                    <List dense>
                        {renderItens()}
                    </List>
                </Box>
            </Paper>
        </Container>
    );
}