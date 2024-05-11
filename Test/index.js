console.log("1)Write a JavaScript for loop that iterates from 0 to 10 and prints only the even numbers.");


for(var i=1;i<=10;i++)
  if(i%2===0){
    console.log(i)

  }




console.log("2)Write a JavaScript while loop that calculates the factorial of a given number.");

function factorial(n){


  let result = 1;
  let i = 1;

  while(i <= n){

    result*=i;
    i++;
  }

  return result;
}

const number =5;
console.log("Factorial of", number, "is", factorial(number));

console.log("3)Create a JavaScript function that takes an array of numbers as input and returns the sum of all the numbers using a for loop.");



var array =[1,2,8,9,4];
sum = 0;

function sumofArray(){

  for(i=0;i<array.length;i++)
  {
    sum=sum+array[i];
  }
console.log(sum)
}

 sumofArray();


console.log("4)Write a JavaScript program that generates a Fibonacci sequence up to a certain number n, using a while loop.");


let num=5,
fact=1,
i1=1;
while(i1<=num){
    fact=fact*i1;
    i1++;
}
console.log(fact);




console.log("5)Create a JavaScript function that takes an array of strings as input and returns a new array with only the strings that have a length greater than 5 characters.");

const inputArray = ["apple", "banana", "orange", "kiwi", "pineapple", "grape"];
function filterStringsByLength(arr) {
  return arr.filter(str => str.length > 5);
}


const filteredArray = filterStringsByLength(inputArray);
console.log(filteredArray);

console.log("6)Write a JavaScript function that takes a number as input and returns true if it is a prime number, otherwise false.");



let val=20;
function Prime(val){

  for(let i =2;i<=20;i++){

    if (val%i===0){

      return false;
    }else{

      return true;
    }
  }
}
console.log(Prime(val));

Prime(val);



console.log("7)Create a JavaScript program that calculates the sum of all numbers from 1 to 1000 that are divisible by both 3 and 5.");

for(let i=1;i<=1000;i++){

  if(i%3 ===0 && i%5===0){

    console.log(i)
  }
}


console.log("8)Write a JavaScript function that takes a string as input and returns the reverse of the string using a for loop.");



let string= "AARTI";
function reverse(string){
  let newstr ='';
for(let i=string.length-1;i>=0;i--){

 newstr += string[i];
}
return newstr;
}
console.log("reversestring is :",reverse(string));

console.log("9)Create a JavaScript program that generates a random password of a specified length, consisting of letters (both uppercase and lowercase) and numbers.");


const passwordLength = 10;
function randomPwdGen(length){
  const char="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let pwd='';

  for(let i=0;i<length;i++){
    const randomvalue = Math.floor(Math.random()*char.length);
    pwd +=char[randomvalue];
  }
return pwd;

}
const randompass = randomPwdGen(passwordLength);
console.log("randompass:"+randompass);

console.log("10)Write a JavaScript function that takes an array of numbers as input and returns the maximum difference between any two numbers in the array.");


function maxDiff(arrr){

  var max= -1;
  var temp ;
  for(var i =0;i<arrr.length-1;i++){

    temp =Math.abs(arrr[i]-arrr[i+1]);
    max = Math.max(max,temp);
  }
  return max;
}

console.log(maxDiff([1,9,5,6,3,3]));
console.log(maxDiff([4,5,6,1,3,8]));
