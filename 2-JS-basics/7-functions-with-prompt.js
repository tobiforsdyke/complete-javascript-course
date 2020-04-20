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

function yearsUntilRetirement(firstName, year) {
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

yearsUntilRetirement(prompt('What is your name?'), prompt('What year were you born in?'));

// Calculate VAT function

function calculateVAT(cost) {
  var vat = cost * .2;
  var total = cost + vat;
  console.log('Your item costs £' + cost + ' plus VAT of £' + vat + '. The total cost is £' + total);
}

calculateVAT(20.00);
calculateVAT(19.99);
calculateVAT(3);
calculateVAT(100);
calculateVAT(prompt('How much was the item?'));
