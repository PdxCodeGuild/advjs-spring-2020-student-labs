const http = require('http')
const fs = require('fs')
const path = require('path')
const st = require('st')
const Router = require('http-hash-router')

const port = 8000
const MESSAGES_PATH = './messages.json'

const mount = st({ path: path.join(__dirname, '/static'), url: '/static' })
const router = Router()

// going to /static/<file-name> will serve the file <file-name>
router.set('/static/*', mount)

// requests to /messages are either a GET or a POST
router.set('/messages', function (req, res) {
  if (req.method === 'GET') {
    getMessages(req, res)
  } else if (req.method === 'POST') {
    postMessage(req, res)
  } else {
    res.statusCode = 400
    res.end('unsupported operation')
  }
})

// this is the POST handler for /messages
// this function should write a new message to the file
function postMessage (req, res) {
  let data = ''
  req.on('data', function (chunk) {
    data += chunk
  })

  req.on('end', function () {
    // at this point, data should be the entire json payload of the request
    console.log(data)
    // TODO: write code here to add the message to the messages file

    fs.appendFile(MESSAGES_PATH, data + '\n', function (err) {
      res.end('Error')
    })

    // After writing to the file, we need to send up a response
    res.statusCode = 200
    res.end('Message posted successfully')
  })
}

// this is the GET handler for /messages
// this function should respond with the list of messages
function getMessages (req, res) {
  // TODO: write code here to get your messages from the file

  // READ
  fs.readFile(MESSAGES_PATH, function (err, data) {
    if (err) {
      console.log('Error')
      res.end('Error', err)
    } else {
      let savedMessages = data.toString().split('\n')
      res.writeHead(200, {'Content-Type': 'application/json'})
      res.end(JSON.stringify(savedMessages))
      console.log(savedMessages)
    }
  })


  // here is an example of how your messages might be formatted
  // const exampleMessages = [
  //   { text: 'hello! This is an example message.', date: new Date() },
  //   { text: 'This is another message.', date: new Date() },
  //   { text: 'This message is coming from index.js', date: new Date() }
  // ]

  // here we set the response code to 200 (success), and the content type to json
  // then we send up the response by stringifying the messages array
//   res.writeHead(200, { 'Content-Type': 'application/json' })
//   res.end(JSON.stringify(example))
}

const server = http.createServer((req, res) => {
  router(req, res, {}, function onError (err) {
    if (err) {
      res.statusCode = err.statusCode || 500
      res.end(err.message)
    }
  })
})

server.listen(port)

console.log('server listening on port:', port)
