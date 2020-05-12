// Async Utilities

function parallel (tasks, callback) {
  // parallel takes an array and a callback function
  let results = []
  let count = 0

  tasks.forEach(function(x,i){ // looping over tasks array
    x(function(err, result){ // call each function, passing a callback (calls when finished)
      if (err){
        return callback(err)
      } else {
        count++
        results[i]= result
        if (count === tasks.length){ // check if it's the last task
          callback(err, results)
        }
      }
    }); // call each function
    
  })


  
}

// Try to define map using parallel
function map (collection, iteratee, callback) {
  let squared = []

  collection.forEach(function(num, err){
    let result = iteratee(num, callback)

    if (err){
      return callback(err)
    } else {
      squared.push(result);

    }
    callback(err, squared)
  })
}

function waterfall (tasks, callback) {

}

export default {
  waterfall,
  parallel,
  map
}
