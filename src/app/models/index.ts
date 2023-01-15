/**
 * This is the model for our database
 * This file could be integrated with the db.service file at some later point
 * or stay here as its own seperate file
 * This stores the Mongo database url as well as the mongoose instance for reference in db.service
 */

const dbConfig = require("../config/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {
    mongoose: undefined,
    url: undefined,
};
db.mongoose = mongoose;
db.url = dbConfig.url;

module.exports = db;