// connect to database
import {CustomError, CustomErrorEnum} from "../models/error.model";

const database = require("../models/index");

console.log(database.url);

let connectedToDB = false;

async function connectToDB() {
    if (connectedToDB) {
        return;
    }
    try {
        await database.mongoose
            .connect(database.url, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }).then(() => {
                console.log("Connected to the database!");
                connectedToDB = true;
            });
    } catch(err){
        throw new CustomError(CustomErrorEnum.DATABASE_IS_DOWN, 500);
    }
}

const PuzzleModel = require("../models/db.model");

// Upload book to database
async function upload(book) {
    await module.exports.connectToDB();
    try{
        return await PuzzleModel.insertMany(book, { ordered: false });
    } catch(err){
        console.log(err)
        throw new CustomError(CustomErrorEnum.DATABASE_REQUEST_REJECTED, 500);
    }
}

module.exports = { upload, connectToDB };