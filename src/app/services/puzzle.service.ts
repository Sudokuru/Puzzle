import {CustomError, CustomErrorEnum} from "../models/error.model";

const dataBase = require ('./db.service');

const PuzzleModel = require("../models/db.puzzle.model");

async function puzzleCreateService(puzzles) {
    return await dataBase.queryUpload(puzzles, PuzzleModel);
}

async function puzzleSearchService(puzzles) {
    let res = await dataBase.querySearchAND(filterInputQuery(puzzles), PuzzleModel);

    if (res.length == 0){
        throw new CustomError(CustomErrorEnum.PUZZLE_NOT_FOUND, 404);
    }
    return res;
}

async function puzzleUpdateService(bodyData, queryData) {
    return await dataBase.queryUpdate(filterInputQuery(queryData), bodyData, PuzzleModel);
}

async function puzzleRemoveService(puzzles) {
    let res = await dataBase.queryDeleteAND(filterInputQuery(puzzles), PuzzleModel);

    if (res.length == 0){
        throw new CustomError(CustomErrorEnum.PUZZLE_NOT_FOUND, 404);
    }
    return res;
}

function filterInputQuery(puzzles){
    const filterValues = [];
    if (Object.keys(puzzles).length === 0){
        filterValues.push({});
    }
    else{
        if ('strategies' in puzzles){
            filterValues.push({ 'strategies': { $in : puzzles['strategies'] } });
            delete puzzles.strategies;
        }
        if ('drillStrategies' in puzzles){
            filterValues.push({ 'drillStrategies': { $in : puzzles['drillStrategies'] } });
            delete puzzles.drillStrategies;
        }
        if (Object.keys(puzzles).length !== 0){
            filterValues.push(puzzles);
        }
    }

    filterValues.push(puzzles);
    return filterValues;
}

module.exports = { createPuzzle: puzzleCreateService, searchPuzzle: puzzleSearchService, updatePuzzle: puzzleUpdateService, removePuzzle: puzzleRemoveService };

