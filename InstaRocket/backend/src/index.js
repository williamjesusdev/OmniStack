const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect(
  'mongodb+srv://usuario:senha@projects-p4icg.mongodb.net/test?retryWrites=true&w=majority',
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  req.io = io;

  next();
});

app.use(cors());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

app.use(require('./routes'));

server.listen(3333, () => {
  console.log('O Pai tá Online');
});
