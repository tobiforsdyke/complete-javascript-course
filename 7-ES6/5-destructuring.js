// ******************
// Destructuring
// ******************

console.log('========== ES5 ==========');

var john = ['John', 26];
var name = john[0];
var age = john[1];
console.log(john);


console.log('========== ES6 ==========');

const [name2, age2] = ['John', 26];
console.log(name2);
console.log(age2);


console.log('========== ES6 ==========');

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);



console.log('=====================');

function calcAgeRetirement(year) {
    const ages = new Date().getFullYear() - year;
    return [ages, 65 - ages];
}

const [ages, retirement] = calcAgeRetirement(1974);
console.log(ages);
console.log(retirement);