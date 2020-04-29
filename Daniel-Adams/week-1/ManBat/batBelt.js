function each(input, fn) {
    for (let i = 0; i<input.length; ++i) {
        fn(input[i], i, input)
    }
};

function map(j, fn) {
    nums = j.each
    for (let i = 0; i<nums; ++i) {
        fn(nums[i])
    }
};
