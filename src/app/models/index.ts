const dbConfig = require("../config/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {
    mongoose: undefined,
    url: undefined,
    puzzle: undefined
};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.puzzle = require("./db.puzzle.model")(mongoose);

module.exports = db;