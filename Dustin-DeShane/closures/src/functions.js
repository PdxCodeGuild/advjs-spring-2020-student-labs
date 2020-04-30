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

function liftf(x) {
    return function(a) {
        return function(b) {
            return x(a,b)
        }
    }
}

function curry(fn, x) {
    return function(y) {
        return fn(x,y)
    }
}

