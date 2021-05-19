import express from "express";
import bodyParser from "body-parser";
import routes from "./routes/index";

const app = express();

app.use(bodyParser.json());

app.use("/", routes);

app.listen(3001);
