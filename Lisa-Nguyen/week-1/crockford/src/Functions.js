function add(a,b) {
  return a+b;
}

function sub(a,b) {
  return a-b;
}

function mul(a,b) {
  return a*b;
}

function identity(a) {
  return a;
}

function identityf(a) {
  return function() {
    return a;
  };
}

function addf(a) {
  return function(b) {
    return a+b
  }
}

function liftf(fn) { // should take a binary function
  // make it callable with two invocations
  return function(x){ // call 1
    return function(y){ // call 2
      return fn(x,y) 
    }
  }
}

function curry(fn, a) { // takes a binary function & an argument
 return function(b) {
   return fn(a,b)
 }; // returns a function that can take a second
}

function twice(fn){
  return function(a){
    return fn(a,a)
  }
}

function reverse(fn){
  return function(a,b){
    return fn(b,a)
  }
}

function composeu(f,g){
  return function(x){
    return g(f(x));
  }
}

function composeb(f,g) {
  return function(x,y,c) {
    return g(f(x,y), c);
  }
}

function limit(fn, n) {
  let count = 0;
  return function(x,y) {
    if (count < n) {
      count++;
      return fn(x,y);
    } else{
      return undefined;
    }
  }
}

function from(n) {
  return function(){
    return n++;
  }
}

// function to(fn, n){
//   let count = 1;
//   return function(){
//     if (count < n) {
//       n-=1;
//       return fn(n);
//     } else {
//       return undefined;
//     }
//   }
// }

function to(gen, end) {
  return function() {
    let value = gen()
    if (value < end) {
      return value
    }
    return undefined
  }
}

function fromTo(x, y){
  return to(from(x),y);
}

function element(array, gen) {
  if (gen === undefined) {
    gen = fromTo(0, array.length)
  }
  return function() {
    return array[gen()]
  }
}

function collect(gen, array) {
  return function() {
    x = gen()
    if (x !== undefined) {
      array.push(x)
    }
    return x
  }
}

// Evan's
function filter(gen, pred) {
  return function() {
    while (true) {
      const x = gen()
      if (x === undefined) {
        return undefined
      }
      if (pred(x)) {
        return x
      }
    }
  }
}

// Austen's
function filter(gen,predicate){
  return function(){
      let value;
      do {
          value = gen()
      }
      while (value !== undefined && !predicate(value))
          return value 
  }
}

function concat(gen1, gen2){
  return function(){
    x = gen1();

    if (x !== undefined){
      return x;
    } else {
      y = gen2()
      return y;
    }
  }
}

// try exp function

function exp(arr){
  return function(){
    if ((typeof arr[0]) === "function"){
      fn = arr[0]
      return fn(arr[1], arr[2])
    }
  }
}