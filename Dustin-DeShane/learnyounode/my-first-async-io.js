const fs = require('fs')

fileLength = fs.readFile(process.argv[2], 'utf8', function(err, data) {
    if(err) {
        console.log("Error.")
    }
    console.log(data.split('\n').length-1)
})

