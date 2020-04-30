function add(x,y){
    return x + y
};

function sub(x,y){
    return x - y
};

function mul(x,y){
    return x * y
};

function identity(x){
    return x
};

function identityf(x){
    return function(){
        return x
    }
};

function addf(x) {
    return function(y){
        return x + y;
    }
};

function liftf(fn){
   return function(x){
       return function (y) {
           return fn(x,y);
       }
   }
};

function curry(fn,x) {
    return function (y) {
        return fn(x,y)

    }
};

function twice(fn){
    return function (x) {
        return fn(x,x)

    }
};

function reverse(fn) {
    return function(x,y){
        return fn(y,x)
    }
};

function composeu(f,g) {
    return function (x) {
        return g(f(x))
    }
};

function composeb(f,g){
    return function(a,b,c){
        return g(f(a,b) , c)
    }
};

function limit(x,fn){
    return function(x){
        return fn()
    }
};
