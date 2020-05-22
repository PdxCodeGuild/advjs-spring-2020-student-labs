const express = require('express')
const app = express()
const bodyParse = require('body-parser')
const port = 3000
const path = require('path')


app.use(express.static('src'))
app.use(express.json())

app.get('/messages', (req, res) => {
  console.log(req.body)
  console.log('testing testing get')
  res.render('index')
})

app.listen(3000)
console.log('serving on port 3000')