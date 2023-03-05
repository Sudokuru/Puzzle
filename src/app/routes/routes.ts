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
require('dotenv').config();

// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
const checkJwt = auth({
    audience: process.env.AUTH0_AUDIENCE,
    issuerBaseURL: `https://` + process.env.AUTH0_BASE_URL + '/',
});

const puzzleController = require('../controllers/puzzle.controller');

const { validatePuzzleBodyPOST, validatePuzzleParameters, validatePuzzleBodyPATCH } = require("../validationAndSanitation/puzzle.validationAndSanitation");
const { validationErrorHandler } = require('../validationAndSanitation/errorValidation');

const postCheckScopes = requiredScopes('create:sudoku_puzzle');
const patchCheckScopes = requiredScopes('update:sudoku_puzzle');
const deleteCheckScopes = requiredScopes('delete:sudoku_puzzle');

routes.post("/puzzles/", checkJwt, postCheckScopes, validatePuzzleBodyPOST, validationErrorHandler, puzzleController.create);
routes.get("/puzzles/", checkJwt, validatePuzzleParameters, validationErrorHandler, puzzleController.search);
routes.patch("/puzzles/", checkJwt, patchCheckScopes, validatePuzzleParameters, validatePuzzleBodyPATCH, validationErrorHandler, puzzleController.update);
routes.delete("/puzzles/", checkJwt, deleteCheckScopes, validatePuzzleParameters, validationErrorHandler, puzzleController.remove);

export = routes;

