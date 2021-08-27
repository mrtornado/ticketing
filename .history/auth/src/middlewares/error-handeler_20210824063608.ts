import { Request, Response, NextFunction } from "express-serve-static-core"
import { RequestValidationError } from '../errors/request-validator-error';
import { DatabaseConnectionError } from '../errors/database-connection-error';

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err instanceof RequestValidationError) {
        console.log('handeling error as request val err');
    }

    if (err instanceof DatabaseConnectionError) {
        console.log('handeling error as Database error');
    }

    res.status(400).send({
        message: err.message
    })
}