let num = 100;

while (num <= 200) {
  if (num % 3 === 0 && num % 4 === 0){
    console.log("LoopyLighthouse");
    num++; 

  } else if(num % 3 === 0) {
    console.log("Loopy");
    num++;
  
  } else if (num % 4 ===0){
    console.log("Lighthouse");
    num++;
  
  }else {
  console.log(num);
  num++;
  }
}
