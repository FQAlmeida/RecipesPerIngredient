import {Register} from "./Register";

export enum MediaTypeEnum {

}

export interface MediaType extends Register {
    name: MediaTypeEnum | string;
}
export interface Media extends Register {
    source: string;
    type: MediaType;
}