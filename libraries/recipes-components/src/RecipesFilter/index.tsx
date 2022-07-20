import { useEffect, useState } from "react";

import { IngredientFilterInput } from "../IngredientsInput";

import {
    Container,
    Button,
    Stack,
    Box
} from "@mui/material";

type inputValuesType = { [key: number]: string; };
interface IngredientsFilterFormProps {
    onIngredientsChange: (ingredients: string[]) => void;
}

export function IngredientsFilterForm(props: IngredientsFilterFormProps) {
    const [inputValues, setInputs] = useState<inputValuesType>(
        { 0: "" }
    );

    useEffect(() => {
        const getIngredients = (): string[] => {
            const ingredients = [];
            for (const value of Object.values(inputValues)) {
                if (value && value.length > 0) {
                    ingredients.push(value);
                }
            }
            return ingredients;
        };
        props.onIngredientsChange(getIngredients());
    }, [inputValues, props]);

    const renderInputs = (values: inputValuesType) => {
        const renderedInputs = [];
        for (const key in values) {
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
                <Box id='inputs-container'>
                    {renderInputs(inputValues)}
                </Box>
                <Button onClick={handleAddInput} variant="contained" color="primary">
                    Adicionar
                </Button>
            </Stack>
        </Container>
    );
}
