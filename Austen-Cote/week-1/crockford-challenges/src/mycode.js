function add(x,y){
    return x+y
}

function sub(x,y){
    return x - y
}

function mul(x,y){
    return x * y
}

function identity(x){
    return x
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
    return function(x){
        return function(y){
            return fn(x,y)
        }
    }
}

function curry(fn,x){
    return function(y){
        return fn(x,y)
    }
}
function curry(fn,x){
    return liftf(fn)(x);
}

function twice(fn){
    return function(y){
        return fn(y,y)
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
//reading from the inside out
function composeb(fn1,fn2){
    return function(x,y,z){
        return fn2(fn1(x,y),z)
    }
}

function limit(fn,x){
    return function(y,z){
        if (x > 0){
            x-=1
            return fn(y,z)
        }return undefined
    }
}

function from(x){
    return function(){
        let val = x
        x += 1
        return val
    }
}

function to(gen,endval){
    return function(){
        let x = gen()
        if (x < endval){
            return x
        }
        // here you can return undefined to explicity state it
    }
}

function fromTo(x,y){
//here we can call from to get a value that will increase by 1
// then we can call to  to get an to to take in the generator and give it an end value
    return to(from(x),y)
}

function element(arr, gen){
    if (gen === undefined){
        gen = fromTo(0,arr.length)
    }
    return function(){
        let x = gen()
        if (x !== undefined){
            return arr[x]
        }
    }
}

function collect(gen,arr){
    return function(){
        let collect = gen()
       if (collect !== undefined){
           arr.push(collect)
       }
       return collect
    }
}

function filter(gen,predicate){
    return function(){
        let value;
        do {
            value = gen()
        }
        while ( 
            value !== undefined && !predicate(value)
            )
            return value 
    }
}

function concat(gen1,gen2){
    return function(){
        let together = gen1()
        if (together === undefined){
            return gen2()
        }
        return together
    }
}

function repeat(gen){
        let x = []
        while (gen() <= x){
           gen()
        }
        return gen()
}

function gensymf(){
    return function(){

    }
}