// 1
function reverseString(a){
    return a.split("").reverse().join("");
 }
 console.log(reverseString("hello"))

// 2

function count(wisdom){
 console.log(wisdom.split("").length)
}
count("michael")

// 3

function Capitalize(arr){
    let store1 = arr.split(" ");

 for(let i = 0; i<store1.length; i++){
    store1[i] = store1[i].charAt(0).toUpperCase() + store1[i].slice(1);

 }
 return console.log(store1.join(" "));
}
4
Capitalize("wisdom will be a good developer")

function findMax(arr){
    let max = arr[0];
for(let i = 1 ; i<arr.length; i++){
if( arr[i] > max ){
    max = arr[i]; }
}
return max;
}

let numbers = [10,20,100,200,300,400];
console.log ( findMax(numbers) )

// 5

function findMin(arr){
    let min = arr[0] ;
    for(let i = 1; i<arr.length; i++){
if( arr[i] < min  ){
min = arr[i];
}
}
return min;
    
}
let num = [10,20,100,200];
console.log (findMin(num))

// 6
// sum of array

function sumofarray(arr){
    let store = 0;
    for(let i = 0; i<arr.length; i++){
        store = store + arr[i] 
    }
    return console.log ( store )
    }
    let array= [10,20,30,40,50];
    sumofarray(array);


// 7
// Filter Array

let myarray = [-2,-1,0,1,20];
function filterfun(a,i){
    return a>10;
}

function mainfun(arr,fun){
let emptyarray =[];
for(let i =0; i<arr.length; i++){
    if (fun (arr[i],i )){
    emptyarray.push(   arr[i] ) 
}

}
return emptyarray;
}
console.log ( mainfun(myarray, filterfun) )

// 8
// factorial

function factorial(a){
    let b = 1;
    
    for(let i = a; i > 1; i--){
        b*=i;
    }
    return b;
}
console.log ( factorial(10) );


//9 prime numbers
function checkprime(n){
    if(n==2 || n==3 || n==7){
        console.log("a prime number")
    }
    else if(n % 2 == 0 || n % 3 == 0 || n % 7 == 0 ){
console.log("not a prime number")
    } else {
        console.log("prime number")
    }
 }
checkprime(7)


// 10 fibb
function fibb(a){
    let arr = [0,1];
for(let i = 2; i<a; i++){
arr[i] = arr[i-1] + arr[i-2]
}
return arr;

}
console.log ( fibb(7) )


function addNum(number){
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        sum = sum + i;
    }
    return sum;
}

console.log(addNum());

function addingEvenNum(number){
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        if (i % 2 === 0) {
            sum = sum + i; 
        }
    }
    return sum;
}

console.log(addingEvenNum(12));


function addingOddNum(number){
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        if (i % 2 !=0) {
            sum = sum + i; 
        }
    }
    return sum;
}

console.log(addingOddNum(11));



function addEven(num) {
    let sum = 0;
    let i=0;
    while (i>=num) {
        sum = sum + i;
        i++;

    }
    return sum;

        
    }

    console.log(addEven(10));
    

