const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const socketio = require("socket.io");
const http = require("http");
require("dotenv").config();

process.env.URL =
  process.env.LOCALE === "HOME" ? process.env.HOME_URL : process.env.WORK_URL;

const routes = require("./routes");

const app = express();
const server = http.Server(app);
const io = socketio(server);
const connectedUsers = {};

//Principais métodos HTTP
//GET, POST, PUT, DELETE

//Uso de Parametros via req
//req.query => acessar query params (para filtros)
//req.params => acessar route params (para edição e delete)
//req.body => acessar o corpo da requisição (para criação e edição)

mongoose.connect(process.env.MONGOOSE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

io.on("connection", socket => {
  const { user_id } = socket.handshake.query;

  connectedUsers[user_id] = socket.id;
});

app.use((req, res, next) => {
  req.io = io;
  req.connectedUsers = connectedUsers;

  return next();
});

app.use(express.json());
app.use(cors());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(routes);

server.listen(process.env.NODE_PORT, () => {
  console.log(
    "\x1b[42m\x1b[34m%s\x1b[0m",
    `[running] server on http://${process.env.URL}`
  );
});
