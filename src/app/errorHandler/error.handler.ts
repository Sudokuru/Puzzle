// code from here: https://dev.to/arealesramirez/how-to-use-error-handler-middleware-with-express-js-and-typescript-431n#:~:text=How%20to%20Write%20a%20Custom%20Error%20Handler%20in,file.%20...%204%204.%20Test%20Custom%20Handler%20

import {NextFunction, Request, Response} from "express";
import {CustomError, CustomErrorEnum} from "../models/error.model";

function handleError(
    err: TypeError | CustomError,
    req: Request,
    res: Response,
    next: NextFunction
) {

    let customError = null;

    // logging the error if is a CustomError
    if (err instanceof CustomError){
        console.log(err);
    }

    // If it is not a custom error, log error and convert it to a custom error, then log the custom error.
    if (!(err instanceof CustomError)) {
        console.log(err);
        if (err.name == "MongoBulkWriteError"){
            err = new CustomError(CustomErrorEnum.MONGO_BULK_WRITE_ERROR, 400);
        }
        else {
            console.log(err.name);
            console.log(err.message);
            err = new CustomError(CustomErrorEnum.UNKNOWN_ERROR, 500);
        }
        console.log(err);
    }

    // This sanitizes the error messages to the default error message.
    if (err instanceof CustomError){
        if (err.Status == 400){
            customError = new CustomError(CustomErrorEnum.DEFAULT_400_ERROR, 400);
        }

        if (err.Status == 404){
            new CustomError(CustomErrorEnum.DEFAULT_404_ERROR, 404);
        }

        if (err.Status == 500 && err.Error_Message != CustomErrorEnum.UNKNOWN_ERROR){
            new CustomError(CustomErrorEnum.DEFAULT_500_ERROR, 500);
        }
    }

    res.status((customError as CustomError).Status).send(customError);
}

export default handleError;