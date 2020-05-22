// Modules
const expressApp = require('express')()
const fs = require('fs')

// VARIABLES
const port = 8000
const MESSAGES_PATH = './test-messages-file.txt'

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

expressApp.get('/', (req, res) => res.send('Hello World!'))

expressApp.get('/messages', (req, res) => {
  getMessages(req, res)
})

expressApp.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
