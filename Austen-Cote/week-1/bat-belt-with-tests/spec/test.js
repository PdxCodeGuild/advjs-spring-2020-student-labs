/* global describe, it, expect, each, map, filter, find, random, range, times, constant, compose, delay, , */

describe('each', function () {
  it('should take in a function and a array and return an array', function () {
    const results = []

    each([1, 2, 3], function (x) { results.push(x) })

    expect(results).toEqual([1, 2, 3])
  })
})

describe('map', function () {
  it('should take in an array and  a function, return changed values in the array.', function () {
    const results = []
    map([1, 2, 3], function (x) { results.push(x) })

    expect(results).toEqual([3, 4, 5])
  })
})

describe('filter', function () {
  it('should take in an array and a function, only even numbers.', function () {
    expect(filter([3, 2, 3, 5], function (x) {})).toEqual([2])
  })
})

describe('find', function () {
  it('should return the first element that passes predicate', function () {
    function greaterThan5 (x) { return x > 5 }
    expect(find([1, 8, 3, 4], greaterThan5)).toEqual([8])
    expect(find([3, 10, 7], greaterThan5)).toEqual([10])
  })
})

describe('random', function () {
  it('should take in a min, max and return a random number', function () {
    expect(random(5, 10)).toEqual(6)
  })
})

describe('range', function () {
  it('should take in a start, stop and step and return a an array', function () {
    expect(range(10, 20, 2)).toEqual([10, 12, 14, 16, 18])
  })
})

// describe('extend', function(){
//     it('should take in a array of objects and return', function(){
//         expect(extend(10,20,2)).toEqual([10,12,14,16,18]);
//         // expect(find([3,10,7], greaterThan5)).toEqual([10])
//     })
// })

describe('times', function () {
  it('should take in number and an binary and return an array of values', function () {
    expect(times(5, function (x) {})).toEqual([1, 2, 3, 4, 5])
  })
})

describe('constant', function () {
  it('should take in value and an binary and return a boolean', function () {
    expect(constant('hello', function (x) {})).toEqual(true)
  })
})

describe('delay', function () {
  it('should take in a time and a fn', function (done) {
    function add (x, y, callback) {
      delay(callback(null, x + y))
    }
    add(1, 2, function (results) {
      expect(results).toEqual(3)
      done()
    })
  })
})

describe('compose', function () {
  it('should take in two values and return a list of functions that get consumed by the following function', function () {
    expect(compose('hello', 'name')).toEqual('hello NAME!')
  })
})
