/**
 * Below are the routes for the entire app
 * All requests with the valid base path will enter from app.ts to here
 * The requests will then go to the validators, the validation error handler, and then the controller
 * Each endpoint will have a post, get, patch, and delete options
 * @module Routes
 */

const { auth, requiredScopes } = require('express-oauth2-jwt-bearer');
const express = require("express");
const routes = express.Router();
require('dotenv').config()

// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
const checkJwt = auth({
    audience: process.env.AUTH0_AUDIENCE,
    issuerBaseURL: `https://` + process.env.AUTH0_BASE_URL + '/',
});

const puzzleController = require('../controllers/puzzle.controller');

const { validatePuzzleBodyPOST, validatePuzzleParameters, validatePuzzleBodyPATCH } = require("../validationAndSanitation/puzzle.validationAndSanitation");
const { validationErrorHandler } = require('../validationAndSanitation/errorValidation');

routes.post("/puzzles/", checkJwt, validatePuzzleBodyPOST, validationErrorHandler, puzzleController.create);
routes.get("/puzzles/", checkJwt, validatePuzzleParameters, validationErrorHandler, puzzleController.search);
routes.patch("/puzzles/", checkJwt, validatePuzzleParameters, validatePuzzleBodyPATCH, validationErrorHandler, puzzleController.update);
routes.delete("/puzzles/", checkJwt, validatePuzzleParameters, validationErrorHandler, puzzleController.remove);

const userProfileController = require ('../controllers/userProfile.controller');

routes.post("/user/profiles", userProfileController.create);
routes.get("/user/profiles", userProfileController.search);
routes.patch("/user/profiles", userProfileController.update);
routes.delete("/user/profiles", userProfileController.remove);

// const userGameStatisticsController = require ('../controllers/userGameStatistics.controller');
//
// routes.post("/user/gameStatistics", userGameStatisticsController.create);
// routes.get("/user/gameStatistics", userGameStatisticsController.search);
// routes.patch("/user/gameStatistics", userGameStatisticsController.update);
// routes.delete("/user/gameStatistics", userGameStatisticsController.remove);
//
// const userGameSearchFiltersController = require ('../controllers/userGameSearchFilters.controller');
//
// routes.post("/user/gameSearchFilters", userGameSearchFiltersController.create);
// routes.get("/user/gameSearchFilters", userGameStatisticsController.search);
// routes.patch("/user/gameSearchFilters", userGameStatisticsController.update);
// routes.delete("/user/gameSearchFilters", userGameStatisticsController.remove);
//
const userActiveGamesController = require ('../controllers/userActiveGames.controller');

const { validateUserActiveGamesBodyPOST, validateUserActiveGamesParameters, validateUserActivePuzzlesBodyPATCH } = require("../validationAndSanitation/userActiveGames.validationAndSanitation");

routes.post("/user/activeGames", validateUserActiveGamesBodyPOST,  validationErrorHandler, userActiveGamesController.create);
routes.get("/user/activeGames", validateUserActiveGamesParameters, validationErrorHandler, userActiveGamesController.search);
routes.patch("/user/activeGames", validateUserActiveGamesParameters, validateUserActivePuzzlesBodyPATCH, validationErrorHandler, userActiveGamesController.update);
routes.delete("/user/activeGames", validateUserActiveGamesParameters, validationErrorHandler, userActiveGamesController.remove);
//
// const userGameHistoryController = require ('../controllers/userGameHistory.controller');
//
// routes.post("/user/gameHistory", userGameHistoryController.create);
// routes.get("/user/gameHistory", userGameHistoryController.search);
// routes.patch("/user/gameHistory", userGameHistoryController.update);
// routes.delete("/user/gameHistory", userGameHistoryController.remove);

export = routes;

