var http = require('http')
var fs = require('fs')
var through = require('through2')
var url = require('url')

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}
function unixTime(time) {
  return {unixtime: time.getTime()}
}    

function parseQuery(url) {
  switch (url.pathname){
    case '/api/parsetime':
     return parsetime(new Date(url.query.iso))
    case '/api/unixtime':
      return unixTime(new Date(url.query.iso))
  }
}
var server = http.createServer(function(req,res) {
  url = url.parse(req.url, true) 
}).listen(process.argv[2])