// code from here: https://dev.to/arealesramirez/how-to-use-error-handler-middleware-with-express-js-and-typescript-431n#:~:text=How%20to%20Write%20a%20Custom%20Error%20Handler%20in,file.%20...%204%204.%20Test%20Custom%20Handler%20

import {NextFunction, Request, Response} from "express";
import {CustomError, CustomErrorEnum} from "../models/error.model";

function handleError(
    err: TypeError | CustomError,
    req: Request,
    res: Response,
    next: NextFunction
) {
    let customError = err;

    // not really sure what this does
    res.status((customError as CustomError).Status).send(customError);

    if (!(err instanceof CustomError)) {
        new CustomError(CustomErrorEnum.DEFAULT_ERROR, 500);
    }
}

export default handleError;