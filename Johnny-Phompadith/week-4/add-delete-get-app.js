const express = require('express')
const bodyParse = require('body-parser')
const fs = require('fs')

const app = express()

const path = './todos.txt'

app.use(bodyParse.urlencoded({ extended: true }))

app.get('/todos', (req, res) => {
  fs.readFile(path, 'utf8', (err, text) => {
    if (err) return res.send(err)
    res.send(text.split('\n').filter(line => line))
  })
})

app.post('/todos', (req, res) => {
  fs.appendFile(path, req.body.todo, (err) => {
    if (err) return res.send(err)
    res.send('ok')
  })
})

app.post('/todos/delete', (req, res) => {

  // read from file
  fs.readFile(path, 'utf8', (err, text) => {
    if (err) return res.send(err)
    // split on newline
    const todos = text.split('\n')
    // delete from array
    const target = req.body.todo
    const targetIndex = todos.indexOf(target)
    if (targetIndex > -1) {
      todos.splice(targetIndex, 1)
      // overwrite file using array
      fs.writeFile(path, todos.join('\n'), (err) => {
        if (err) return res.send(err)
        return res.send('deleted')
      })
    } else {
      return res.send('not found')
    }
  })
})

app.listen(8000)

console.log('serving on port 8000')
