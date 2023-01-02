import {validationResult} from "express-validator";
import {CustomError, CustomErrorEnum} from "../models/error.model";

const puzzleService = require('../services/puzzle.service');

async function createPuzzle(req, res, next) {

    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors);
            throw new CustomError(CustomErrorEnum.INVALID_SYNTAX, 400);
        }
        res.status(201).json(await puzzleService.createPuzzle(req.body));
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