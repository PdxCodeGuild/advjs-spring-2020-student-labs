module.exports = function (deps) {
  const express = require('express')
  const app = express()

  const http = require('http')

  const fs = require('fs')

  // const path = './messages.txt'

  app.get('/messages', function (req, res) {
    fs.readFile(deps.messagesPath, 'utf8', (err, text) => {
      if (err) {
        res.statusCode = 500
        return res.end('Error reading messages')
      }

      const messages = text
        .split('\n')
        .filter(txt => txt) // will filter out empty string
        .map(JSON.parse)

      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(messages))
    })
  })
  app.use(express.json()) // for parsing application/json
  app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

  app.post('/messages', function (req, res, next) {
    fs.appendFile(deps.messagesPath, '\n' + req.body, err => {
      if (err) {
        res.statusCode = 500
        return res.end(err)
      }
      res.statusCode = 200
      res.end('Error failed successfully')
    })
  })

  // app.put('/messages', function (req, res) {
  // })

  return http.createServer((req, res) => {
    if (err) {
      res.statusCode = err.statusCode || 500
      res.end(console.log('Server error'))
    }
  })
}