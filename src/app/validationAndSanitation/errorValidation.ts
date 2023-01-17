/**
 * This file detects any errors in the validationResult and sends them to the next location
 * Our custom error handler will then throw the error
 * If there is no error we continue with our code execution and move on to the controller
 * @module ErrorValidation
 */

import {validationResult} from "express-validator";
import {CustomError, CustomErrorEnum} from "../models/error.model";

const validate = (req, res, next) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        return next()
    }
    else {
        console.log(errors);
        next(new CustomError(CustomErrorEnum.INVALID_SYNTAX, 400));
        return;
    }
};

export = { validationErrorHandler: validate };