//Percent Encoded String
//replace all white space with %20
const urlEncode = function(text) {
  let newText = text.trim();
  for (let i = 0; i < text.length; i++) {
    newText = newText.replace(" ","%20");
  }
  return newText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));


/** let test = " hi boss ";
test = test.trim(test);
test = test.replace(" ","%20");
test = test.replace(" ","%20");
test = test.replace(" ","%20");

console.log(test);*/