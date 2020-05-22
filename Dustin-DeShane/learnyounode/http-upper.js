const http = require('http')
const map = require('through2-map')
port = process.argv[2]

const server = http.createServer(
  function(req, res) {
    req.pipe(map(function (chunk) {
      return chunk.toString().toUpperCase().split('').join('')
    })).pipe(res)
  }
)
server.listen(port)