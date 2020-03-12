/***********************************
* Loops and iteration
*/

// FOR LOOP

console.log('============ Loop console log output to 10 ============');

for (var i = 0; i < 10; i++) {
  console.log(i);
}

// i=0, 0<10, true, log i to the console, i++
// i=1, 1<10, true, log i to the console, i++
// i=2, 2<10, true, log i to the console, i++
// ...
// i=9, 9<10, true, log i to the console, i++
// i=10, 10<10, FALSE, exit the loop

console.log('============ Loop to 20 adding 2 each time ============');

for (var i = 1; i <= 21; i += 2) { // i+=2 is the same as writing i=i+2
  console.log(i);
}

// i=1, 1<=21, true, log i to the console, i=i+2
// i=3, 3<=21, true, log i to the console, i=i+2
// ...
// i=19, 19<=21, true, log i to the console, i=i+2
// i=21, 21<=21, FALSE, log i to the console, i=i+2
// i=23, 23<=21, FALSE, exit the loop

for (var  i = 1;
          i <= 10;
          i += 3) {
  console.log(i);
}

console.log('============ Listing all elements of an array ============');

var john = ['John', 'Smith', 1998, 'designer', false];
console.log(john[0]);
console.log(john[1]);
console.log(john[2]);
console.log(john[3]);
console.log(john[4]);

console.log('============ Doing the same but using a loop ============');

for (var i = 0; i < john.length; i++) {
  console.log(john[i]);
}

// WHILE LOOP

console.log('============ Can also use a While loop instead ============');

var i = 0;
while(i < john.length) {
  console.log(john[i]);
  i++;
}

console.log('============ Continue Statement (ignores anything that is not a string): ============');

// Continue and break statements
var john = ['John', 'Smith', 1998, 'designer', false];
for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') continue; // !== means different
  console.log(john[i]);
}

console.log('============ Break Statement (breaks out of the loop when reaching something that is not a string): ============');

for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') break; // !== means different
  console.log(john[i]);
}

console.log('============ Loop through john array in reverse ============');

for (var i = john.length - 1; i >= 0; i--) { // Length of array -1 because numbering starts at 0 (not 1)
  console.log(john[i]);
}
