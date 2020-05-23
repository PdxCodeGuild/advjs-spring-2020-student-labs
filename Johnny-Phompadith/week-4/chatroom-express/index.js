// Modules
const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')
const http = require('http').createServer(app)
const io = require('socket.io')(http)

// VARIABLES
const port = 8000
const MESSAGES_PATH = './test-messages-file.txt'

// MIDDLEWARE
app.use(express.static(path.join(__dirname, 'static')))

// FUNCTIONS

io.on('connection', (socket) => {
  console.log('a user connected')
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg)
  })
})

function getMessages (req, res) {
  fs.readFile(MESSAGES_PATH, 'utf8', (err, text) => {
    if (err) {
      res.statusCode = 500
      console.log(err)
      return res.end('Error reading messages')
    }

    const messages = text
      .split('\n')
      .filter(txt => txt) // will filter out empty string
      .map(JSON.parse)

    res.json(messages)
  })
}

function postMessage (req, res) {
  let data = ''
  req.on('data', function (chunk) {
    data += chunk
  })

  req.on('end', function () {
    // at this point, data should be the entire json payload of the request
    fs.appendFile(MESSAGES_PATH, '\n' + data, err => {
      if (err) {
        res.statusCode = 500
        return res.end(err)
      }
      res.end('Message posted successfully')
    })
  })
}

// ROUTES
app.get('/', (req, res) => res.send('Hello World!'))

app.get('/messages', (req, res) => {
  getMessages(req, res)
})

app.post('/messages', (req, res) => {
  postMessage(req, res)
})

http.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
