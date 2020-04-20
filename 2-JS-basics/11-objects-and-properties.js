/***********************************
* Objects and Properties
* Objects and Methods
*/

// Object literal
// Arrays use [] square brackets, objects use {} curly

var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false
};

console.log(john);

console.log(john.firstName); // Use a . to access a property inside an object
console.log(john['lastName']); // Can also use square brackets but the property needs to be a string
var x = 'birthYear' // Can even define a string (with same name as a property) as a variable to use as below (could come in handy?)
console.log(john[x]);

// Mutate the data in an object:
john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// New object syntax
// Creating a new object and filling it up:

var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);


// METHODS

// var john = {
//   firstName: 'John',
//   lastName: 'Smith',
//   birthYear: 1990,
//   family: ['Jane', 'Mark', 'Bob', 'Emily'],
//   job: 'teacher',
//   isMarried: false,
//   calcAge: function(birthYear) {
//     return 2020 - birthYear;
//   }
// };

// console.log(john.calcAge(1990));

// Using 'this' instead of the argument name:
var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false,
  calcAge: function() {
    this.age = 2020 - this.birthYear; // adding 'this' instead of function argument
  }
};

console.log(john.calcAge());

// var age = john.calcAge();
// john.age = age;

// Above but on one line:
// john.age = john.calcAge();

john.calcAge();
console.log(john);
