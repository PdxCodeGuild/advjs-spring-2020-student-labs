function add(x,y) {
    return x + y
}

function sub(x,y) {
    return x - y
}

function mul(x,y) {
    return x * y
}

function identity(input) {
    return input
}

function identityf(input, fn) {
    const input = fn(input)
    return fn(input)
}