/***********************************
* Coding challenge 1
*/

/*
Mark and John are trying to compare their BMI (body mass index) which is calculated using the formula:

BMI = mass / height^2 = mass / (height * height)
(msss in kg and height in meter)

1. Store Mark's and John's mass and height in cariables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John
4. Print a string to the console containing the variable from step 3. (something like "Is Mark's BMI higher than John's? true").
*/

var markHeight = 1.8; // m
var markWeight = 62; // kg

var johnHeight = 2; // m
var johnWeight = 59; // kg

var markBMI = markWeight / (markHeight * markHeight);
var johnBMI = johnWeight / (johnHeight * johnHeight);

var isMarkHigher = markBMI > johnBMI;

console.log('Mark\'s height is ' + markHeight + 'm and his weight is ' + markWeight + 'kg.');
console.log('Johns\'s height is ' + johnHeight + 'm and his weight is ' + johnWeight + 'kg.');
console.log('Mark\'s BMI is: ' + markBMI);
console.log('John\'s BMI is: ' + johnBMI);

console.log('Is Mark\'s BMI higher than John\'s?: ' + isMarkHigher);

// Convert KM to Miles with a prompt
console.log('=============================');

var km = prompt('How far did you run in km?');
var miles = km * 0.621371;

console.log('You ran ' + miles + ' miles.');

console.log('=============================');

// First challenge but with added if else statement
var markHeight = 1.8; // m
var markWeight = 62; // kg

var johnHeight = 2; // m
var johnWeight = 59; // kg

var markBMI = markWeight / (markHeight * markHeight);
var johnBMI = johnWeight / (johnHeight * johnHeight);

if (markBMI > johnBMI) {
  console.log('Mark\'s BMI is higher than John\'s');
} else {
  console.log('Mark\'s BMI is lower than John\'s');
}
