/*********************************************
* BIND, CALL AND APPLY
*/

var john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function(style, timeOfDay) {
    if (style === 'formal') {
      console.log('Good ' + timeOfDay + ' ladies and gentlemen. I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
    } else if (style === 'friendly') {
      console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '!');
    }
  }
}

var emily = {
  name: 'Emily',
  age: 35,
  job: 'designer'
}

john.presentation('formal', 'morning');
john.presentation('friendly', 'afternoon');

// CALL METHOD:
// Method borrowing: 'call' emily and then emily becomes the 'this' part in John's method above
john.presentation.call(emily, 'friendly', 'evening');

// APPLY METHOD:
//Can also use apply method passing the other variables in as an array:
// john.presentation.apply(emily, ['formal', 'afternoon']);

// BIND METHOD:
// First argument is to set the 'this' variable (john), second argument is friendly, third argument is used in the function below it (timeOfDay)
var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('evening');

console.log('============ real world example ============');

var years = [1990, 1965, 1937, 2005, 2000];

function arrayCalc(arr, fn) {
  var arrResult = [];
  for (var i = 0; i < arr.length; i++) {
    arrResult.push(fn(arr[i]));
  }
  return arrResult;
}

function calculateAge(el) {
  return 2020 - el;
}

function isFullAge(limit, el) {
  return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullAgeJapan = arrayCalc(ages, isFullAge.bind(this, 20));
var fullAgeUS = arrayCalc(ages, isFullAge.bind(this, 21));

console.log(ages);
console.log(fullAgeJapan);
console.log(fullAgeUS);
