/**
 * This file is for storing any environment variables we need.
 * Especially if we need to override the values depending on what environment we are currently in
 * Currently this file stores the URL for the Mongo database
 */

let jsonString = require('../../../Variables.json');
module.exports = {
    url: jsonString.MONGO_URL
};