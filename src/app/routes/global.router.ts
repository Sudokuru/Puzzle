const expressApp = require("express");

const globalRouter = expressApp.Router();
globalRouter.get('/info', (req, res) => {
    res.send({ application: 'sudokuru-api', version: '1' });
});

const puzzleRouter = require("puzzle.route");
globalRouter.use('/puzzle', puzzleRouter);

module.exports = globalRouter;

