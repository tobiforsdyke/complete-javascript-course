/***********************************
* Variables and data types
*/

/*
var firstName = 'John';
var lastName = 'Smith';
var age = 28;
var fullAge = true;

console.log(firstName + ' ' + lastName);

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and Mark';
var $3years = 3;
*/

/***********************************
* Variable mutation and type coercion
*/

var firstName, lastName, age, fullAge, job, isMarried;
firstName = 'John'
lastName = 'Smith';
age = 28;
fullAge = true;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' ' + lastName + ' is ' + age + ' years old and is a ' + job + '. Married? ' + isMarried );

//Variable mutation

age = 'twenty eight';
job = 'driver';

alert(firstName + ' ' + lastName + ' is ' + age + ' years old and is a ' + job + '.' );

console.log(firstName + ' ' + lastName + ' is ' + age + ' years old and is a ' + job + '. Married? ' + isMarried );

// The following prompt is useless as the data is not being used anywhere

prompt('What is his last name?');

// Wrap the prompt in a var tag to make it a variable so the data can be used elsewhere

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);

// Weird experiments I found online

console.log('This is %cred text %cand this is %cgreen text.', 'color: red;font-size: 24px;', '', 'color:green; font-size: 24px;');

console.log('%cHello there!', `
  background: white;
  border: 3px solid red;
  color: red;
  font-size: 50px;
  margin: 40px;
  padding: 20px;
`);

const clearStyles = '';
const largeText = 'font-size: 20px;';
const yellowText = 'color: yellow;';
const largeRedText = 'font-size: 20px; color: red;';
const largeGreenText = 'font-size: 20px; color: green;';
 
console.log(`This is %clarge red text.
%cThis is %clarge green text.
%cThis is %clarge yellow text.`,
  largeRedText,
  clearStyles,
  largeGreenText,
  clearStyles,
  largeText + yellowText
);
