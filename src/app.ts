import errorHandler from "./app/errorHandler/error.handler";

const serverless = require('serverless-http');
const expressApp = require('express');
const app = expressApp();
const port = process.env.APP_PORT || 3000;

// Runs on local port if ran using node app.js local
let local:boolean = false;
process.argv.forEach(function(val, index, array) {
    if (index === 2 && val === 'local') {
        local = true;
    }
});

app.use(expressApp.urlencoded({ extended: true }));
app.use(expressApp.json());

const baseRoute: string = "/api/v1";

const globalRouter = require('./app/routes/routes');
app.use(baseRoute, globalRouter);

app.use(errorHandler);

if (local) {
    app.listen(port, () => console.log(`Listening on: ${port}`));
}
else {
    module.exports.handler = serverless(app);
}