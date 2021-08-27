export class DatabaseConnectionError extands Error {
    constructor() {
        super();

        Object.setPrototypeOf(this, DatabaseConnectionError.prototype)
    }
}