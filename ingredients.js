const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
};


// Write a for loop that prints out the contents of ingredients:
for (let i1 = 0; i1 < ingredients.length; i1++) {
  console.log(ingredients[i1]);  
};


// Write any loop (while or for) that prints out the contents of ingredients backwards:

let ind = ingredients.length-1;
while (ind > -1) {
  console.log(ingredients[ind]);
  ind = ind - 1;
};

