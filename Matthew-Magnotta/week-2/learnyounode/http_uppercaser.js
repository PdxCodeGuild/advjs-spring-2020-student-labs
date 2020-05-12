var http = require('http')
var fs = require('fs')
var through = require('through2')

http.createServer(function (req, res) {
  req.pipe(through(function( buf, _, next) {
    this.push(buf.toString().toUpperCase())
    next()
  })).pipe(res);
}).listen(process.argv[2]);