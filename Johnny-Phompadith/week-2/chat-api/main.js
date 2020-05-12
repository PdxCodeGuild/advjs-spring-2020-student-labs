var http = require('http')
var fs = require('fs')
var path = '/Users/johnnyphompadith/Desktop/CODE/AJS/labs/advjs-spring-2020-student-labs/Johnny-Phompadith/week-2/chat-api/message.txt'

http.createServer(function (req, res) {
  if (req.method === 'GET') {
    var stream = fs.createReadStream(path)
    stream.pipe(res)
  }
  if (req.method === 'POST') {
    let incmsg = ''
    req.on('data', function (chunk) {
      incmsg += chunk
      console.log(`Data is ${incmsg}`)
      return incmsg
    })
    req.on('end', function () {
      // timestamp for messages
      var date = new Date()
      var month = date.getMonth()
      var day = date.getDay()
      var hours = date.getHours()
      var minutes = date.getMinutes()
      let message = ''
      message += '\n' + 'Date: [' + month + '/' + day + '] Time: [' + hours + ':' + minutes + '] Message: [' + incmsg + ']'
      // post process
      fs.appendFile(path, message, (err) => {
        if (err) {
          res.end('Error message')
        } else {
          res.end('Success')
        }
      })
    })
  }
}).listen(8080)
