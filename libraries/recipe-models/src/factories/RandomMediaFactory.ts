import { faker } from "@faker-js/faker";
import { MediaRegister, MediaTypeRegister } from "../models/Media";

export function RandomMediaTypeFactory(): MediaTypeRegister {
    return {
        cod: faker.mersenne.rand(),
        name: "Banner"
    };
}

export function RandomMediaFactory(cod_recipe: number): MediaRegister {
    return {
        cod: faker.mersenne.rand(),
        cod_recipe,
        source: faker.image.food(640, 480, true),
        type: RandomMediaTypeFactory(),
    };
}
