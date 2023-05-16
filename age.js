


const ageCalculator = function (nameofPerson, ageofBirth, currentYear) {
  let age = currentYear - ageofBirth;
  let finalAnswer = nameofPerson + " is " + age + " years old.";
  return finalAnswer;
  console.log(finalAnswer);
} 

 

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));