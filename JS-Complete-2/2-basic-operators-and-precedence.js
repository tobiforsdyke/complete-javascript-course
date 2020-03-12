/****************************************
* Basic operators
*/

// var now = 2020;
// var yearJohn = now - 28;
// var yearMark = now - 33;

var now, yearJohn, yearMark, ageJohn, ageMark;
now = 2020;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn, yearMark);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators

var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// Typeof operator

console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'String of text');
var x;
console.log(typeof x);

console.log('==================================');

/****************************************
* Operator precedence
*/

var now = 2020;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = now - yearMark;
var averageWrong = ageJohn + ageMark / 2;
var averageCorrect = (ageJohn + ageMark) / 2;
console.log('Wrong average: ' + averageWrong);
console.log('Correct average: ' + averageCorrect);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x);
console.log(y);

// More operators
x *= 2;
console.log(x); // Same as saying x = x * 2
x += 10;
console.log(x); // Same as saying x = x + 10
x = x + 1;
console.log(x);
x += 1;
console.log(x); // Same as saying x = x + 1
x++
console.log(x); // Same as saying x += 1
