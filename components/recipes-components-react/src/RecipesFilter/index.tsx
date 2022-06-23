import React, { useEffect, useState } from "react";

import { IngredientFilterInput } from "../IngredientsInput";

import {
    Container,
    Button,
    Stack
} from "@mui/material";

export function IngredientsFilterForm() {
    const [inputValues, setInputs] = useState<{ [key: React.Key]: string }>(
        { 0: "" }
    );
    const renderInputs = () => {
        const renderedInputs = [];
        for (const key in inputValues) {
            const value = inputValues[key];
            renderedInputs.push(
                <IngredientFilterInput key={key} valueKey={key} value={value} onChange={handleInputChange} />
            );
        }
        return renderedInputs;
    };
    const handleInputChange = (key: React.Key, newValue: string) => {
        const newState = Object.assign({}, inputValues);
        newState[key] = newValue;
        setInputs(newState);
    };
    const handleAddInput = () => {
        const biggestKey = Object.keys(inputValues).reduce((previous, current) => {
            const currentValue = parseInt(current, 10);
            return previous > currentValue ? previous : currentValue;
        }, 0);
        const newKey = biggestKey + 1;
        const newEntry = Object.create({});
        newEntry[newKey] = "a";
        const newState = Object.assign(inputValues, newEntry);
        setInputs(newState);
    };
    return (
        <Container>
            <Stack spacing={2}>
                {renderInputs()}
                <Button onClick={handleAddInput} variant="outlined">
                    Adicionar
                </Button>
            </Stack>
        </Container>
    );
}
