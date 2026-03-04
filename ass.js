//A. Part 1: Coding Questions (7.5 Grade):
//1. Convert the string "123" to a number and add 7. (0.5 Grade)
const result1 = Number("123") + 7;
console.log(result1);
//2. Check if the given variable is falsy and return "Invalid" if it is. (0.5 Grade)
function checkFalsy(value) {
  if (!value) {
    return "Invalid";
  }
  return "Valid";
}
console.log(checkFalsy(0));
//3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue (0.5 Grade)
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue;
  console.log(i);
}
//4. Create an array of numbers and return only the even numbers using filter method. (0.5 Grade)
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);
//5. Use the spread operator to merge two arrays, then return the merged array. (0.5 Grade)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2];
console.log(merged);
//6. Use a switch statement to return the day of the week given a number (1 = Sunday ...., 7 = Saturday). (0.5 Grade)
function getDay(num) {
  switch (num) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
    default:
      return "Invalid day";
  }
}
console.log(getDay(2));
//7. Create an array of strings and return their lengths using map method (0.5 Grade)
const strings = ["a", "ab", "abc"];
const lengths = strings.map((str) => str.length);
console.log(lengths);
//8. Write a function that checks if a number is divisible by 3 and 5. (0.5 Grade)
function checkDivisible(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "Divisible by both";
  }
  return "Not divisible by both";
}
console.log(checkDivisible(15));
//9. Write a function using arrow syntax to return the square of a number (0.5 Grade)
const square = (num) => num * num;
console.log(square(5));
//10.Write a function that destructures an object to extract values and returns a formatted string. (0.5 Grade)
function formatPerson(person) {
  const { name, age } = person;
  return `${name} is ${age} years old`;
}
const person = { name: "John", age: 25 };
console.log(formatPerson(person));
//11.Write a function that accepts multiple parameters (two or more) and returns their sum. (0.5 Grade)
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5));
//12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message. (0.5 Grade)
function delayedSuccess() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success");
    }, 3000);
  });
}
delayedSuccess().then(console.log);
//13. Write a function to find the largest number in an array. (0.5 Grade)
function findLargest(arr) {
  return Math.max(...arr);
}
console.log(findLargest([1, 3, 7, 2, 4]));
//14. Write a function that takes an object and returns an array containing only its keys. (0.5 Grade)
function getKeys(obj) {
  return Object.keys(obj);
}
console.log(getKeys({ name: "John", age: 30 }));
//15. Write a function that splits a string into an array of words based on spaces. (0.5 Grade)
function splitWords(str) {
  return str.split(" ");
}
console.log(splitWords("The quick brown fox"));
//B. Part 2: Essay Questions (2.5 Grade):

//1. What is the difference between forEach and for...of? When would you use each? (0.5 Grade)

//forEach: A method specifically for Arrays. It takes a callback function and executes it for every element. You cannot use break or continue here.
//for...of: A modern loop that works on all iterables (Arrays, Strings, Maps, Sets). It is more flexible because it supports break, continue, and await.
//When to use: Use forEach when you want a clean functional style for every element. Use for of if you need to stop the loop early or if you're working with something that isn't an array.

//2. What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples. (0.5 Grade)

//Hoisting is behavior of moving declarations to the top of their scope during the compilation phase
//Temporal Dead Zone (TDZ) is the period between the start of the block and the moment the variable is actually declared If you try to access a let or const variable in the TDZ you get a ReferenceError
console.log(a); // undefined
var a = 5;

console.log(b); // ReferenceError
let b = 10;

//3. What are the main differences between == and ===? (0.5 Grade)

//=== Compares both value and type
//== Compares values after performing type coercion

//4. Explain how try-catch works and why it is important in async operations. (0.5 Grade)

//In asynchronous operations things often go wrong  Without try-catch inside an async function a failed promise results in an Unhandled Promise Rejection which can stop your application.

//5. What’s the difference between type conversion and coercion? Provide examples of each. (0.5 Grade)

//Type Conversion: When you manually change the type
//Type Coercion: When JavaScript automatically changes the type.
