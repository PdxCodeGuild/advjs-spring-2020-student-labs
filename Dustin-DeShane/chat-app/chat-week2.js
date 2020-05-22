// Store each message in individual JSON Object (one file for all objects)
// Parent: JSON Object
// -Child: Unixtime ( ID )
// -Child: Datetime ( Day/hour/min )
// -Child: Author

const fs = require('fs')
const http = require('http')
// const url = require('url')
// const through = require('through2')
const port = 8001
const path = './messages.txt'
const server = http.createServer(function (req, res) {
  if (req.method === 'GET') {
    fs.createReadStream(path).pipe(res)
    // res.end('this is a get request')
  } else if (req.method === 'POST') {
    // set body to empty string to append to
    // let body = '' + '\n' // seperates by new line each time
    // req.on('data', function (data) {
    //   // grab data and do something with it
    //   body += data
    //   console.log(body)
      // fs.appendFile(path, body, function (err) {
      //   if (err) {
      //     console.log(err)
      //   }
    //   })
    // })
    // let unix = unixtime
    // let time = newDate()
    // let message = '' this is write Post
    // const writePost = fs.createWriteStream(path, { flags: 'a' })
    // const date = new Date()
    // const hours = date.getHours()
    // const min = date.getMinutes()
    // const time = `${hours}-${min}`
    // const unixtime = date.getTime()
    // req.setEncoding('utf8')
    let message = ''
    res.on('data', function(chunk) {
      message += chunk
    })
    // console.log(message)
    const newMsg = {
      // time: time,
      // unix: unixtime,
      message: message
    }
    const stuff = JSON.stringify(newMsg)
    fs.appendFile(path, stuff, function (err) {
      if (err) {
        console.log(err)
      }
    // stuff.pipe(writePost)
    // writePost.write('\n')
    req.on('end', function () {
      res.end('this is a post request')
    })
    req.on('error', console.error)
  } // end of else if
}) // end of server
server.listen(port)
