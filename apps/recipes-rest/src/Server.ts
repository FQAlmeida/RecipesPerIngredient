import express from "express";
import bodyParser from "./middlewares/BodyParser";
import cors from "./middlewares/Cors";
import RecipeController from "./controllers/RecipeController";
import { winstonErrorLogger, winstonLogger } from "./middlewares/Winston";
import swagger from "./middlewares/Swagger";

const App = express();

App.use(cors());
App.use(bodyParser());

App.use(winstonLogger());

App.use(new RecipeController().router);

App.use("/docs", swagger.serve, swagger.setup());

App.use(winstonErrorLogger());

export default App;
