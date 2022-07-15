import {Register} from "./Register";

export interface Technique {
    name: string;
    description: string;
}

export type TechniqueRegister = Technique & Register
