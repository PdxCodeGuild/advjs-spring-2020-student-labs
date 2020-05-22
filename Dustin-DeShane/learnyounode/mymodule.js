const fs = require('fs')
const path = require('path')




module.exports = function(thePath, theExt, callback) {
  fs.readdir(thePath, 'utf8', function (err, list) {
    if (err) {
      return callback(err)
    }
    callback(err, list.filter(function (fileName) { return path.extname(fileName) === '.' + theExt }))
  })
}
