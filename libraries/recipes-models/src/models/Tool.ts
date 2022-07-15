import { Register } from "./Register";

export interface Tool {
    name: string;
    details?: string;
    is_required: boolean;
}

export type ToolRegister = Tool & Register
