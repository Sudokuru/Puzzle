import { sanitizeErrorMessage} from "../models/error.model";

const puzzleService = require('../services/puzzle.service');
const Puzzle = require('../models/db.model');

async function create(req, res, next) {
    try {
        res.json(await puzzleService.create(res.body));

    } catch(err) {
        console.log(err);
        sanitizeErrorMessage(err);
        next(err);
    }
}

async function search(req, res, next) {
    try {

    } catch(err) {
        console.log(err);
        sanitizeErrorMessage(err);
        next(err);
    }
}

async function update(req, res, next) {
    try {

    } catch(err) {
        console.log(err);
        sanitizeErrorMessage(err);
        next(err);
    }
}

async function remove(req, res, next) {
    try {

    } catch(err) {
        console.log(err);
        sanitizeErrorMessage(err);
        next(err);
    }
}

module.exports = {create, search, update, remove }