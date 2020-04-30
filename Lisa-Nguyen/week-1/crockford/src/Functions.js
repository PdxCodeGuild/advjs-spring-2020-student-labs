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

function liftf(binary) { // should take a binary function
  // make it callable with two invocations
  return function(x){ // call 1
    return function(y){ // call 2
      return binary(x,y) 
    }
  }
}