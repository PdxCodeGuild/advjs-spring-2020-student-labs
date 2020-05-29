const port = 8080
const messagesPath = './messages.txt'
const express = require('express');
// const bodyParser = require('body-parser')
const path = require('path');
const app = express();
// const app = require('./app')({ messagesPath: MESSAGES_PATH })
////////////////////////////////////////////////////////////////
const fs = require('fs')

app.use(express.json())
app.use(express.static(path.join(__dirname, 'static')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.get('/messages', (req, res) => {
  fs.readFile(messagesPath, 'utf8', (err, text) => {
    if (err) return res.status(500).send(err)

    const messages = text
      .split('\n')
      .filter(txt => txt) // will filter out empty string
      .map(JSON.parse)

    return res.json(messages)
  })
})

app.post('/messages', (req, res) => {
  // console.log(req)
  const message = JSON.stringify(req.body)
  fs.appendFile(messagesPath, '\n' + message, err => {
    if (err) return res.status(500).send(err)

    return res.send('post successful')
  })
})

const http = require('http').createServer(app)
const io = require('socket.io')(http)

io.on('connection', (socket) => {
  console.log('a user connected')

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg)
    fs.appendFile(messagesPath, '\n' + JSON.stringify(msg), err => err ? console.log(err) : null)
  })

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})
////////////////////////////////////////////////////////////////

app.listen(process.env.PORT || 8080);
console.log('server listening on port:', port)
