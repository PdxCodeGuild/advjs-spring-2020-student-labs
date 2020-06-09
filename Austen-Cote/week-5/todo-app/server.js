const fs = require('fs')
const express = require('express')
const port = 8000
const app = express()
var bodyParser = require('body-parser')
const todosPath = './todos.txt'

app.use(express.static('static'))
app.use(bodyParser.json())

app.get('/todos', (req, res) => {
  fs.readFile(todosPath, 'utf8', (err, data) => {
    if (err) res.status(500).send(err)
    const todos = data
      .split('\n')
      .filter(txt => txt) // will filter out empty string
      .map(JSON.parse)
    console.log(todos, 'this is todos from server')
    return res.json(todos)
  })
})

app.post('/addTodos', (req, res) => {
  console.log('hello', req.body)
  const message = JSON.stringify(req.body)
  fs.appendFile(todosPath, '\n' + message, err => {
    if (err) return res.status(500).send(err)

    return res.send('post successful')
  })
})

app.delete('/todos', (req, res) => {
  console.log(req.body, 'request . body is this ')
  fs.readFile(todosPath, 'utf8', (err, data) => {
    if (err) res.status(500).send(err)
    console.log(typeof data)
    console.log(JSON.stringify(req.body))
    console.log(data.replace(req.body, null))
    const item = data.replace(req.body, '')
    // const change = JSON.stringify(req.body)
    // // JSON.stringify(req.body)
    // item.replace(change, '')
    // const todos = data
    //   .split('\n')
    //   .filter(txt => txt) // will filter out empty string
    //   .map(JSON.parse)

    // const index = todos.indexOf(req.body.item)
    // // const item = todos.find(obj => obj.item === req.body.item)
    // todos.splice(index, 1)
    // const modifidedData = JSON.stringify(todos)
    fs.writeFile(todosPath, item, err => {
      if (err) return res.status(500).send(err)

      return res.send('delete succesful')
    })
    // console.log(data, "modifided tido")
  })
})

app.listen(port, console.log('Listening on port 8000'))
