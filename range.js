//build a function that creates an array for a given start, end, and step parameter.
// Define a function called range

// The function takes 3 integer parameters: start, end, and step.
// The function should return an array of numbers from start to end counting by step.

// The function should return an empty array [] if given incorrect parameters



let range = function (start, end, step) {
  
  if (start === undefined || end === undefined || step === undefined) {
    return [""];

  } else if (start >= end) {
    return [""];

  } else if (step <= 0) {
    return [""];
  
  } else { 
    let myNewArray = [];
    while (start <= end) {
      myNewArray.push(start);
      start = start + step;
    }
    return myNewArray;
  }
}; 

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
