let xs = [1, 2, 3, 4, 5, 6]

// each function
function each(xs, fn) {
  for (let i = 0; i < xs.length; i++) {
    fn(xs[i], i, xs)
  }
};
each(xs, console.log)

// map function
function map(xs, fn) {
  const newinput = [];
  for (let i = 0; i < xs.length; i++) {
    fn(newinput[i] = xs[i] + 2, i)
  }
};
map(xs, console.log)

// filter
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

// random
function random(min, max) {
  return Math.floor(Math.random() * (max - min+1));
};
console.log(random(1, 100))
