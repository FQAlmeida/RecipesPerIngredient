import { Register } from "./Register";
import { Technique, TechniqueRegister } from "./Technique";

export interface Step {
    technique?: Technique;
    description: string;
    depends_on?: number,
}

export interface StepRegister extends Step, Register {
    technique?: TechniqueRegister;
}
