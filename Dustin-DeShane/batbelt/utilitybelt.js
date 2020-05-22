function each(xs, fn) {
    for (let i = 0; i < xs.length; i++) {
        fn(xs[i], i, xs)
    }
}
//Example - each
each([1,2,3], console.log)

/*----------------------------*/

function map(xs, fn) {
    ys = []
    for (let i = 0; i < xs.length; i++) {
        ys[i] = fn(xs[i])
    }
    console.log(ys)
}

//Example - map
map([1,2,3], function(num) {return num * 6})

/*----------------------------*/
function filter(xs, fn) {
    ys = []
    for (let i = 0; i < xs.length; i++) {
        if (fn(xs[i]) === true) {
            ys.push(xs[i])
        }
    }
    console.log(ys)
}

//Example - filter
filter([1,2,3], function(num) {return num % 3 == 0;})

/*----------------------------*/
function find(xs, fn) {
    ys = []
    for (let i = 0; i < xs.length; i++) {
        if (fn(xs[i]) === true) {
            ys.push(xs[i]);
            break;
        }
    }
    console.log(ys)
}

//Example - find
find([1,2,3,4,5,6], function(num) {return num % 3 == 0;})