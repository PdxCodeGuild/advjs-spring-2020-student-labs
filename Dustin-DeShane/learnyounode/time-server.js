const net = require('net')
const zeroFill = require('zero-fill')
const date = new Date()
const port = process.argv[2]

const year = date.getFullYear()
const month = monthCheck()
const day = dayCheck()
const hour = hourCheck()
const minute = minuteCheck()

function dayCheck() {
  theDay = date.getDate()
  if(theDay < 10) {
    return zeroFill(2, theDay)
  }
  else {
    return theDay
  }
}

function hourCheck() {
  theHour = date.getHours()
  if(theHour < 10) {
    return zeroFill(2, theHour)
  }
  else {
    return theHour
  }
}

function minuteCheck() {
  theMinute = date.getMinutes()
  if(theMinute < 10) {
    return zeroFill(2, theMinute)
  }
  else {
    return theMinute
  }
}

function monthCheck() {
  theMonth = date.getMonth()
  if(theMonth < 10) {
    return zeroFill(2, theMonth+1)
  }
  else {
    return theMonth
  }
}

const ds = `${year}-${month}-${day} ${hour}:${minute}
`

const server = net.createServer(function (socket) {

socket.end(ds)
})
server.listen(port)