const howManyHundreds = function (bos) {
  let casesSent = bos / 100;
  return Math.floor(casesSent);
}
console.log(howManyHundreds(55));
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);