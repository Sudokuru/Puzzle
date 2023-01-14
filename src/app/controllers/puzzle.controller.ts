import {matchedData} from "express-validator";

const puzzleService = require('../services/puzzle.service');

async function createPuzzle(req, res, next) {

    const allData = Object.values(matchedData(req, { locations: ['body'] }));
    // this is needed because the last element in matchedData array is the original request for some reason.
    allData.pop();
    try {
        // override successful completion code of 200 to 201 for successful object creation
        res.status(201).json(await puzzleService.createPuzzle(allData));
    } catch(err) {
        next(err);
    }
}

async function searchPuzzle(req, res, next) {
    try {
        res.json(await puzzleService.searchPuzzle(req.query));
    } catch(err) {
        next(err);
    }
}

async function updatePuzzle(req, res, next) {
    try {

    } catch(err) {
        next(err);
    }
}

async function removePuzzle(req, res, next) {
    try {
        res.json(await puzzleService.removePuzzle(req.query));
    } catch(err) {
        next(err);
    }
}

module.exports = {create: createPuzzle, search: searchPuzzle, update: updatePuzzle, remove: removePuzzle }