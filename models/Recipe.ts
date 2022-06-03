interface Register {
    cod: number;
}

export enum DifficultLevel {
    EASY,
    MEDIUM,
    HARD
}

export interface Recipe extends Register {
    name: string;
    difficultLevel: DifficultLevel;
    serves_adults: number
}