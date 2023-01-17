/**
 * This file is for storing any environment variables we need.
 * Especially if we need to override the values depending on what environment we are currently in
 * Currently this file stores the URL for the Mongo database
 * @module DbConfig
 */

let jsonString = require('../../../Variables.json');
export = { url: jsonString.MONGO_URL };