const http = require('http')
const url = require('url')
const port = process.argv[2]



const server = http.createServer(
  function(req, res) {
    const date = new Date()
 
    const reqURL = url.parse(req.url, true)

    if (reqURL.pathname === '/api/parsetime') {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      
      res.end (JSON.stringify({hour: date.getHours(), minute: date.getMinutes(), seconds: date.getSeconds()}))
    }
    else if (reqURL.pathname === '/api/unixtime') {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      
      res.end(JSON.stringify({unixtime: date.getTime()}))
    }
    else {
      res.end('No matching paths.')
    }})
server.listen(port)

// const http = require('http')
// const url = require('url')
// const server = http.createServer((req, res) => {
//   const urlData = url.parse(req.url, true)
//   const time = urlData.query.iso
//   const date = new Date(time)
//   switch (urlData.pathname) {
//   case '/api/unixtime':
//     res.writeHead(200, {'Content-Type': 'application/json'})
//     res.end(JSON.stringify({unixtime: date.getTime()}))
//     break
//   case '/api/parsetime':
//     const parsed = {
//       hour: date.getHours(),
//       minute: date.getMinutes(),
//       second: date.getSeconds()
//     }
//     res.writeHead(200, {'Content-Type': 'application/json'})
//     res.end(JSON.stringify(parsed))
//     break;
//   default:
//     res.end('unsupported path')
//   }
// })
// server.listen(process.argv[2])