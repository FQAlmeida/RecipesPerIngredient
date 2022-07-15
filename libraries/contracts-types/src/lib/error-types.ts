export type ErrorMessage = {
    statusCode: number,
    message: string
}

export function isInstanceOfError(object: any): object is ErrorMessage {
    return "statusCode" in object && "message" in object
}