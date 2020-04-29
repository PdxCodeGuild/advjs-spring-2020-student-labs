function each(input, fn) {
    for (let i = 0; i<input.length; ++i) {
        fn(input[i], i, input)
    }
};

function map(input, fn) {
    mapped = [];
    for (let i = 0; i<input.length; ++i) {
        mappedResult = fn(input[i]),
        mapped.push(mappedResult);
    }
    return mapped
};
