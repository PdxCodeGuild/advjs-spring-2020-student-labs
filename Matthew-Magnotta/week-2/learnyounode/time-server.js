const net = require('net')
const server = net.createServer(function (socket) {
  console.log(socket)
})
server.listen(process.argv[2])
