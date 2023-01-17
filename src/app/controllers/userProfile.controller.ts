/**
 * @module UserProfileController
 */

const userProfileService = require('../services/userProfile.service');

async function createUserProfile(req, res, next) {
    try {
        res.status(201).json(await userProfileService.createUserProfile(req.body));

    } catch(err) {
        next(err);
    }
}

async function searchUserProfile(req, res, next) {
    try {
        res.json(await userProfileService.searchUserProfile(req.query));
    } catch(err) {
        next(err);
    }
}

async function updateUserProfile(req, res, next) {
    try {

    } catch(err) {
        next(err);
    }
}

async function removeUserProfile(req, res, next) {
    try {
        res.json(await userProfileService.removeUserProfile(req.query));
    } catch(err) {
        next(err);
    }
}

export = {create: createUserProfile, search: searchUserProfile, update: updateUserProfile, remove: removeUserProfile }