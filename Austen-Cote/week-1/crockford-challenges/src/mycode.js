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
        (x < gen())

    }
}