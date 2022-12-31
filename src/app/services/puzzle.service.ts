import {CustomError, CustomErrorEnum} from "../models/error.model";

const dataBase = require ('./db.service');

const PuzzleModel = require("../models/db.puzzle.model");

async function puzzleCreate(puzzles) {
    return await dataBase.queryUpload(puzzles, PuzzleModel);
}

async function puzzleSearch(puzzles) {
    const filterValues = [];

    if (Object.keys(puzzles).length === 0){
        filterValues.push({});
    }
    let res = await dataBase.querySearchAND(filterValues, PuzzleModel);

    if (res.length == 0){
        throw new CustomError(CustomErrorEnum.PUZZLE_NOT_FOUND, 404);
    }
    return res;
}

async function puzzleRemove(puzzles) {
    const filterValues = [];

    if (Object.keys(puzzles).length === 0){
        filterValues.push({});
    }
    let res = await dataBase.queryDeleteAND(filterValues, PuzzleModel);

    if (res.length == 0){
        throw new CustomError(CustomErrorEnum.PUZZLE_NOT_FOUND, 404);
    }
    return res;
}

module.exports = { create: puzzleCreate, search: puzzleSearch, remove: puzzleRemove };

