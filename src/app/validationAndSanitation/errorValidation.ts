import {validationResult} from "express-validator";
import {CustomError, CustomErrorEnum} from "../models/error.model";

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors);
        next(new CustomError(CustomErrorEnum.INVALID_SYNTAX, 400));
        return;
    }
};

module.exports = { validate };