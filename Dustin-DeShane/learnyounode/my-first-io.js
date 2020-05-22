const fs = require('fs')

file = fs.readFileSync(process.argv[2])
fileString = file.toString()

fileArray = fileString.split('\n')
fileLength = fileArray.length - 1

console.log(fileLength)