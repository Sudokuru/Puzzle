/**
 * code from here: https://dev.to/arealesramirez/how-to-use-error-handler-middleware-with-express-js-and-typescript-431n#:~:text=How%20to%20Write%20a%20Custom%20Error%20Handler%20in,file.%20...%204%204.%20Test%20Custom%20Handler%20
 * @module ErrorHandler
 */
import {NextFunction, Request, Response} from "express";
import {CustomError, CustomErrorEnum} from "../models/error.model";

function handleError(
    err: TypeError | CustomError,
    req: Request,
    res: Response,
    next: NextFunction
) {

    let customError: CustomError = null;

    // If it is not a custom error, log error and convert it to a custom error, then log the custom error.
    if (!(err instanceof CustomError)) {
        console.log(err);
        if (err.name == "MongoBulkWriteError"){
            err = new CustomError(CustomErrorEnum.MONGO_BULK_WRITE_ERROR, 400);
        }
        else if (err.name == "MongooseServerSelectionError"){
            err = new CustomError(CustomErrorEnum.SERVER_SELECTION_ERROR, 500);
        }
        else {
            // Debug messages to identify unknown error.
            console.log("Error Name: " + err.name);
            console.log("Error Message: " + err.message);
            // This error does not need to go through sanitation. Therefore, we can set it directly to customError.
            customError = new CustomError(CustomErrorEnum.UNKNOWN_ERROR, 500);
        }
    }

    // This sanitizes the error messages to the default error message and logs previous error message.
    if (err instanceof CustomError){
        console.log(err);
        if (err.Status == 400){
            customError = new CustomError(CustomErrorEnum.DEFAULT_400_ERROR, 400);
        }

        if (err.Status == 401){
            customError = new CustomError(CustomErrorEnum.DEFAULT_401_ERROR, 401);
        }

        if (err.Status == 404){
            customError = new CustomError(CustomErrorEnum.DEFAULT_404_ERROR, 404);
        }

        if (err.Status == 500){
            customError = new CustomError(CustomErrorEnum.DEFAULT_500_ERROR, 500);
        }
    }

    // set the result status and send the error message.
    res.status((customError as CustomError).Status).send(customError);
}

export default handleError;