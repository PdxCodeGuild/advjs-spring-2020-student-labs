// sample array
xs = [1, 2, 3, 4, 5]

// each
function each(xs, fn) {
    for (let i = 0; i < xs.length; i++) {
       fn(xs[i], i, xs)
    }
   }

each(xs, console.log)

// maps
function double(x) {
  return x * 2
}

// map
function map(xs, fn) {
    ys = []

    xs.forEach(function(x){
       ys.push(double(x))
    })

    return ys
   }

map(xs, double)

// filter
function isOdd(x) {
    return x% 2 === 1
  }
  
  function filter(xs, predicate) {
    const filtered = []
    
    xs.forEach(function (x) {
      if (predicate(x)) {
        filtered.push(x)
      }
    })
    return filtered
  }
  
  filter(xs, isOdd)