import express from "express";
import bodyParser from "body-parser";
import routes from "./routes/index";

var cors = require("cors");
var app = express();

app.use(cors());

app.use(bodyParser.json());

app.use("/", routes);

app.listen(3001);
