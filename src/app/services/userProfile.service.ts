const userProfileDataBase = require ('./db.service');
const userInfoModel = require("../models/db.userInfo.model");

async function userProfileCreate(puzzles) {
    return await userProfileDataBase.queryUpload(puzzles, userInfoModel.UserInfo);
}

async function userProfileSearch(puzzles) {
    const filterValues = [];

    if (Object.keys(puzzles).length === 0){
        filterValues.push({});
    }
    return await userProfileDataBase.querySearchAND(filterValues, userInfoModel.UserInfo);
}

async function userProfileRemove(puzzles) {
    const filterValues = [];

    if (Object.keys(puzzles).length === 0){
        filterValues.push({});
    }
    return await userProfileDataBase.queryDeleteAND(filterValues, userInfoModel.UserInfo);
}

module.exports = { create: userProfileCreate, search: userProfileSearch, remove: userProfileRemove }