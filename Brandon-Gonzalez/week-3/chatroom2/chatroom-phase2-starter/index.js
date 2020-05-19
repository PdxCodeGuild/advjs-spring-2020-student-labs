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


    // Dustin writespace
    let date = new Date()
    // let unixtime = date.getTime()
    // let theDate = date.getMonth() + ' ' + date.getDate()
    let time = date.getHours() + ':' + date.getMinutes()

    let parsedData = JSON.stringify({ date: time, text: data }) + '\n'
    console.log(parsedData)

    fs.appendFile(MESSAGES_PATH, parsedData, function(err) {
      if (err) throw err;
      console.log("Data sent to file!")

      // res.end(JSON.stringify(parsedData))
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


  // Dustin writespace
  fs.readFile(MESSAGES_PATH, function (err, data) {
    if(err) {
      res.writeHead(500, { 'Content-Type': 'application/json' })
      res.end('error', err)
    }
    const messageArr = data.toString().split('\n')

    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(messageArr))
    console.log(messageArr)

  })
  

  

  // here is an example of how your messages might be formatted
  // const exampleMessages = [
  //   { text: 'hello! This is an example message.', date: new Date() },
  //   { text: 'This is another message.', date: new Date() }
  // ]
  // here we set the response code to 200 (success), and the content type to json
  // then we send up the response by stringifying the messages array

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

console.log('Server listening on port:', port)
