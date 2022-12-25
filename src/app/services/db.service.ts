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

//const PuzzleModel = require("../models/db.puzzle.model");

// Upload puzzles to database
async function queryUpload(puzzles, collection) {
    await module.exports.connectToDB();
    try{
        return await collection.insertMany(puzzles, { ordered: false });
    } catch(err){
        console.log(err)
        throw new CustomError(CustomErrorEnum.DATABASE_REQUEST_REJECTED, 500);
    }
}

async function querySearchAND(filterValues, collection) {
    let res;
    await module.exports.connectToDB();
    try{
        // await means that this async function won't return until it finishes
        res = await collection.find({ $and : filterValues });
    } catch (err){
        console.log(err);
        throw new CustomError(CustomErrorEnum.DATABASE_REQUEST_REJECTED, 500);
    }
    if (res.length == 0){
        throw new CustomError(CustomErrorEnum.PUZZLE_NOT_FOUND, 404);
    }
    return res;
}

async function queryDeleteAND(filterValues, collection) {
    let res;
    await module.exports.connectToDB();
    try{
        // await means that this async function won't return until it finishes
        res = await collection.deleteMany({ $and : filterValues });
    } catch (err){
        console.log(err);
        throw new CustomError(CustomErrorEnum.DATABASE_REQUEST_REJECTED, 500);
    }
    if (res.length == 0){
        throw new CustomError(CustomErrorEnum.PUZZLE_NOT_FOUND, 404);
    }
    return res;
}

module.exports = { queryUpload: queryUpload, connectToDB, querySearchAND: querySearchAND, queryDeleteAND: queryDeleteAND };