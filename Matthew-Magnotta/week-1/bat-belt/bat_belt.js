
// iterates over each elemenet in a list
function forEach(list,fxn){
  for (let i = 0; i < list.length; i++){
    fxn(list[i])
  };
}

// Produces a new array of values by running a fxn on each elemenet
function map(list, fxn){
  newList = []
  for (let i = 0; i < list.length; i++){
    newList.push(fxn(list[i]))
  };
  return newList
}


// produces a new array of values by running a  conditional first
function filter(list,fxn){
  filteredList = [];
  for (let i = 0; i < list.length; i++){
    if (fxn(list[i])){
      filteredList.push(list[i])
    };
  };
  return filteredList
};

// finds a filtered value from a list
function find(list,target){
  for (let i = 0; i < list.length; i++){
    console.log()
    if (list[i] == target){
      return list[i]
    };
  };
};

// returns a random integer between a min and a max
function random(min,max){
  return Math.floor(Math.random() * (max - min) ) + min;
};

//returns a list with a range of numbers
function range(start,stop,step){
  let range = []
  for(let i = start; i < stop; i += step){
    range.push(i)
  };
  return range
}

// takes properties from the source objects and places them into the destination objects
//also stuck on this one
function extend(source){
  newList = []
  for (var i=0; i<arguments.length; i++){
  Array.prototype.slice.call(arguments)
  };
  return newList
};
// runs the function n times.
function grantWish(wish) {
  return wish
}

function times(n,fxn){
  results = []
  for (i=0; i<n; i++){
    results.push(fxn)
  }
  return results
}
// console.log(times(4,grantWish('😉')))

//Creates a function that returns the same value that is used as the argument of
function constant(arg){
   dict = {
    value : arg
  }
  return dict['value']
}
// invokes function after n milliseconds
// i feel like this was too easy and i wasnt supposed to use set timeout
function delay(fxn, wait){
  setTimeout(fxn, wait);
 }


object.keys(src.forEach(funtion(key)
