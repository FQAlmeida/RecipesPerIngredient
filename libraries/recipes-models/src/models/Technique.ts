import {Register} from "./Register";

export interface Technique {
    name: string;
    description: string;
}

export interface TechniqueRegister extends Technique, Register { }
