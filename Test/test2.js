// test - 2
// Question 1:
// Write a JavaScript function that takes an array of numbers as input and returns a new array with each number squared.

// Input: [1, 2, 3, 4, 5]


function squareArray(number){

  return number.map(num =>num*num);

}
const input = [1,2,3,4,5];
const sqnum=squareArray(input);
console.log("sqnum"+input);



// Question 2:
// Create a JavaScript function that checks if a given string is a palindrome (reads the same forwards and backwards).

// Input: "madam"


function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    // Compare the clean string with its reverse
    return cleanStr === cleanStr.split('').reverse().join('');
}

// Test the function
console.log(isPalindrome("madam")); // Output: true


// Question 3:
// Write a JavaScript function that takes two arrays as input and returns a new array that contains only the elements that are present in both arrays (intersection).

// Input: [1, 2, 3, 4], [3, 4, 5, 6]

// Question 4:
// Create a JavaScript function that takes an object and a key as input, and returns the value associated with that key in the object. If the key does not exist, return a default value.

// Input: {name: "Alice", age: 25}, "name"

// Question 5:
// Write a JavaScript function that takes a number as input and returns an array of its digits.

// Input: 12345


function Digits(num1){

  const num2 =num1.toString();

return num2.split('').map(digit => parseInt(digit));
}

const input1 =12345;

console.log("nubers are::::"+Digits(input1))
// Question 6:
// Create a JavaScript function that takes a string as input and returns a new string with each character duplicated (e.g., "hello" becomes "hheelllloo").


function duplicateChar(str){

  return str.split('').map(char => char+char).join('');
}

const inputs = "hello";
  console.log(duplicateChar(inputs));
 

// Input: "hello"

// Question 7:
// Write a JavaScript function that takes an array of objects and a key, and returns an array containing the values associated with that key from each object.

// Input: [{name: "Alice"}, {name: "Bob"}, {name: "Charlie"}], "name"

// Question 8:
// Create a JavaScript function that takes a sentence as input and returns the number of words in the sentence.

// Input: "This is a sample sentence."




function word(sent){
const words =sent.split(/\s+/);
return words.length;
}
const arrword = "This is a sample sentence.";
console.log(word(""+arrword));
// Question 9:
// Write a JavaScript function that takes an array of numbers and returns the second smallest number in the array.

// Input: [10, 2, 14, 5, 7]

// Question 10:
// Create a JavaScript function that takes a date object and returns a formatted string in the format "YYYY-MM-DD".

// Input: new Date(2024, 4, 15)


