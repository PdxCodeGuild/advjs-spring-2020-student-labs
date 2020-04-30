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