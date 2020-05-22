const http = require('http')
const bl = require('bl')
// url = process.argv[2]
// url2 = process.argv[3]
// url3 = process.argv[4]
let urls = [process.argv[2], process.argv[3], process.argv[4]]
let resultsArr = []
let count = 0

function printIt() {
  for(let i=0; i < 3; i++) {
    console.log(resultsArr[i])
  }
}

urls.forEach(function(url, index) {
  http.get(url, function(response) {
    response.pipe(bl(function (err, data) {
      if(err) {
        return response.on(err)
      }

      resultsArr[index] = data.toString()
      count++

      if(count === 3) {
        printIt()
      }

    }))
  })
})


// const http = require('http')
// const urls = [
//   process.argv[2],
//   process.argv[3],
//   process.argv[4],
// ]
// const results = []
// let count = 0
// urls.forEach(function (url, index) {
//   http.get(url, function (res) {
//     res.setEncoding('utf8')
//     let data = ''
//     res.on('data', function (chunk) {
//       data += chunk
//     })
//     res.on('end', function () {
//       results[index] = data
//       count++
//       if (count === urls.length) {
//         results.forEach(res => console.log(res))
//       }
//     })
//   })
// })