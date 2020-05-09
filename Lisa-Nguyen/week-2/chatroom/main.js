
/* URLs
POST to /newMessage
GET to /messages */

/* Metadata
- timestamp
- message
- sender
- receiver */

// Modules
const fs = require('fs');
const http = require('http');
const url = require('url')

// files to include
const funFaker = require('funFaker')

// Variables
const file = 'messages.csv'
let data = '';

// functions
function formatData (sender, receiver, message) {
  const timestamp = Date.now()

  data = ('\n' + timestamp) + ',' + sender + ',' + receiver + ',' + message

  return data
}

//
function messageHistory (file) {
  console.log("\nMessage history...\n")
  fs.readFile(file, 'utf8', function (err, data) {
    if (err) throw err
    console.log(data);
  })
}

function sendMessage(data){
  console.log("\nSending message...")
  fs.appendFile(file, data, 'utf8', function(err) {
    if (err) throw err;
    //console.log('Message saved.')
  })
}

// sendMessage(data)
// messageHistory(file)

// http.createServer(function (req, res) {
//   const urlData = url.parse(req.url, true)

//   switch (urlData.pathname) {
//     case '/newMessage':
//       sendMessage(data)
//       break
//     case '/messages':
//       messageHistory(file)
//       break
//     default:
//       res.end('unsupported path')
//   }
// }).listen(8000)


http.createServer(function (req, res) {
  res.write('Hello World!');
  res.end();
}).listen(8080);