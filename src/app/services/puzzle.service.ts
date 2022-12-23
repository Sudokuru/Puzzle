const dataBase = require ('./db.service');

async function Create(puzzles) {
    const result = await dataBase.upload(puzzles);
    return result;
}

module.exports = { create: Create }

