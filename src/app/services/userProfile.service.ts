import {CustomError, CustomErrorEnum} from "../models/error.model";

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
    let res = await userProfileDataBase.querySearchAND(filterValues, userInfoModel.UserInfo);

    if (res.length == 0){
        throw new CustomError(CustomErrorEnum.USER_PROFILE_NOT_FOUND, 404);
    }
    return res;
}

async function userProfileRemove(puzzles) {
    const filterValues = [];

    if (Object.keys(puzzles).length === 0){
        filterValues.push({});
    }
    let res = await userProfileDataBase.queryDeleteAND(filterValues, userInfoModel.UserInfo);

    if (res.length == 0){
        throw new CustomError(CustomErrorEnum.USER_PROFILE_NOT_FOUND, 404);
    }
    return res;
}

module.exports = { create: userProfileCreate, search: userProfileSearch, remove: userProfileRemove }