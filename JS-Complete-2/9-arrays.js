/***********************************
* Arrays
*/

// Two different ways of writing an array. First way is more common and cleaner. Items in the array are numbered as 0, 1, 2 etc.
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

// This will show the first name:
console.log(names[0]);
// This will show the second name:
console.log(names[1]);
// This will show the third name:
console.log(names[2]);
// This will show the entire array:
console.log(names);
// This shows the length of the array:
console.log(names.length);

// Change one of the values in an array:
names[1] = 'Ben';
console.log(names);

// Add an item to an existing array:
// Because 5 was picked it adds 2 empty items (6 in total)
names[5] = 'Mary';
console.log(names);

// Add an item at the end of an array:
names[names.length] = 'LastName';
console.log(names);

console.log('========= PUSH, UNSHIFT, POP & SHIFT =========');

// Different data types in one array:
var john = ['John', 'Smith', 1998, 'teacher', false];
var mark = ['Mark', 'Johnson', 1984, 'designer', false];
// Push adds an item to the end of the array:
john.push('blue');
// Unshift adds an item to the beginning of the array:
john.unshift('Mr.');
console.log(john);
// Pop removes the last item from the array:
john.pop();
console.log(john);
// More than one Pop removes the last items from the array:
john.pop();
john.pop();
john.pop()
console.log(john);
// Shift removes the first item from the array:
john.shift();
console.log(john);

// indexOf shows the index position of the item passed into the brackets:
console.log(john.indexOf('Smith'));

// If an item is not in an array then indexOf returns -1. This can be used as below, if 'designer' is not in the array then -1 is returned and the first statement is displayed, else the second statement is displayed:
var isDesigner = mark.indexOf('designer') === -1 ? 'Mark is NOT a designer.' : 'Mark is a designer.';
console.log(isDesigner);
