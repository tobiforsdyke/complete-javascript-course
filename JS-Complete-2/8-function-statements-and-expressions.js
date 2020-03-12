/***********************************
* Function statements and expressions
*/

console.log('============= Function statements and expressions ==============');

// Function Declaration
// function whatDoYouDo(job, firstName) {}

// Function Expression
var whatDoYouDo = function(job, firstName) {
  switch(job) {
    case 'teacher':
    case 'instructor':
      return firstName + ' teaches in a school.';
    case 'driver':
      return firstName + ' drives a bus.';
    case 'designer':
      return firstName + ' designs websites.';
    default:
      return firstName + ' does something else.';
  }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('driver', 'Mark'));
console.log(whatDoYouDo('designer', 'Mary'));
console.log(whatDoYouDo('author', 'Jane'));


function whatDoYouDo2(job, firstName) {
  switch(job) {
    case 'teacher':
    case 'instructor':
      console.log(firstName + ' teaches in a school.');
      break;
    case 'driver':
      console.log(firstName + ' drives a bus.');
      break;
    case 'designer':
      console.log(firstName + ' designs websites.');
      break;
    default:
      console.log(firstName + ' does something else.');
  }
}

whatDoYouDo2('driver', 'Henry');
