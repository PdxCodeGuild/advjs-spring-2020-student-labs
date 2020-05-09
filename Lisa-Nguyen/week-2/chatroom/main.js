// Modules
const fs = require('fs')
const http = require('http')

// Variables
const file = 'messages.csv'
let data = ''
const port = 8000

// fake data
const characters = ['Harry', 'Ron', 'Hermione', 'Draco', 'Ginny', 'Neville', 'Luna']

function fakeData () {
  const sender = characters[Math.floor(Math.random() * characters.length)]
  const receiver = characters[Math.floor(Math.random() * characters.length)]

  return [sender, receiver]
}

// functions
function formatData (sender, receiver, message) {
  const timestamp = Date.now()
  while (sender === receiver) {
    receiver = characters[Math.floor(Math.random() * characters.length)]
  }

  data = ('\n' + timestamp) + ',' + sender + ',' + receiver + ',' + message

  return data
}

function sendMessage (data, callback) {
  console.log('\nSending message...')

  fs.appendFile(file, data, 'utf8',
    function (err) {
      if (err) {
        callback(err)
      } else {
        callback(null)
      }
    })
}

http.createServer(function (req, res) {
  if (req.method === 'GET') {
    const stream = fs.createReadStream(file)
    stream.pipe(res)
  } else if (req.method === 'POST') {
    let text = ''

    req.on('data', function (chunk) {
      text += chunk
      console.log(`Text: ${text}`)
      return text
    })

    req.on('end', function () {
      const sender = fakeData()[0]
      const receiver = fakeData()[1]

      const data = formatData(sender, receiver, text)

      sendMessage(data, function (err) {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' })
          res.end('There was an error.')
        } else{
          res.writeHead(200, { 'Content-Type': 'text/plain' })
          res.end('Success. Message saved.')
        }
      })
    })
  } else {
    res.writeHead(500, {'Content-Type': 'text/plain'});
    res.write('Invalid response.')
  }
}).listen(port)

console.log(`Server is listening on ${port}`)
