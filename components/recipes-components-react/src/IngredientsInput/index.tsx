import React from "react";

import { TextField } from "@mui/material";

interface IngredientFilterInputProps {
    value: string,
    valueKey: React.Key,
    onChange: (key: React.Key, newValue: string, oldValue: string) => void
}

export function IngredientFilterInput(props: IngredientFilterInputProps) {
    const { value, valueKey, onChange } = props;
    return (
        <TextField
            label={`Ingredient: ${valueKey}`}
            value={value}
            variant="outlined"
            onChange={(event) => {
                onChange(valueKey, event.target.value, value);
            }}
        />
    );
}
