const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const cors = require("cors");
require("dotenv").config();

process.env.URL =
  process.env.LOCALE === "HOME" ? process.env.HOME_URL : process.env.WORK_URL;

const routes = require("./routes");
const { setupWebSocket } = require("./websocket");

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect(process.env.MONGOOSE, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = process.env.NODE_PORT || 3333;
server.listen(PORT, () => {
  console.log(
    "\x1b[42m\x1b[34m%s\x1b[0m",
    `[running] server on http://${process.env.URL}`
  );
});
