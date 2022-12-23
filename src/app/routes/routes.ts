const express = require("express");
const routes = express.Router();

const puzzleController = require('../controllers/puzzle.controller');

routes.post("/puzzles/", puzzleController.create);
routes.get("/puzzles/", puzzleController.search);
routes.put("/puzzles/", puzzleController.update);
routes.delete("/puzzles/", puzzleController.remove);

module.exports = routes;

