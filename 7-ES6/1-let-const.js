// ******************
// LET and CONST
// ******************

/*
// ES5 code:
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6 code:
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);
*/

console.log('========== ES5 ==========');

// ES5:
function driversLicence5(passedTest) {
    if (passedTest) {
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}
driversLicence5(true);

console.log('========== ES6 ==========');

// ES6:
function driversLicence6(passedTest) {
    let firstName;
    const yearOfBirth = 1990;

    if (passedTest) {
        firstName = 'John';
    }

    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}
driversLicence6(true);

console.log('========== ES5 ==========');

// ES5:
let i = 23;
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);

console.log('========== ES6 ==========');

// ES6:
var e = 23;
for (var e = 0; e < 5; e++) {
    console.log(e);
}
console.log(e);