import { Register } from "./Register";

export enum MediaTypeEnum {

}

export interface MediaType {
    name: MediaTypeEnum | string;
}
export type MediaTypeRegister = MediaType & Register

export interface Media {
    source: string;
}
export type MediaRegister = Media & Register
