/*********************************************
* FUNCTION CONSTRUCTORS
*/

/*
// Simple way to create an object
var john = {
  name: 'John',
  yearOfBirth: 1990,
  job: 'teacher'
};
*/

// CREATE A PROTOTYPE
// Create a 'Person' prototype (use capital first letter as convention):
var Person = function(name, yearOfBirth, job) {
   this.name = name;
   this.yearOfBirth = yearOfBirth;
   this.job = job;
};

// Add the calculateAge function to the Person prototype:
Person.prototype.calculateAge = function() {
  console.log(2020 - this.yearOfBirth);
};

// Create the objects using the Person prototype as a template:
var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

// The calculateAge function can be called on these objects as it has been included in the prototype template:
john.calculateAge();
jane.calculateAge();
mark.calculateAge();

// Example of adding other properties to the objects in the template (will all end up with the same lastName property though):
Person.prototype.lastName = 'Smith';

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);


/*********************************************
* OBJECT.CREATE
*/
/*
var personProto = {
  calculateAge: function() {
    console.log(2020 - this.yearOfBirth);
  }
};

// 2 different ways of creating the objects from the personProto prototype:
var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
  name: { value: 'Jane' },
  yearOfBirth: { value: 1969 },
  job: { value: 'designer' }
});

console.log(john);
console.log(jane);
*/

console.log('============= Primitives vs Objects =============');
/*********************************************
* PRIMITIVES VS OBJECTS
*/

// VARIABLES
// Variable holds its own copy of the data (primitives):
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

// OBJECTS
// Object property gets changed in both objects:
var obj1 = {
  name: 'John',
  age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// FUNCTIONS
// Function changes properties in two different variables:
var age = 27;
var obj = {
  name: 'Jonas',
  city: 'Lisbon'
};

function change(a, b) {
  a = 30;
  b.city = 'San Francisco';
}

change(age, obj.city);

console.log(age);
console.log(obj.city);
