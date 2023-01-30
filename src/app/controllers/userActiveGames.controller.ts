/**
 * This is the controller file for the puzzle endpoint
 * This file is called by the router file and calls the service file
 * There are four main functions {@link createPuzzle}, {@link searchPuzzle},
 * {@link updatePuzzle}, and {@link removeUserActiveGame}
 * The main purpose of the controller is to make sure that only validated and sanitized data
 * moves on to the service function
 * @module UserActiveGamesController
 */

import {matchedData} from "express-validator";
const userActiveGamesService = require('../services/userActiveGames.service');

/**
 * Returns 201 if userActiveGameService is successful
 * Otherwise catches error and sends to our errorHandler
 * Takes sanitized input and sends it to userActiveGamesService
 * @param req This is the request object
 * @param res This is the response object
 * @param next This takes us to the errorHandler if request fails
 */
async function createUserActiveGame(req, res, next) {

    const allData = Object.values(matchedData(req, { locations: ['body'] }));
    console.log(allData.values());
    // this is needed because the last element in matchedData array is the original request for some reason.
    // I believe this is a bug with express-validator relating to bodies that have arrays
    console.log(allData);
    console.log("Hello!" + allData);
    console.log(Object.keys(allData.keys()));
    try {
        // override successful completion code of 200 to 201 for successful object creation
        res.status(201).json(await userActiveGamesService.createUserActiveGames(allData));
    } catch(err) {
        next(err);
    }
}

/**
 * Returns 200 if userActiveGameService is successful
 * Otherwise catches error and sends to our errorHandler
 * Takes sanitized input and sends it to userActiveGamesService
 * @param req This is the request object
 * @param res This is the response object
 * @param next This takes us to the errorHandler if request fails
 */
async function searchUserActiveGame(req, res, next) {

    const allData = matchedData(req, { locations: ['query'] });
    try {
        res.json(await userActiveGamesService.userActiveGamesPuzzle(allData));
    } catch(err) {
        next(err);
    }
}

/**
 * Returns 200 if userActiveGamesService is successful
 * Otherwise catches error and sends to our errorHandler
 * Takes sanitized input and sends it to userActiveGamesService
 * @param req This is the request object
 * @param res This is the response object
 * @param next This takes us to the errorHandler if request fails
 */
async function updateUserActiveGame(req, res, next) {

    const queryData = matchedData(req, { locations: ['query'] });
    const bodyData = matchedData(req, { locations: ['body'] });
    try {
        res.json(await userActiveGamesService.updateUserActiveGames(bodyData, queryData));
    } catch(err) {
        next(err);
    }
}

/**
 * Returns 200 if userActiveGameService is successful
 * Otherwise catches error and sends to our errorHandler
 * Takes sanitized input and sends it to userActiveGamesService
 * @param req This is the request object
 * @param res This is the response object
 * @param next This takes us to the errorHandler if request fails
 */
async function removeUserActiveGame(req, res, next) {

    const allData = matchedData(req, { locations: ['query'] });
    try {
        res.json(await userActiveGamesService.removeUserActiveGames(allData));
    } catch(err) {
        next(err);
    }
}

export = {create: createUserActiveGame, search: searchUserActiveGame, update: updateUserActiveGame, remove: removeUserActiveGame }