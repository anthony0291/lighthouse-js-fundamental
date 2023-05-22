//function named smartGarbage(trash, bins)

//increases garbage count for waste, recycling, or compost

//2 arguments


let smartGarbage = function(trash, bins) { 
  
  if (trash === 'waste') {
    bins['waste']++;
  } else if (trash === 'recycling') {
    bins['recycling']++;
  } else if (trash === 'compost') {
    bins['compost']++;
  }

  let newbins = {
    waste : bins['waste'], 
    recycling : bins['recycling'],
    compost : bins['compost']
  }
  return newbins;
};
console.log(smartGarbage('recycling', { waste:4, recycling:2, compost:5 }));


 
//arg2: (bins): object with 3 properties(waste, recyling, compost) with a numerical value



//function must increase the correct value in the bins object and return newly updated object

//accss proper value in the bins object using 'trash' as the key
//use bracket notation






/**
Challenge
Instruction
Complete the logic in the function smartGarbage.

Our function will receive two arguments:

The first argument, trash, is a string that will tell our function what type of item is being submitted.
The second argument, bins, is an object containing three properties (waste, recycling, and compost), which hold some numerical value. Our function must increase the correct value in the bins object, and then return the newly updated object.
Objects in JavaScript
We will need to access the proper value in the bins object using the `trash` as the key. If you're having trouble with this, take a look online to see how to use square bracket notation to access values in a JavaScript object.

Note: When we’re referencing a variable in the bracket notation, we can skip the quotes.

 */