const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const { MONGODB, HOST, PORT } = require('dotenv').config().parsed

const routes = require('./routes')

const app = express()

mongoose.connect(
  MONGODB,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.json())

app.use(cors())
app.use(routes)

app.listen(process.env.PORT || PORT, () => {
  console.log('\033[0;36m[running] server in', `${HOST}:${PORT}\n`, '\033[0m')
})