// ******************
// Default Parameters
// ******************

// ES5
console.log('==== ES5 ====');

// Can use ternary operators to say if lastname and nationality are undefined then set a default value:
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'British' : nationality = nationality;

    this.firstName = firstName;
    this.lastName = lastName;
    this. yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

// No need to specify the lastname or nationality as it will use the default values above:
var john = new SmithPerson('John', 1990);

console.log(john);

// The defaults can also be overwritten:
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');

console.log(emily);


// ES6
console.log('==== ES6 ====');

// No need for the additional ternary operator as the default values can be specified as below:
function JonesPerson(firstName, yearOfBirth, lastName = 'Jones', nationality = 'British') {
    this.firstName = firstName;
    this.lastName = lastName;
    this. yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

// No need to specify the lastname or nationality as it will use the default values above:
var bob = new JonesPerson('Bob', 1990);

console.log(bob);

// The defaults can also be overwritten:
var mary = new JonesPerson('Mary', 1983, 'Juarez', 'Mexico');

console.log(mary);