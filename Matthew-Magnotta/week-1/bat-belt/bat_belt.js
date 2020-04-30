
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
function times(n,fxn){
  iterations = []
  for (let i = 0; i < n; i++){
    iterations.push(fxn)

  };
  return iterations
}
console.log(times(3,function add(a,b){
 return a + b

}))
