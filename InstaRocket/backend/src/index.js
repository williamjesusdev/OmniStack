const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
require("dotenv").config();
process.env.URL =
  process.env.LOCALE === "HOME" ? process.env.HOME_URL : process.env.WORK_URL;

const app = express();

const server = require("http").Server(app);
const io = require("socket.io")(server);

mongoose.connect(process.env.MONGOOSE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  req.io = io;

  next();
});

app.use(cors());

app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "uploads", "resized"))
);

app.use(require("./routes"));

server.listen(process.env.NODE_PORT, () => {
  console.log(
    "\x1b[42m\x1b[34m%s\x1b[0m",
    `[running] server on http://${process.env.URL}`
  );
});
