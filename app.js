const express = require('express')
const app = express()
app.get('/add/:a/:b', (req, res) =>
  res.send((parseInt(req.params.a) +
    parseInt(req.params.b))
    .toString()))
app.get('/subtract/:a/:b', (req, res) =>
  res.send((parseInt(req.params.a) -
    parseInt(req.params.b))
    .toString()))
app.get('/multiply/:a/:b', (req, res) =>
  res.send((parseInt(req.params.a) *
    parseInt(req.params.b))
    .toString()))
app.listen(4000)
