import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import expressWinston from "express-winston";
import winston from "winston";
import RecipeController from "./controllers/RecipeController";

const App = express();

App.use(cors());
App.use(bodyParser.json());

App.use(expressWinston.logger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.json()
    ),
    meta: false,
    msg: "HTTP {{req.method}} {{res.statusCode}} {{req.url}} {{res.responseTime}}ms",
    expressFormat: false,
    colorize: false
}));

App.use(new RecipeController().router);

App.use(expressWinston.errorLogger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.json()
    )
}));

export default App;
