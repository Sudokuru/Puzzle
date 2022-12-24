// Code from here: https://dev.to/arealesramirez/how-to-use-error-handler-middleware-with-express-js-and-typescript-431n#:~:text=How%20to%20Write%20a%20Custom%20Error%20Handler%20in,file.%20...%204%204.%20Test%20Custom%20Handler%20
// https://dev.to/qbentil/how-to-write-custom-error-handler-middleware-in-expressjs-using-javascript-29j1

export enum CustomErrorEnum {
    DATABASE_IS_DOWN = "The service is not able to connect to the database",
    DATABASE_REQUEST_REJECTED = "The database rejected/failed your request",
    PUZZLE_NOT_FOUND = "Puzzle matching search criteria was not found",
    DEFAULT_400_ERROR = "Invalid Request",
    DEFAULT_404_ERROR = "Resource Not Found",
    DEFAULT_500_ERROR = "Service Unavailable",
    DEFAULT_ERROR = "Default Error"
}

export class CustomError {

    Error_Message!: CustomErrorEnum;
    Status!: number;

    constructor(message: CustomErrorEnum, status: number){
        this.Error_Message = message;
        this.Status = status;
    }
}

export function sanitizeErrorMessage(err){
    if (err instanceof CustomError){
        if (err.Status == 400){
            err.Error_Message = CustomErrorEnum.DEFAULT_400_ERROR;
        }
        if (err.Status == 404){
            err.Error_Message = CustomErrorEnum.DEFAULT_404_ERROR;
        }
        if (err.Status == 500){
            err.Error_Message = CustomErrorEnum.DEFAULT_500_ERROR;
        }
    }
    return err;
}