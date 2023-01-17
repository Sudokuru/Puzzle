/**
 * This is the database service file
 * This is the last step in the process and where we get the query results
 * The functions here are GENERIC and are designed to work with all endpoints
 * More functions can be added if additional functionality is needed
 * The five functions are {@link connectToDB} {@link queryUpload},
 * {@link querySearchAND}, {@link queryUpdate}, and {@link queryDeleteAND}
 * Any errors will be caught by our try/catch block in our controller
 * @module DbService
 */

const database = require("../models/index");

let connectedToDB = false;

/**
 * This code allows us to connect to the database
 * Not sure how this works exactly, but it works
 */
async function connectToDB() {
    if (connectedToDB) {
        return;
    }
    await database.mongoose
        .connect(database.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log("Connected to the database!");
            connectedToDB = true;
        });
}

/**
 * This function uploads an array of objects to the database
 * ordered: false means that the function will attempt to upload all objects instead of stopping at failure
 * @param inputObject this is the input object which will be uploaded to the database
 * @param collection this is the puzzle schema which dictates the collection as well as the
 * Mongoose schema that will be used to upload our object
 */
async function queryUpload(inputObject, collection) {
    await module.exports.connectToDB();
    return await collection.insertMany(inputObject, { ordered: false });
}

/**
 * This function searches for objects with the $and operator
 * @param filterValues this provides the parameters with which we can search for puzzles to retrieve
 * @param collection this is the puzzle schema which dictates the collection as well as the
 * Mongoose schema that will be used to upload our object
 */
async function querySearchAND(filterValues, collection) {
    await module.exports.connectToDB();
    return await collection.find({ $and : filterValues });
}

/**
 * This function updates or patches an object or objects with the replaceCriteria
 * @param searchCriteria This is the criteria we use to select the objects we need to update
 * @param replaceCriteria This is the values that we will replace inside the object, leaving the remaining values untouched
 * @param collection this is the puzzle schema which dictates the collection as well as the
 * Mongoose schema that will be used to upload our object
 */
async function queryUpdate(searchCriteria, replaceCriteria, collection){
    await module.exports.connectToDB();
    return await collection.updateMany({ $and : searchCriteria }, { $set: replaceCriteria } );
}

/**
 * This function deletes an object or objects that match the filterValues
 * @param filterValues These are the values we will search by to delete objects
 * Value should only be an id or a unique value unless we want to do a bulk delete
 * @param collection this is the puzzle schema which dictates the collection as well as the
 * Mongoose schema that will be used to upload our object
 */
async function queryDeleteAND(filterValues, collection) {
    await module.exports.connectToDB();
    return await collection.deleteMany({ $and : filterValues });
}

export = { queryUpload: queryUpload, connectToDB, querySearchAND: querySearchAND, queryUpdate: queryUpdate, queryDeleteAND: queryDeleteAND };