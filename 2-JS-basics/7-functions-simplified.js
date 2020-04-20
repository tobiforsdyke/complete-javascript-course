/***********************************
* Functions Simplified
*/

// Simple function:

function go(){
  alert('Hi');
  alert('Tobi');
}

go();

// Simple function passing in arguments:

function go2(name, age){
  alert(name);
  alert(age);
}

go2('Tobi', 45);
go2('Helen', 40);

// Simple addition function:

function add(first, second) {
  return first + second;
}

var sum = add(1, 2);
alert(sum);


// OTHER

function greeting() {
  console.log('Hello World!');
}

greeting();

// OTHER with inputs

function greet(name) {
  console.log('Hello ' + name);
}

greet('Jimbo');
greet('Mary');
greet('Me!');
