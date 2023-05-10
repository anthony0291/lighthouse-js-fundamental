
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}


let myString = function string(str) {
  let myString = str;
}

let myFunc = function(max) {
  let sound = "";
  for (let x = 0; x < max; x++) {
    sound = sound + "ha";
  }
  return sound;
}



console.log(emotions("happy",3));



/*
 * Programming Quiz: Inline Functions (5-6)
 */
 
 /*
 * QUIZ REQUIREMENTS
 * - Your code should have an `emotions()` function
 * - Your code should call the `emotions()` function
 * - Your `emotions()` function call should have an inline function expression passed as the second parameter
 * - Your function expression should return the expected output
 */


// don't change this code
// emotions() function definition
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

let myString = function(str) {
  myString = str;
  return myString;
};



let myFunc = function(length) {
  let sound = "";
  for (let y = 0; y < length; y++) {
    sound = sound + "ha";
}/* finish the function expression */
sound = sound + "!";
return sound;
};

console.log(emotions("happy",3));

// your code goes here
// Call the emotions() function with two arguments
// Argument 1 - "happy" string
// Argument 2 - an inline function expression