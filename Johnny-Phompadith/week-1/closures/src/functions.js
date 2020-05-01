// add
function add(x, y) {
  return x + y
};

// subtract
function sub(x, y) {
  return x - y
};

// multiply
function mul(x, y) {
  return x * y
};

// id
function identity(x) {
  return x
};

// add
function addf(x) {
  return function(y) {
    return x + y;
  }
};

function liftf(fn) {
  return function(x) {
    return function(y) {
      return fn(x, y);
    }
  }
};

// curry
function curry(fn, x) {
  return liftf(fn)(x);
};

// twice
function twice(fn) {
  return function(x) {
    return fn(x, x)
  }
};

// reverse
function reverse(fn) {
  return function(x, y) {
    return fn(y, x)
  }
};

// composeu
function composeu(f, g) {
  return function(x) {
    return g(f(x))
  }
};

// composeb
function composeb(f, g) {
  return function(a, b, c) {
    return g(f(a, b), c)
  }
};

// limit
function limit(fn, n) {
  let count = 0;
  return function(x, y) {
    if (count < n) {
      count++;
      return fn(x, y);
    }
    return undefined;
  }
};

// from
function from(start) {
  return function() {
    return start++;
  }
};

// to
function to(gen, end) {
  return function() {
    let value = gen()
    if (value < end) {
      return value
    }
    return undefined
  }
};

// fromTo
function fromTo(min, max) {
  return function() {
    if (min < max) {
      return min++
    }
    return undefined
  }
};

// fromTo from calling functions
// function fromTo(min, max) {
//   return to(from(min), max)
// }


// element
function element(array, gen) {
  if (gen === undefined) {
    gen = fromTo(0, array.length)
  }
  return function() {
    return array[gen()]
  }
};

// collect
function collect(gen, array) {
  return function() {
    x = gen()
    if (x !== undefined) {
      array.push(x)
    }
    return x
  }
}

// filter
function filter(gen, predicate) {
  return function() {
    while (true) {
      const x = gen()
      if (x === undefined) {
        return undefined
      }
      if (predicate(x)) {
        return x
      }
    }
  }
}
