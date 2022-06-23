import React, { useState } from "react";

import { IngredientFilterInput } from "../IngredientsInput";

import {
    Container,
    Button,
    Stack
} from "@mui/material";

type inputValuesType = { [key: number]: string; };

export function IngredientsFilterForm() {
    const [inputValues, setInputs] = useState<inputValuesType>(
        { 0: "" }
    );
    const renderInputs = (values: inputValuesType) => {
        const renderedInputs = [];
        for (let key in values) {
            const value = values[key];
            renderedInputs.push(
                <IngredientFilterInput
                    key={key}
                    valueKey={parseInt(key, 10)}
                    value={value}
                    onChange={handleInputChange}
                    onRemove={handleDeleteInput}
                />
            );
        }
        return renderedInputs;
    };
    const handleInputChange = (key: number, newValue: string) => {
        setInputs(oldValues => {
            const filteredValues = oldValues;
            filteredValues[key] = newValue;
            const newState = Object.assign(Object.create(null), filteredValues);
            return newState;
        });
    };
    const handleAddInput = () => {
        setInputs(oldValues => {
            const filteredValues = oldValues;
            const oldKeys = Object.keys(filteredValues);
            const parsedOldKeys = oldKeys.map((value) => parseInt(value, 10));
            const biggestKey = Math.max(...parsedOldKeys, 0);
            const newKey = biggestKey + 1;
            filteredValues[newKey] = "";
            const newState = Object.assign(Object.create(null), filteredValues);
            return newState;
        });
    };
    const handleDeleteInput = (key: number) => {
        setInputs(oldValues => {
            const filteredValues = oldValues;
            delete filteredValues[key];
            const newState = Object.assign(Object.create(null), filteredValues);
            return newState;
        });
    };
    return (
        <Container>
            <Stack spacing={2}>
                {renderInputs(inputValues)}
                <Button onClick={handleAddInput} variant="outlined">
                    Adicionar
                </Button>
            </Stack>
        </Container>
    );
}
