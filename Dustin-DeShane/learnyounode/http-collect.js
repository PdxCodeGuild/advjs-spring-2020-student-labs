const http = require('http')
const bl = require('bl')
url = process.argv[2]

http.get(url, function(response) {
  response.pipe(bl(function (err, data) {
    if(err) {
      return response.on(err)
    }
    newData = data.toString()

    console.log(newData.length)
    console.log(newData)

  }))
})