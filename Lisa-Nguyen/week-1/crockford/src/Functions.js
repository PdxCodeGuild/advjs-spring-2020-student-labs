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