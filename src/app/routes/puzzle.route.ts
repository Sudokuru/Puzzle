const puzzleRoute = expressApp.Router();

const puzzleController = require('../controllers/puzzle.controller');

puzzleRoute.post("/", puzzleController.create);
puzzleRoute.get("/", puzzleController.search);
puzzleRoute.put("/", puzzleController.patch);
puzzleRoute.delete("/", puzzleController.remove);

module.exports = puzzleRoute;

