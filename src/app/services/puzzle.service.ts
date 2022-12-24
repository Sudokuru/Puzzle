const dataBase = require ('./db.service');

async function Create(puzzles) {
    return await dataBase.upload(puzzles);
}

async function Search(puzzles) {
    const filterValues = [];

    if (Object.keys(puzzles).length === 0){
        filterValues.push({});
    }
    return await dataBase.querySearchAND(filterValues);
}

async function Remove(puzzles) {
    const filterValues = [];

    if (Object.keys(puzzles).length === 0){
        filterValues.push({});
    }
    return await dataBase.queryDeleteAND(filterValues);
}

module.exports = { create: Create, search: Search, remove: Remove }

