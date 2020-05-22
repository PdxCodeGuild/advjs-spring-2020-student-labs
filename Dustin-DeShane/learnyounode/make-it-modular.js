const mymod = require('./mymodule.js')

path = process.argv[2]
ext = process.argv[3]

mymod(path, ext, function(err, dataIn) { dataIn.forEach((el) => console.log(el)) })