var http = require('http')
var fs = require('fs')
var path = '/Users/matthewmagnotta/code/advjs-spring-2020-student-labs/Matthew-Magnotta/week-2/chatroom/messages.txt'

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function dateToTime() {
  var d = new Date();
  var h = addZero(d.getHours());
  var m = addZero(d.getMinutes());
  var s = addZero(d.getSeconds());
  return h + ":" + m + ":" + s;
}


http.createServer(function (req, res) {
  if (req.method === 'GET') {
    var stream = fs.createReadStream(path)
    stream.pipe(res)
  }
  if (req.method === 'POST') {
    req.on('data', function (data) {
      time = dateToTime()
      // var date = new Date()
      let message = ''
      message += '\n' + time + ': ' + data
      fs.appendFile(path, message, (err) => {
        if (err) throw err
        console.log('The "message" was appended to file!')
        res.end('successfully sent message')
      })
    })
  }
}).listen(8000)
