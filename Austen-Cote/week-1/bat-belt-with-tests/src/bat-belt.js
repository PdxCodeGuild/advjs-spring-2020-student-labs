// automated tests

// //_.each
// console.log("hello")
// let arr = [1,9,3];
// for(let i = 0; i < arr.length; i++){

//         // alert(i)
//         console.log(arr[i])
//         // 1 9 3
// }
// **or **/

function each (arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i], i, arr)
  }
}
each([1, 9, 3], function (x) {
  // console.log(x)
})

// //map

// option 1
// let newArr = [];
// for (let i = 0; i < arr.length; i++){
//     newArr[i] = arr[i] + 2;
//     console.log(newArr, "1")
// }
// //option 2
function map (arr, fn) {
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    fn(newArr[i] = arr[i] + 2)
  }
  // console.log(newArr)
}
map([1, 2, 3], function (x) {
})

// filter

function filter (arr, fn) {
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      fn(newArr.push(arr[i]))
    }
  }
  return newArr
}

filter([3, 2, 3, 5], function (x) {
})

// function filter(xs, predicate) {
//         const filtered = []
//         xs.forEach(function (x){
//                 if (predicate(x)) {
//                         filtered.push(x)
//                 }
//         })
//         console.log(filtered)
//         // return filtered
// }

// filter()
// find

function find (arr, fn) {
  const newArr = []
  const notIn = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      fn(newArr.push(arr[i]))
      break
    } else {
      fn(notIn.push(arr[i]))
    }
  }
  // console.log(newArr)
  return newArr
}

find([1, 3, 3, 4], function (x) {
})

// random

function random (min, max) {
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min
  // console.log(randomNum)
  return randomNum
}
random(5, 10)

// range

function range (start, stop, step) {
  // learned that arguments can be called if your looking at the intake of a function arguments is an array
  if (arguments.length === 1) {
    stop = start
    start = 0
    // console.log("hi")
  }
  // check to see if stop is true or false and assign the value, this is the same as step
  stop = stop || 0
  step = step || 1

  const newArr = []
  // newArr is my variable; length; then what it is increasing by
  for (newArr; (stop - start) * step > 0; start += step) {
    newArr.push(start)
    // return newArr
  }
  // console.log(newArr) // this would be a return newArr
  return newArr
}

range(10, 20, 1)

// extend
// extend
// const numbers = {'one' : 1, 'two': 2}

// const bigNumbers = {'one-hundred': 100}
// //loop over keys in obj

// for (let key in numbers) {
//     console.log(key)
// }
// //or
// Object.keys(numbers)
// this one i need help on

// function extend(arr) {

//     // name =
//     newObj = {}
//     // console.log(arr)
//     for (i = 0; i< arr.length; i++){
//         newObj.push(arr[i])
//         // console.log(newObj)
//     }
//     // console.log(newObj)
// }

// extend([{name: 'moe'}, {age: 50}])

// times

function times (num, fn) {
  const magicNum = Number(num)
  const newArr = []
  for (let i = 1; i <= magicNum; i++) {
    fn(newArr.push(i))
  }
  // console.log(newArr)
  return newArr
}
times(5, function (x) {
})

// constant

function constant (x, fn) {
  const thing = { name: x }
  const thing2 = Object.values(thing)
  let newThing = ''
  for (let i = 0; i < thing2.length; i++) {
    fn(newThing = thing2[i])
  }
  return (thing.name === newThing)
}

constant('check this out', function (x) {
})

// delay

// function delay (time, callback) {
//   const howLong = time
//   callback(howLong)
// }
function add (x, y) {
  return x + y
}
// console.log(add(1, 2), 'this is add')

function delay (fn, time, x, y) {
  setTimeout(function () {
    fn(x, y) {}
  }, time)
}

delay(add, 1000, 3, 4)

// function delay (time, callback) {
//   const math = time / 1000
//   setTimeout(function () {
//     console.log(math + ' seconds')
//   }, time)
// }
// delay(3000)

// compose

function compose (statement, name) {
  function hello () {
    const nameSelection = name
    const wow = statement
    wow.toString()
    function wowzer () {
      return nameSelection.toUpperCase()
    }
    function see () {
      wow.split('')
      // console.log(wow[3])
      return wow + ' ' + wowzer() + '!'
    }
    return see()
  }

  console.log(hello())
  return hello()
}

compose('you are the best","insert name here')
