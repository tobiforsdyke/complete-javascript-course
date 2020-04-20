/***********************************
* Coding Challenge 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.

1. For each of them, create an object with properties for their full name, weight and height.
2. Then add a method to each object to calulate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = weight / (height * height).
Weight in kg and height in meters.
*/

var mark = {
  firstName: 'Mark',
  lastName: 'Markson',
  height: 2,
  weight: 59,
  calcBMI: function() {
    this.bmi = this.weight / (this.height * this.height);
    return this.bmi;
  }
};

var john = {
  firstName: 'John',
  lastName: 'Johnson',
  height: 2,
  weight: 59,
  calcBMI: function() {
    this.bmi = this.weight / (this.height * this.height);
    return this.bmi;
  }
}

mark.calcBMI();
john.calcBMI();
// console.log(mark, john);

if (mark.bmi > john.bmi) {
  console.log(mark.firstName + ' ' + mark.lastName + '\'s BMI is higher at ' + mark.bmi + ' (John\'s BMI is ' + john.bmi + ').');
} else if (john.bmi > mark.bmi) {
  console.log(john.firstName + ' ' + john.lastName + '\'s BMI is higher at ' + john.bmi + ' (Mark\'s BMI is ' + mark.bmi + ').');
} else {
  console.log('Both ' + mark.firstName + ' ' + mark.lastName + ' and ' + john.firstName + ' ' + john.lastName + ' have the same BMI at ' + mark.bmi + '.');
}

// The following also works (cutting out the initial function calls)
// if (mark.calcBMI() > john.calcBMI()) {
//   console.log(mark.firstName + ' ' + mark.lastName + '\'s BMI is higher at ' + mark.bmi + ' (John\'s BMI is ' + john.bmi + ').');
// } else if (john.bmi > mark.bmi) {
//   console.log(john.firstName + ' ' + john.lastName + '\'s BMI is higher at ' + john.bmi + ' (Mark\'s BMI is ' + mark.bmi + ').');
// } else {
//   console.log('Both ' + mark.firstName + ' ' + mark.lastName + ' and ' + john.firstName + ' ' + john.lastName + ' have the same BMI at ' + mark.bmi + '.');
// }
