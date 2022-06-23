import React from "react";

import { Divider, IconButton, Paper, Stack, TextField } from "@mui/material";
import { DeleteTwoTone as DeleteIcon } from "@mui/icons-material";

interface IngredientFilterInputProps {
    value: string,
    valueKey: number,
    onChange: (key: number, newValue: string, oldValue: string) => void;
    onRemove: (key: number) => void;
}

export function IngredientFilterInput(props: IngredientFilterInputProps) {
    const { value, valueKey, onChange, onRemove } = props;
    return (
        <Paper sx={{ p: '4px 4px' }} >
            <Stack direction="row">
                <TextField
                    size="small"
                    fullWidth
                    label={`Ingredient: ${valueKey}`}
                    value={value}
                    variant="outlined"
                    onChange={(event) => {
                        onChange(valueKey, event.target.value, value);
                    }}
                />
                <Divider orientation="vertical" sx={{ height: 32, m: 0.5 }} />
                <IconButton sx={{ p: '8px' }} onClick={() => { onRemove(valueKey); }}>
                    <DeleteIcon />
                </IconButton>
            </Stack>
        </Paper>
    );
}
