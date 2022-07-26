import {
    CheckCircleTwoTone as CheckCircleTwoToneIcon,
} from "@mui/icons-material";
import { Box, Container, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from "@mui/material";

import { Tool } from "@recipes-per-ingredient/recipes-models";

type ToolData = Pick<Tool,
    "name" | "details">;


export function ToolList(props: {
    tools: ToolData[];
}) {
    const { tools } = props;
    const renderItem = (tool: ToolData) => {
        return (
            <ListItem>
                <ListItemIcon>
                    <CheckCircleTwoToneIcon />
                </ListItemIcon>
                <ListItemText secondary={tool.details || null}>
                    {tool.name}
                </ListItemText>
            </ListItem>
        );
    };
    const renderItens = () => {
        return tools.map(renderItem);
    };
    return (
        <Container style={{ height: "100%" }} id="recipe-tools-container">
            <Paper style={{ height: "100%" }}>
                <Box margin="1%">
                    <Typography variant="h5" component="h5" textAlign="center" id="recipe-tools">
                        Tools
                    </Typography>
                    <List dense>
                        {renderItens()}
                    </List>
                </Box>
            </Paper>
        </Container>
    );
}