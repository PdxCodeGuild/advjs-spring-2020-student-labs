function each(xs, fn) {
  for (i = 0; i < xs.length; i++) {
    fn(xs[i], i, xs)
  }
};
each([1, 2, 3], console.log)

function mapxs(xs)
