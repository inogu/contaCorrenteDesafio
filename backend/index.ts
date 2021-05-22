import express from "express";
import bodyParser from "body-parser";
import routes from "./routes/index";
import { rentabilizarConta } from "./util/thread";

var cors = require("cors");
var cron = require("node-cron");
var app = express();

app.use(cors());

app.use(bodyParser.json());

app.use("/", routes);

cron.schedule("0 * * * *", () => {
  console.log("Iniciando rendimentos da conta! " + new Date());
  rentabilizarConta();
  console.log("Conta rentabilizada!");
});

app.listen(3001);
