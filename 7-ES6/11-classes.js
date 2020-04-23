// ******************
// Classes
// ******************

// ES5:
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1990, 'Teacher');


// ES6:
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

const john6 = new Person6('John', 1990, 'Teacher');


// Console log both the ES5 and ES6 versions:
console.log(john5);
console.log(john6);
john5.calculateAge();
john6.calculateAge();