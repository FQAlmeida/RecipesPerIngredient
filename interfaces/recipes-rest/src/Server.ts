import Express from "express";
import BodyParser from "body-parser";
import Cors from "cors";

const App = Express();
App.use(Cors());
App.use(BodyParser.json());

export default App;
