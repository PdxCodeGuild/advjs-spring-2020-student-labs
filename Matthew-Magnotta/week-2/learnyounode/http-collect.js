var http = require('http')
const bl = require('bl')

url = process.argv[2]

http.get(url,(response)=>{
  response.pipe(bl(function (err, data) { console.log(data.toString().length)
  console.log(data.toString())
  }))
})
