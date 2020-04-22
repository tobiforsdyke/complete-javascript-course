// ******************
// Arrays in ES6
// ******************

const boxes = document.querySelectorAll('.box');

// Give a node list:
console.log(boxes);

// Transform it into an array:

/* 
console.log('======== ES5 ========');

var boxesArray5 = Array.prototype.slice.call(boxes);
boxesArray5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
});
 */

console.log('======== ES6 ========');

// const boxesArray6 = Array.from(boxes);
// boxesArray6.forEach(cur => cur.style.backgroundColor = 'red');

Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'red');

/* 
console.log('======== ES5 ========');

for(var i = 0; i < boxesArray5.length; i++) {
    if(boxesArray5[i].className === 'box blue') {
        continue;
    }
    boxesArray5[i].textContent = 'I changed colour!';
}
 */

const boxesArray7 = Array.from(boxes);
boxesArray7.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

console.log('======== ES6 ========');

for (const definedcurrentelement of boxesArray7) {
    if (definedcurrentelement.className.includes('blue')) {
        continue;
    }
    definedcurrentelement.textContent = 'I changed to dodgerblue!';
}


// ES5:
var ages = [12, 17, 8, 21, 14, 11];

var fullAge = ages.map(function(cur) {
    return cur >= 18;
});
console.log(fullAge);

console.log(fullAge.indexOf(true));
console.log(ages[fullAge.indexOf(true)]);


// ES6:
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));