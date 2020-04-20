// ARRAYS
var myList = ['Apple', 'Oranges', 'Bananas'];

console.log(myList[1]);
console.log(myList);

myList[3] = 'Pineapples';
myList[0] = 'Watermelon';

console.log(myList);

// Arrays can hold strings, numbers, functions and even another array
function goFunction() {
  console.log('Hi!');
}

var myList2 = ['apples', 12, goFunction];

console.log(myList2);

myList2[2]();


var myList3 = ['bananas', 21, ['Will', 'Laura']];

// Shift and Pop - Shift takes out the first item, pop takes out the last

myList.shift();
console.log(myList);

myList.pop();
console.log(myList);

var currentFruit = myList.shift();
console.log(currentFruit);
console.log(myList);

/****************************************************************
* LOOPING
****************************************************************/

// FOREACH

var myList = ['Apples', 'Oranges', 'Bananas'];

myList.forEach(function(value, index) {
  console.log('I have ' + value + ' in my shopping basket.');
});

// WHILE - this will check the while statement first and then perform the loop if applicable

var times = 0;

while (times < 10) {
  console.log('I tried it ' + times);
  times++;
}

// WHILE DO - this start the loop first and then check the while statement so will always produce at least a first result

var times = 0;

do {
  console.log('I tried a second time ' + times);
  times++;
} while (times < 10);

// FOR - the better way to do a loop
// for (setup, comparison, change) {}

for (var i=0; i < 10; i++) {
  console.log('I tried it again ' + i);
}

// Another FOR loop

var myList = ['Apples', 'Oranges', 'Bananas', 'Pineapples', 'Pears'];

for (var i=0; i < myList.length; i++) {
  console.log('You have ' + myList[i] + ' in your basket.');
}
// test