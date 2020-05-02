// Async Utilities

function parallel (tasks, callback) {
  const results = []
  let counter = 0

  tasks.forEach(function(task, i) {
    task(function(err, result) {
      if(err){
        callback(err)
        return
      }

      results[i] = (result)
      counter++

      if(counter === tasks.length) {
        callback(err, results)
      }
    })
  })
}

// Try to define map using parallel
function map (collection, iteratee, callback) {

}

function waterfall (tasks, callback) {

}

export default {
  waterfall,
  parallel,
  map
}
