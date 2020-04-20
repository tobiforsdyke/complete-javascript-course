/***********************************
* Truthy and Falsy values and equality
*/

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

// If variable (below) has nor been defined (commented out here) then the else statement is correct:
var height;
// height = 29;

if (height) {
  console.log('Variable is defined.');
} else {
  console.log('Variable has NOT been defined.');
}

// If variable (below) has been defined but is also 0 then the if statement looks for either defined or === 0:
var height;
height = 0;

if (height || height === 0) {
  console.log('Variable is defined.');
} else {
  console.log('Variable has NOT been defined.');
}

// Equality operators - does type coercion so recognises the 23 below whether it is a string or a number - this could cause bugs when using == so should always use === to avoid this
height = 23;

if (height == '23') {
  console.log('The == operator does type coercion!');
}
if (height === '23') {
  console.log('The == operator does type coercion!');
} else {
  console.log('The === operator does not do type coercion so better to avoid errors/bugs');
}
