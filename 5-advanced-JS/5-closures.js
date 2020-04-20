/*********************************************
* CLOSURES

An inner function always has access to the variables and parameters of its outer function, even after the outer function has returned.

*/

function retirement(retirementAge) {
  var a = ' years left until retirement.';
  return function(yearOfBirth) {
    var age = 2020 - yearOfBirth;
    console.log((retirementAge - age) + a);
  }
}

var retirementUS = retirement(66);
retirementUS(1990);
retirement(66)(1990);

var retirementGermany = retirement(65);
var retirementIceland = retirement(67);
var retirementUK = retirement(66);

retirementGermany(1990);
retirementUS(1998);
retirementIceland(1996);
retirementUK(1974);

console.log('=========== Rewriting interview functions using closers ============');

/* INSTEAD OF THIS FROM FUNCTIONS RETURNING FUNCTIONS:
function interviewQuestion(job) {
  if (job === 'designer') {
    return function(name) {
      console.log(name + ', can you please explain what UX design is?');
    }
  } else if (job === 'teacher') {
    return function(name) {
      console.log('What subject do you teach ' + name + '?');
    }
  } else if (job === 'driver') {
    return function(name) {
      console.log('What do you drive ' + name + '?');
    }
  } else {
    return function(name) {
      console.log('Hello ' + name + ', what do you do?');
    }
  }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
teacherQuestion('John');
teacherQuestion('Mary');
designerQuestion('Mark');
designerQuestion('Jane');
*/

function interviewQuestion(job) {
  return function(name) {
    if (job === 'designer') {
      console.log('Can you explain what UX is ' + name + '?');
    } else if (job === 'teacher') {
      console.log(name + ', what subject do you teach?');
    } else if (job === 'driver') {
      console.log('What vehicle do you drive ' + name + '?');
    } else {
      console.log('Hello ' + name + '. What do you do?');
    }
  }
}
/* Now instead of doing this below:
var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
var driverQuestion = interviewQuestion('driver');

teacherQuestion('John');
designerQuestion('Mary');
driverQuestion('Harry');
*/
// Can do this instead:
interviewQuestion('teacher')('John');
interviewQuestion('designer')('Mary');
interviewQuestion('driver')('Harry');
