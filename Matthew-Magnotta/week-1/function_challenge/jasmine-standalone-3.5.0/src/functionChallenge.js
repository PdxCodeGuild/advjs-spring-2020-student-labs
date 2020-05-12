

// add function
function add(a,b){
  return a + b
}

// subtract function
function sub(a,b){
  return a - b
}

// multiply function
function mul(a,b){
  return a*b
}
// returns the arg given
function identity(arg){
  return arg
}

function identityf(x){
  return function(){
    return x;
  }
}

function addf(x){
  return function(y){
    return x + y
  }
}

function liftf(fn){
  return function addf(x){
    return function(y){
      return fn(x,y)

    }
  }
}

function curry(fn, x) {
  return function(y) {
    return fn(x,y)
  }
}

function twice(fn,x){
  return function(x){
    return fn(x,x)
  }
}

function reverse(fn){
  return function(x,y){
    return fn(y,x)
  }
}


function composeu(fn1,fn2){
  return function(x){
    return fn2(fn1(x))
    }
  }
function composeb(f1,f2){
  return function(x,y,z){
    return f2(f1(x,y),z)


  }
}

function limit(fn,n){
  count = 0
  return function(x,y){
    if (count < n){
      count++
      return fn(x,y)
    }
    else {
      return
    }
  }
 }

function from(start){
  return function(){
    return start++
  }
}

function to(fn,v){
 return function(){
   let value = fn()
   if (value < v){
    return value
 }
  else {
    return
  }
 }
}
function fromTo(min, max) {
  return to(from(min), max)
}


function element(array, gen) {
  if (gen === undefined) {
    gen = fromTo(0, array.length)
  }
  return function() {
    return array[gen()]
  }
}

function collect(fn,ar){
  return function(){
    x = fn()
    if (x !== undefined){
      ar.push(x)
    }
    return x
    };
  }


function filter(gen,pred){
  return function(){
  while (true){
    values = gen()
    if (values === undefined){
      return
    }
    if (pred(values)){
      return values
    }
  }
}
}


function concat(gen1,gen2){
  return function(){
    value = gen1()
    if (value == undefined){
      values = gen2()
      if (values == undefined){
        return
      }
      else {
        return values
      }
    }
    else{
      return value
    }
}
}
