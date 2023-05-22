//Kata 4: Instructors Names

const instructorWithLongestName = function(instructor) {
  let currentWinner = instructor[0];
  for (let index = 1; index < instructor.length; index++) {
    if (currentWinner.name.length < instructor[index].name.length) {
      currentWinner = instructor[index];
    };
  }
  return currentWinner;
}

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));

