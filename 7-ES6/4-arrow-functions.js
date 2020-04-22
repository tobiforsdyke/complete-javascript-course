// ******************
// Arrow Functions
// ******************

const years = [1990, 1965, 1982, 1937];

console.log('========== ES5 ==========');

var ages5 = years.map(function(el) {
    return 2020 - el;
});
console.log(ages5);


console.log('========== ES6 ==========');

let ages6 = years.map(el => 2020 - el);
console.log(ages6);


ages6 = years.map((el, index) => `Age element ${index + 1}: ${2020 - el}.`);
console.log(ages6);


ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`
});
console.log(ages6);

/*
console.log('========== ES5 ("this" is not available inside...) ==========');

var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This box number is ' + this.position + ' and it is ' + this.color + '.';
            alert(str);
        });
    }
}
box5.clickMe();
*/

console.log('========== ES5 (create a variable called "self" and point it to "this" to make it work...) ==========');

var box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        var self = this;
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This box number is ' + self.position + ' and it is ' + self.color + '.';
            alert(str);
        });
    }
}
box6.clickMe();


/* console.log('========== Arrow function shares the "this" keyword with its surrounding elements so adding it to the first function too means it now shares the "this" keyword with the document instead of just box6 so it doesnt work as above ==========');

const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This box number is ' + this.position + ' and it is ' + this.color + '.';
            alert(str);
        });
    }
}
box66.clickMe(); */


// Function Constructor

console.log('========== ES5 ==========');
// ES5:
function Person(name) {
    this.name = name;
}

Person.prototype.myFriends5 = function(friends) {
    var arr = friends.map(function(el) {
        return this.name + ' is friends with ' + el;
    }.bind(this));
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);


console.log('========== ES6 ==========');
// ES6:
function Person(name) {
    this.name = name;
}

Person.prototype.myFriends6 = function(friends) {
    var arr = friends.map(el => `${this.name} is friends with ${el}`);
    console.log(arr);
}

var friends = ['Jim', 'Mary', 'Joe'];
new Person('Mike').myFriends6(friends);