import { faker } from "@faker-js/faker";
import { MediaRegister, MediaTypeRegister } from "../models/Media";

export function RandomMediaTypeFactory(): MediaTypeRegister {
    return {
        cod: faker.mersenne.rand(),
        name: "Banner"
    };
}

export function RandomMediaFactory(): MediaRegister {
    return {
        cod: faker.mersenne.rand(),
        source: faker.image.food(640, 480, true),
    };
}

export function RandomMediasFactory(qtd_medias: number): MediaRegister[] {
    const medias = Array<MediaRegister>(qtd_medias);
    for (let index = 0; index < medias.length; index++) {
        medias[index] = RandomMediaFactory();
    }
    return medias;
}
