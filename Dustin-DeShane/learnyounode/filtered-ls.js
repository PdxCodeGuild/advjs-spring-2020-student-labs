const fs = require('fs')
const path = process.argv[2]
ext = "." + process.argv[3]


fs.readdir(path, function(err, list) {
    if(err) {
        console.log(err)
    }
    list.forEach((el) => {
        if(el.endsWith(ext)) {
            console.log(el)
        }
    })
    
})


// const fs = require('fs')
// const path = require('path')
// const dirPath = process.argv[2]
// const ext = '.' + process.argv[3]
// fs.readdir(dirPath, (err, list) => {
//   list.filter(fileName => path.extname(fileName) === ext)
//       .forEach(fileName => console.log(fileName))
// })
fs.readdir(dirPath, function (err, list) {
  list.filter(function (fileName) { return path.extname(fileName) === ext })
      .forEach(function (fileName) { console.log(fileName) }
})
function add (x,y) {
  return x + y
}
const add = (x,y) => x + y