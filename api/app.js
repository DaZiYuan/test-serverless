'use strict'

const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.send(JSON.stringify({ message: `Server time: ${new Date().toString()}` }))
})

app.post("/testCookie", (req, res, next) => {
  res.cookie("test0", '000');
  res.cookie("test1", 111);
  res.send('Cookie is set');
});

module.exports = app
