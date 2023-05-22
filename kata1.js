const sumLargestNumbers = function(data) { //solution goes here 
  let largestA = 0;
  let largestB = 0;
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] >= largestA) {
      largestB = largestA;
      largestA = data[i];
    } else if (data[i] > largestB && data[i] < largestA) {
      largestB = data[i];
    } 
  }
  sum = largestA + largestB;
  return sum;
}


console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));