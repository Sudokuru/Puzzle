const dataBase = require ('./db.service');

const PuzzleModel = require("../models/db.puzzle.model");

async function Create(puzzles) {
    return await dataBase.upload(puzzles, PuzzleModel);
}

async function Search(puzzles) {
    const filterValues = [];

    if (Object.keys(puzzles).length === 0){
        filterValues.push({});
    }
    return await dataBase.querySearchAND(filterValues, PuzzleModel);
}

async function Remove(puzzles) {
    const filterValues = [];

    if (Object.keys(puzzles).length === 0){
        filterValues.push({});
    }
    return await dataBase.queryDeleteAND(filterValues, PuzzleModel);
}

module.exports = { create: Create, search: Search, remove: Remove }

