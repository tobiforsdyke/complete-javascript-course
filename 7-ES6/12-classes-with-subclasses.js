// ******************
// Classes with Subclasses
// inheritance with subclasses
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

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}

var johnAthlete5 = new Athlete5('John', 1990, 'Swimmer', 3, 5);

console.log(johnAthlete5);
johnAthlete5.calculateAge();
johnAthlete5.wonMedal();
johnAthlete5.wonMedal();
console.log(johnAthlete5);



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

class Ahtlete6 extends Person6 {
    constructor (name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6 = new Ahtlete6('Mark', 1989, 'Runner', 4, 6);

console.log(johnAthlete6);
johnAthlete6.calculateAge();
johnAthlete6.wonMedal();
johnAthlete6.wonMedal();
console.log(johnAthlete6);