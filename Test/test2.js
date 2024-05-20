// test - 2



// array=[1,2,3,4,5];
// array1=[];
// function square(array){
//     for(var i=0;i<array.length;i++){
//         // console.log(array[i])
//         var squre1=array[i]*array[i];
//         array1.push(squre1);
//     }
//     return array1
// }

// const array2=square(array);
// console.log(array2);



// Question 2:
// Create a JavaScript function that checks if a given string is a palindrome (reads the same forwards and backwards).

// Input: "madam"



// function palindrome(name){


//   var str=""

//   for(var i=name.length-1;i>=0;i--)
// {

//     str +=name[i];
// }

// if(name===str){

//   console.log("true")
// }
// else{

//   console.log("false")
// }
// }
// palindrome("madam");




// Question 3:
// Write a JavaScript function that takes two arrays as input and returns a new array that contains only the elements that are present in both arrays (intersection).
// array1=[1,2,3,4];
// array2=[3,4,5,6];

// array3=[]

// function intersection(array1,array2){
//       for(var i=0;i<array1.length;i++){
//           for(var j=0;j<array2.length;j++){
//               // console.log(array1[i],array2[j])
//               if(array1[i]===array2[j]){
//                   array3.push(array1[i])
//               }
//           }
//       }
//       return array3
//   }
  
//   const array4=intersection(array1,array2);
//   console.log(array4)




// Question 4:
// Create a JavaScript function that takes an object and a key as input, and returns the value associated with that key in the object. If the key does not exist, return a default value.

// Input: {name: "Alice", age: 25}, "name"

// var info = {name: "Alice", age: 25}


// function fetchkey(){
// console.log(info.name);


// }
// fetchkey(info)







// Question 5:
// Write a JavaScript function that takes a number as input and returns an array of its digits.

// Input: 12345





// var number2 =[];

// function digit(number){

// var number1;
// number1 = number.toString();
// for(var i=0;i<number1.length;i++)
// {

//   number3 = i+1;
//   number2.push(number3)
// }


// return number2;
// }
// const numarray = digit(12345)

// console.log(numarray)
// Question 6:
// Create a JavaScript function that takes a string as input and returns a new string with each character duplicated (e.g., "hello" becomes "hheelllloo").

// Input: "hello"



// function duplicateval(str)

// {


//   for(var i=0;i<str.length;i++){


//     var str2='';
//     str2 +=str[i]+str[i];
//     console.log(str2)
//   }
// }
// duplicateval("hello")




// Question 7:
// Write a JavaScript function that takes an array of objects and a key, and returns an array containing the values associated with that key from each object.

// Input: [{name: "Alice"}, {name: "Bob"}, {name: "Charlie"}], "name"

// var info= [{name: "Alice"}, {name: "Bob"}, {name: "Charlie"}];
// function fetchval(){

//   for(let key in info)
//     {

//       console.log(info[key])
//     }
// }
// fetchval(info);



// Question 8:
// Create a JavaScript function that takes a sentence as input and returns the number of words in the sentence.

// Input: "This is a sample sentence."





// // Question 9:
// // Write a JavaScript function that takes an array of numbers and returns the second smallest number in the array.

// // Input: [10, 2, 14, 5, 7]


// array=[10,2,14,5,7]
// function smallNum(array){
// array.sort((a,b)=>a-b);
// return array[1];

// }
// console.log(smallNum(array));




// Question 10:
// Create a JavaScript function that takes a date object and returns a formatted string in the format "YYYY-MM-DD".

// Input: new Date(2024, 4, 15)


// date=[2024, 4, 15]
// function newDate(date){

//   a=date.slice(0,1);
//   b=date.slice(1,2);
//   c = date.slice(2);
//   d = a +'-'+ b+'-'+ c;
// console.log(d)
// }

// newDate(date)