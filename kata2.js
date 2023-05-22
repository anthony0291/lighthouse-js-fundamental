
const conditionalSum = function(value, condition) {
  let popValue = 0;
  if (condition === 'even') {
   
    for (let i = 0; i <= value.length; i++) {
      if (value[i] % 2 === 0) {
        popValue = popValue + value[i]
      }
    }
    return popValue;
  }else if (condition === 'odd') {
    for (let i = 0; i<= value.length; i++) {
    if (value[i] % 2 === 1) {
      popValue = popValue + value[i]
    }
  }
  return popValue;
  }
};

  console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
  console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
  console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
  console.log(conditionalSum([], "odd"));