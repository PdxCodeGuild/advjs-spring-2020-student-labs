function each(input, fn) {
    for (let i = 0; i<input.length; ++i) {
        fn(input[i], i, input)
    }
};

function map(input, fn) {
    mapped = [];
    each(input, function(item){
        mappedResult = fn(item),
        mapped.push(mappedResult);
    }) 
    
    return mapped
};

function filter (input, sift) {
    sifted = []
    input.forEach(function (x) {
        if (sift(x)){
            sifted.push(x)
        }
    })
    return sifted
};

function find (input, rule) {
    return input.filter(rule)[0]
};

function random (min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
};

function range (start, stop, step) {
    rangelist = []
    

}