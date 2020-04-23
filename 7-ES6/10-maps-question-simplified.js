// ******************
// Maps
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

// Console log the question:
console.log(question.get('question'));

// Console log the list of answers:
for (let [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

// Prompt for the answer:
const ans = parseInt(prompt('Write the number of the correct answer below...'));

// Console log the response:
console.log(question.get(ans === question.get('answer')));