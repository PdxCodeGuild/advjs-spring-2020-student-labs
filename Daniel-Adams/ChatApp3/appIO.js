module.exports = function (deps) {
  const express = require('express')
  const app = express()

  const fs = require('fs')

  // const path = './messages.txt'

  app.use(express.json()) // for parsing application/json
  app.use(express.static('static'))

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


  app.post('/messages', function (req, res, next) {
    fs.appendFile(deps.messagesPath, '\n' + msg, err => {
      if (err) {
        res.statusCode = 500
        return res.end(err)
      }
      res.statusCode = 200
      res.end('Error failed successfully')
    })
  })

  const http = require('http').createServer(app)
  const io = require('socket.io')(http)

  io.on('connection', (socket) => {
    console.log('a user connected')
    socket.on('disconnect', () => {
      console.log('user disconnected')
    })
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg)
    })
  })

  return http
}
