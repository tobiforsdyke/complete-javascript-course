/***********************************
* if / else statements
*/

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
  console.log(firstName + ' is married.');
} else {
  console.log(firstName + ' is not married.');
}

var isMarried = true;
if (isMarried) {
  console.log(firstName + ' is married.');
} else {
  console.log(firstName + ' is not married.');
}

/***********************************
* Boolean logic
*/

var firstName = 'John';
var age = 16;

if (age < 13) {
  console.log(firstName + ' is a child.');
} else if (age >= 13 && age < 20) {
  console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
  console.log(firstName + ' is a young adult.');
}
else {
  console.log(firstName + ' is an adult.');
}

/***********************************
* Ternary operator and switch statements
*/

var firstName = 'John';
var age = 16;

// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

console.log(firstName + ' is ' + age + ' years old and so drinks ' + drink + '.');

/* The above ternary operator is the same as writing the following else if statement, neater to look at but not suitable for more complicated else if statements
if (age >= 18) {
  var drink = 'beer';
} else {
  var drink = 'juice';
}*/

// Switch statement
var job = 'teacher';

switch (job) {
  case 'teacher':
  case 'instructor':
    console.log(firstName + ' teaches in school.');
    break;
  case 'driver':
    console.log(firstName + ' drives a bus.');
    break;
  case 'designer':
    console.log(firstName + ' designs websites.');
    break;
  default:
    console.log(firstName + ' does something else.');
}

// The boolean example above (and shown below) but made as a switch statement instead
// var firstName = 'John';
// var age = 16;
//
// if (age < 13) {
//   console.log(firstName + ' is a child.');
// } else if (age >= 13 && age < 20) {
//   console.log(firstName + ' is a teenager.');
// } else if (age >= 20 && age < 30) {
//   console.log(firstName + ' is a young adult.');
// }
// else {
//   console.log(firstName + ' is an adult.');
// }
var firstName = 'John';
var age = 32;

switch (true) {
  case age < 13:
    console.log(firstName + ' is a child.');
    break;
  case age >= 13 && age < 20:
    console.log(firstName + ' is a teenager.');
    break;
  case age >= 20 && age < 30:
    console.log(firstName + ' is a young adult.');
    break;
  default:
    console.log(firstName + ' is an adult.');
}
