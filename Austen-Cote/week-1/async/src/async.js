// Async Utilities
      //task is an array of functions
function parallel (tasks, callback) {
  let results = []// 'one','two
  let counter = 0

    tasks.forEach(function(task,i){
      //this is pushing each function in tasks to results
      task(function(err, taskResult){
        //runs the task within the array and tests for err, increases counter
        //if no err increse counter by 1 and reloop, else callback with err and result 
        counter++
        if (err !== null){
          // results.push(taskResult)
          return callback(err,results)
        }
        //if there is no error results[i] pushes the taskResult to the array(results)
        results[i] = taskResult
        console.log(counter, "second one")
        console.log(task)
        console.log(results)
        //put if checking to see if all tasks are done "counter" for task run === to arr
        if (counter === tasks.length){
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
