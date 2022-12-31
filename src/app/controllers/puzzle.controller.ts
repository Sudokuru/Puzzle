import { sanitizeErrorMessage } from "../models/error.model";

const puzzleService = require('../services/puzzle.service');

async function create(req, res, next) {
    try {
        res.status(201).json(await puzzleService.create(req.body));

    } catch(err) {
        console.log(err);
        sanitizeErrorMessage(err);
        next(err);
    }
}

async function search(req, res, next) {
    try {
        res.json(await puzzleService.search(req.query));
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
        res.json(await puzzleService.remove(req.query));
    } catch(err) {
        console.log(err);
        sanitizeErrorMessage(err);
        next(err);
    }
}

module.exports = {create: create, search: search, update: update, remove: remove }