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
    return await dataBase.querySearchAND(filterValues, PuzzleModel);
}

async function puzzleRemove(puzzles) {
    const filterValues = [];

    if (Object.keys(puzzles).length === 0){
        filterValues.push({});
    }
    return await dataBase.queryDeleteAND(filterValues, PuzzleModel);
}

module.exports = { create: puzzleCreate, search: puzzleSearch, remove: puzzleRemove };

