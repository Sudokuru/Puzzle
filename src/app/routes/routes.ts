/**
 * Below are the routes for the entire app
 * All requests with the valid base path will enter from app.ts to here
 * The requests will then go to the validators, the validation error handler, and then the controller
 * Each endpoint will have a post, get, patch, and delete options
 * @module Routes
 */

const express = require("express");
const routes = express.Router();

const puzzleController = require('../controllers/puzzle.controller');

const { validatePuzzleBodyPOST, validatePuzzleParameters, validatePuzzleBodyPATCH } = require("../validationAndSanitation/puzzle.validationAndSanitation");
const { validationErrorHandler } = require('../validationAndSanitation/errorValidation');

routes.post("/puzzles/", validatePuzzleBodyPOST, validationErrorHandler, puzzleController.create);
routes.get("/puzzles/", validatePuzzleParameters, validationErrorHandler, puzzleController.search);
routes.patch("/puzzles/", validatePuzzleParameters, validatePuzzleBodyPATCH, validationErrorHandler, puzzleController.update);
routes.delete("/puzzles/", validatePuzzleParameters, validationErrorHandler, puzzleController.remove);

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
// const userInProgressGamesController = require ('../controllers/userInProgressGames.controller');
//
// routes.post("/user/inProgressGames", userInProgressGamesController.create);
// routes.get("/user/inProgressGames", userInProgressGamesController.search);
// routes.patch("/user/inProgressGames", userInProgressGamesController.update);
// routes.delete("/user/inProgressGames", userInProgressGamesController.remove);
//
// const userGameHistoryController = require ('../controllers/userGameHistory.controller');
//
// routes.post("/user/gameHistory", userGameHistoryController.create);
// routes.get("/user/gameHistory", userGameHistoryController.search);
// routes.patch("/user/gameHistory", userGameHistoryController.update);
// routes.delete("/user/gameHistory", userGameHistoryController.remove);

export = routes;

