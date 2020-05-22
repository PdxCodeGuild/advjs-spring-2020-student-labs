const fs = require('fs')
const http = require('http')
port = process.argv[2]
path = process.argv[3]

const server = http.createServer(
  function(req, res) {
    fs.createReadStream(path).pipe(res)

  }
)
server.listen(port)