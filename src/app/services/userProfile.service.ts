const userInfoModel = require("../models/db.userInfo.model");

async function userProfileCreate(puzzles) {
    return await dataBase.queryUpload(puzzles, userInfoModel);
}

async function userProfileSearch(puzzles) {
    const filterValues = [];

    if (Object.keys(puzzles).length === 0){
        filterValues.push({});
    }
    return await dataBase.querySearchAND(filterValues, userInfoModel);
}

async function userProfileRemove(puzzles) {
    const filterValues = [];

    if (Object.keys(puzzles).length === 0){
        filterValues.push({});
    }
    return await dataBase.queryDeleteAND(filterValues, userInfoModel);
}

module.exports = { create: userProfileCreate, search: userProfileSearch, remove: userProfileRemove }