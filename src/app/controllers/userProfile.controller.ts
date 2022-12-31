import { sanitizeErrorMessage } from "../models/error.model";

const userProfileService = require('../services/userProfile.service');

async function create(req, res, next) {
    try {
        res.status(201).json(await userProfileService.create(req.body));

    } catch(err) {
        console.log(err);
        sanitizeErrorMessage(err);
        next(err);
    }
}

async function search(req, res, next) {
    try {
        res.json(await userProfileService.search(req.query));
    } catch(err) {
        console.log(err);
        sanitizeErrorMessage(err);
        next(err);
    }
}

async function update(req, res, next) {
    try {

    } catch(err) {
        console.log(err);
        sanitizeErrorMessage(err);
        next(err);
    }
}

async function remove(req, res, next) {
    try {
        res.json(await userProfileService.remove(req.query));
    } catch(err) {
        console.log(err);
        sanitizeErrorMessage(err);
        next(err);
    }
}

module.exports = {create: create, search: search, update: update, remove: remove }