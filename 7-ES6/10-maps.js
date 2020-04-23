// ******************
// Maps
// set, get, has, delete, clear
// ******************

const question = new Map();

// Set data in the map:
question.set('question', 'What is this JS course about?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('answer', 2);
question.set(true, 'Correct answer!');
question.set(false, 'Wrong, please try again...');

console.log(question);

// Get data from the map:
console.log(question.get('question'));
console.log(question.size);

/* 
// Delete data from the map:
question.delete(4);
console.log(question);

// Check data in the map and delete data if it is there:
if (question.has(1)) {
    question.delete(1);
}
console.log(question);

// Clear everything from the map:
question.clear();
console.log(question);
*/

/* 
// Loop through the map
question.forEach((value, key) => console.log(`This is ${key} and the value is: ${value}`));
*/

console.log('==== QUESTION ====');

console.log(question.get('question'));

// Loops and can be set to only display the values that have a number as the key instead of a string. Sets the first value of each 'question' as 'key' and the second as 'value' and then only displays the 'key' ones that are a number instead of a string:

for (let [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

// Set a const for the answer and a prompt to type it in - also use parseInt to parse the string as a number:
const ans = parseInt(prompt('Write the number of the correct answer below...'));

// Use question.get to check the 'answer' field in the question and whether it is the same as the input from ans above:
// question.get(ans === question.get('answer'));

console.log(question.get(ans === question.get('answer')));