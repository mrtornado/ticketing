export abstract class CustomError extends Error {
    abstract statusCode: number

    constructor() {
        super()

        Object.setPrototypeOf(this, CustomError.prototype)
    }

    abstract serializeErrors(): { m: string, field?: string }
}