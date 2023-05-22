

let carPassing = function(cars, speed) { //(cars,speed)
  let newCars = cars;

  let newObject = {
    time : Date.now(speed),
    speed : speed
  };
  
  newCars.push(newObject);
  return newCars;
 
};

  
const cars = [
  {
    time: 1568329654807,
    speed: 40
  },
  {
    time: 1568329821632,
    speed: 42
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38

console.log(carPassing(cars, speed));

// returns:
/*[
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  },
  {
    time: 1568431216417,
    speed: 38
  }
]*/

//cars arg = arry of car objects
//speed arg= speed of car as it passes sensor
//function should create new obj with property called speed and propty called time and add it to the cars array
//use current time for setting time property with Date.now()

//function should return an array that includes all elements in cars as well as new element
//may need to use .push()