/*************************
* This one file is from section 3
*/

///////////////////////////////////////
// Execution contexts and the execution stack

console.log('=========== functions executed in a stack ===========');

var name = 'John';

function first() {
  var a = 'Hello!';
  second();
  var x = a + name + ' (x)';
  console.log(x);
}

function second() {
  var b = 'Hi!';
  third();
  var y = b + name + ' (y)';
  console.log(y);
}

function third() {
  var c = 'Hey!';
  var z = c + name + ' (z)';
  console.log(z);
}

first();


///////////////////////////////////////
// Hoisting functions

console.log('=========== execution can be before the function is declared ===========');

calculateAge(1990);

function calculateAge(year) {
  console.log(2020 - year);
}

// calculateAge(1990);


console.log('=========== execution cannot be before the function is declared ===========');

// retirement(1990);

var retirement = function(year) {
  console.log(65 - (2020 - year));
}

retirement(1990);


///////////////////////////////////////
// Hoisting variables

console.log('=========== Cannot use a variable before it is declared ===========');

console.log(age);
var age = 23;
console.log(age);


function foo() {
  console.log(age);
  var age = 65;
  console.log(age);
}
foo();
console.log(age);


///////////////////////////////////////
// Lecture: Scoping


// First scoping example

console.log('=========== Here each level of the scope has access to the previous variables ===========');

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}




// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third();
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

console.log('=========== this keyword relates to the window ===========');

console.log(this);

console.log('=========== this keyword points to global object ===========');

function calculateAge(year) {
  console.log(2020 - year);
  console.log(this);
}
calculateAge(1985);

console.log('=========== first two this keywords refers to john object ===========');
console.log('=========== third this keyword refers to global window ===========');

var john = {
  name: 'John',
  yearOfBirth: 1990,
  calculateAge: function() {
    console.log(this);
    console.log(2020 - this.yearOfBirth);

    // function innerFunction() {
    //   console.log(this);
    // }
    // innerFunction();
  }
}
john.calculateAge();

// Method borrowing:
// Borrowing Method from john object above (the function inside an object is called a method)

var mike = {
  name: 'Mike',
  yearOfBirth: 1984
}

mike.calculateAge = john.calculateAge; // Creates the method calculateAge inside mike object and set it as the same as the john object
// mike.calculateAge();
console.log(mike);
