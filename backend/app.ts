const http = require("http");
import * as express from "express";
import { routes } from "./routes/index";

const app = express();

app.use("/", routes);

const server = http.createServer(app);

server.listen(3005);
