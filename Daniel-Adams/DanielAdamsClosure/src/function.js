function add(num1, num2){
    return num1 + num2;
}

function sub(num1, num2){
    return num1 - num2;
}

function mul(num1, num2){
    return num1 * num2;
}

function identity(arg1){
    return arg1;
}

function identityf(arg1){
    funtion()
    return arg1;
}

function addf(num1){
    return function(num2) {
        return num1 + num2;
    }
}

function liftf(fn) {
    return function(num1) {
        return function(num2) {
            return fn(num1,num2);
        }
    }
}

function curry(fn, x) {
    return liftf(fn)(x);
    }

function twice(fn) {
    return function(x) {
        return fn(x, x);
        }
    }

function reverse(fn) {
    return function(x,y){
        return fn(y,x);
    }
}

function composeu(fn1, fn2) {
    return function(x){
        return fn2(fn1(x));
    }
}

function composeb(fn1, fn2){
    return function(x,y,z){
        return fn2(fn1(x,y),z);
    }
}

function limit (fn, t) {
    let t1 = 0
    return function(x,y){
        if (t1 < t) {
            t1++
            return fn(x,y);
        }
        return undefined;
    }
        
}

function from (start) {
    return function(){
        return start++
    };
   
}

function to (gen, max) {
    return function(){
        let gen1 = gen()
        if (gen1 < max){
            return gen1++
        }
        return undefined
    }    
}

function fromTo (from, to) {
    return function(){
        if(from<to){
            return from++
        }
    return undefined  
    }
}

function fromToAgain (min, max){
    return to(from(min),max)
}

function element(array, gen) {
    if (gen === undefined) {
      gen = fromTo(0, array.length)
    }
    return function() {
      return array[gen()]
    }
  }

function collect (gen, array){
    return function(){
         gen1 = gen()
         if (gen1 !== undefined){
             array.push(gen1)
         }
         return gen1
    }
}

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

function concat(gen1, gen2) {
    return function() {
        gen1Num = gen1()
        if (gen1Num == undefined){
            gen2Num = gen2()
            return gen2Num
        }
        else{
            return gen1Num
        }
    }
}

function exp(array) {
    return function(){
        
    }
}