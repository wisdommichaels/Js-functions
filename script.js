function addEven(num) {
    let sum = 0;
    let i = 0;
    while (i <= num) {
        if (i % 2 != 0) {
            i++;
          continue;
        }
        sum = sum + i;
        i++;

    }
    return sum;
        
    }

    console.log(addEven(10));


function addE(num){
  let accum = 0;
  let i = num;
while (i>0) {
  if (i % 2 != 0) {
    i--;
    continue;
  }
  accum+= i;
  i--;
  
}
return accum;
}
console.log(addE(10));


function addNum(num){
  let sum = 0;
  for (let index = num; index > 0; index--) {
    sum = sum + index;
  
  }
  return sum;
}
console.log(addNum(10));

const name1 = prompt("whats your name")
const name2 = prompt("whats your name")
let num = Math.random () * 100;

num=Math.floor(num) + 1;

alert("their percentage is " + num + " %");

