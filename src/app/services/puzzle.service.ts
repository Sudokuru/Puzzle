import {CustomError, CustomErrorEnum} from "../models/error.model";

const dataBase = require ('./db.service');

const PuzzleModel = require("../models/db.puzzle.model");

async function puzzleCreateService(puzzles) {
    return await dataBase.queryUpload(puzzles, PuzzleModel);
}

async function puzzleSearchService(puzzles) {
    const filterValues = [];

    if (Object.keys(puzzles).length === 0){
        filterValues.push({});
    }
    else{
        filterValues.push(puzzles);
    }
    console.log("PARAMS: " + JSON.stringify(puzzles));
    let res = await dataBase.querySearchAND(filterValues, PuzzleModel);

    console.log("RESULT: " + res);

    if (res.length == 0){
        throw new CustomError(CustomErrorEnum.PUZZLE_NOT_FOUND, 404);
    }
    return res;
}

async function puzzleUpdateService(puzzles) {
    return await dataBase.queryUpdate(puzzles, PuzzleModel);
}

async function puzzleRemoveService(puzzles) {
    const filterValues = [];

    if (Object.keys(puzzles).length === 0){
        filterValues.push({});
    }
    filterValues.push(puzzles);
    let res = await dataBase.queryDeleteAND(filterValues, PuzzleModel);

    if (res.length == 0){
        throw new CustomError(CustomErrorEnum.PUZZLE_NOT_FOUND, 404);
    }
    return res;
}

module.exports = { createPuzzle: puzzleCreateService, searchPuzzle: puzzleSearchService, updatePuzzle: puzzleUpdateService, removePuzzle: puzzleRemoveService };

