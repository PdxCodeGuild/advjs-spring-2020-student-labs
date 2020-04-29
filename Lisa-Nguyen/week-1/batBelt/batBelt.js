// Demo: https://repl.it/@lisaofalltrades/lab-02-batbelt

// sample array
xs = [1, 2, 3, 4, 5]
console.log(`Original Array: ${xs}`)
// each
console.log("\nEach")
function each(xs, fn) {
    for (let i = 0; i < xs.length; i++) {
       fn(xs[i], i, xs)
    }
   }

each(xs, console.log)

// map
console.log("\nMap")
function double(x) {
  return x * 2
}

function map(xs, fn) {
    ys = []

    each(xs, function(x){
       ys.push(double(x))
    })

    return ys
   }

console.log(map(xs, double))

// filter
console.log("\nFilter")
function isOdd(x) {
    return x % 2 === 1
  }
  
function filter(xs, predicate) {
  const filtered = []
    
  each(xs, function (x) {
    if (predicate(x)) {
      filtered.push(x)
    }
  })
  return filtered
}
  
console.log(filter(xs, isOdd))