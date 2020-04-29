// sample array
xs = [1, 2, 3, 4, 5]

// each
function each(xs, fn) {
    for (let i = 0; i < xs.length; i++) {
       fn(xs[i], i, xs)
    }
   }

each(xs, console.log)

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