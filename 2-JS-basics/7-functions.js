/***********************************
* Functions
*/

function calculateAge(birthYear) {
  return 2020 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

// Calculate years until retirement

function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;
  console.log(firstName + ' retires in ' + retirement + ' years.');
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
yearsUntilRetirement(1974, 'Tobi');

// Testing it out with a prompt:
// yearsUntilRetirement(prompt('What year were you born in?'), prompt('What is your name?'));

console.log('==========================================');

// Same as above but with added if else statement for people who have already retired and displaying as a minus number - changed function name temporarily (just added a 2 at the end)

function yearsUntilRetirement2(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;
  if (retirement > 1) {
    console.log(firstName + ' retires in ' + retirement + ' years.');
  } else if (retirement === 1) {
    console.log(firstName + ' retires this year!');
  } else {
    console.log(firstName + ' has retired!');
  }
}

yearsUntilRetirement2(1990, 'John');
yearsUntilRetirement2(1948, 'Mike');
yearsUntilRetirement2(1969, 'Jane');
yearsUntilRetirement2(1974, 'Tobi');
yearsUntilRetirement2(1956, 'Test Person');
