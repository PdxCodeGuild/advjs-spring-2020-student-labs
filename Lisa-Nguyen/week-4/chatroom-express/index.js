// Modules
const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')

// VARIABLES
const port = 8000
const MESSAGES_PATH = './test-messages-file.txt'

// MIDDLEWARE
app.use(express.static(path.join(__dirname, 'static')))

// FUNCTIONS
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

    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(messages))
  })
}

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/messages', (req, res) => {
  getMessages(req, res)
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
