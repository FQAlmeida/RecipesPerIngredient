import { Register } from "./Register";

export enum MediaTypeEnum {

}

export interface MediaType {
    name: MediaTypeEnum | string;
}
export interface MediaTypeRegister extends MediaType, Register { }

export interface Media {
    source: string;
}
export interface MediaRegister extends Media, Register { }
