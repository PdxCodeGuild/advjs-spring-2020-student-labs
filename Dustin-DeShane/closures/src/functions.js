function add(x,y) {
    return x + y
}

function sub(x,y) {
    return x - y
}

function mul(x,y) {
    return x * y
}

function identity(x) {
    return x
}

function identityf(x) {
    return function() {
        return x
    }
}

function addf(x) {
    return function(y) {
        return x + y
    }
}

function liftf(fn) {
    return function(a) {
        return function(b) {
            return fn(a,b)
        }
    }
}

function curry(fn, x) {
    return function(y) {
        return fn(x,y)
    }
}

function twice(fn) {
    return function(x) {
        return fn(x, x)
    }
}

function reverse(fn) {
    return function(a, b) {
        return fn(b, a)
    }
}

function composeu(fnx, fny) {
    return function(x) {
        return fny(fnx(x))
    }
}

function composeb(fnx, fny) {
    return function(x, y, z) {
        return fny(fnx(x,y), z)
    }
}

function limit(fn, x) {
    count = 0
    return function(a, b) {
        if(count<x){
            count += 1
            return fn(a,b)
        }
        return undefined
    }
}

function from(x) {
    return function() {
        output = x
        x += 1
        return output
    }
}

function to(fn, x) {
    return function() {
        output = fn()
        if(output < x) {
            return output
        }
        return undefined
    }
}

function fromTo(x, y) {
    return to(from(x), y)
}

function element(arr, gen) {
    if(gen === undefined) {
        gen = fromTo(0, arr.length)
    }
    return function() {
        return arr[gen()]
    }

}

function collect(gen, arr) {
    return function() {
        x = gen()
        if(x !== undefined){
            arr.push(x)
        }
        return x
    }
}

function filter(gen, pred) {
    return function() {
        while(true) {
            const x = gen()
            if(x===undefined) {
                break
            }
            if(pred(x)) {
                return x
            }
        }
    }
}

function concat(gen1, gen2) {
    return function() {
        x = gen1()
        if(x !== undefined) {
            return x
        }
        else {
            y = gen2()
            return y
        }
    }
}

function exp(arr) {
    return arr[0](arr[1], arr[2])
}