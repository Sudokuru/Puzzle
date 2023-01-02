// Code from here: https://dev.to/arealesramirez/how-to-use-error-handler-middleware-with-express-js-and-typescript-431n#:~:text=How%20to%20Write%20a%20Custom%20Error%20Handler%20in,file.%20...%204%204.%20Test%20Custom%20Handler%20
// https://dev.to/qbentil/how-to-write-custom-error-handler-middleware-in-expressjs-using-javascript-29j1

export enum CustomErrorEnum {
    SERVER_SELECTION_ERROR = "The service is not able to connect to the database",
    DATABASE_REQUEST_REJECTED = "The database rejected/failed your request",
    INVALID_PATH = "The path provided is invalid",
    INVALID_SYNTAX = "The request has invalid syntax",
    MONGO_BULK_WRITE_ERROR = "There was an error writing to the database",
    PUZZLE_NOT_FOUND = "Puzzle matching search criteria was not found",
    USER_PROFILE_NOT_FOUND = "User profile matching search criteria was not found",
    DEFAULT_400_ERROR = "Invalid Request",
    DEFAULT_401_ERROR = "Invalid Permission",
    DEFAULT_404_ERROR = "Resource Not Found",
    DEFAULT_500_ERROR = "Service Unavailable",
    UNKNOWN_ERROR = "Unknown Error"
}

export class CustomError {

    Error_Message!: CustomErrorEnum;
    Status!: number;

    constructor(message: CustomErrorEnum, status: number){
        this.Error_Message = message;
        this.Status = status;
    }
}