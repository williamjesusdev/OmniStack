const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const cors = require("cors");

const routes = require("./routes");
const { setupWebSocket } = require("./websocket");

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect(
  "mongodb+srv://william:semana@projects-p4icg.mongodb.net/devradar?retryWrites=true&w=majority",
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3333;
server.listen(PORT, () => {
  console.log("server is running");
});
