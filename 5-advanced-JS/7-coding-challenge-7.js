/*********************************************
* CODING CHALLENGE 7
*/
/*
Let's build a fun quiz game in the console!

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the play can choose the correct one (choose an adequate data structure here, array, object etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it to the console, together with the possible answers (each question should have a number) (HINT: write a method for the question objects for this task)

5. USe the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed in task 4.

6. Check if the answer is correct and print to the console whether the answer is correct or not (HINT: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other progrmmers code (HINT: we learned a special technique to do exactly this).
*/

// var Question = function() {
//   this.question = question;
//   this.answers = answers;
//   this.correctAnswer = correctAnswer;
// };
// var question1 = new Question('What is 5+5', ['a) 15', 'b) 25', 'c) 10'], '10');
// var question2 = new Question();
// var question3 = new Question();
// var question4 = new Question();
// var question5 = new Question();

/*
// For part 7, insert all the code between the following to create an immediately invoked function expression that is called automatically. This creates the function with: (function(){}) and then immediately invokes the function with (); -
(function() {
})();
*/

(function() {
  // Create the function constructor:
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  // Prototype chain to display the questions in the console log inclusing a loop to display the answers:
  Question.prototype.displayQuestion = function() {
    console.log(this.question);
    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ': ' + this.answers[i]);
    }
  }

  Question.prototype.checkAnswer = function(ans) {
    if (ans === this.correct) {
      console.log('Correct answer!');
    } else {
      console.log('Wrong answer, try again...');
    }
  }

  // Create the questions from the function constructor above:
  var q1 = new Question('Is JavaScript cool?', ['Yes', 'No'], 0);
  var q2 = new Question('What is 5+5?', ['a) 15', 'b) 25', 'c) 10'], 2);
  var q3 = new Question('What is the name of the course instructor?', ['John', 'Michael', 'Jonas'], 2);
  var q4 = new Question(
    'What best describes coding?',
    [
      'Boring',
      'Hard',
      'Tedious',
      'Fun'
    ],
    3);
  var q5 = new Question('What colour is grass?', ['Red', 'Green', 'Blue'], 1);

  // Store the questions in a variable:
  var questions = [q1, q2, q3, q4, q5];

  // Retrieve a random question from the array:
  // Random number should be between 0 and 4 as there are 5 questions in the array, Math.random gives a random number between 0 and 1, then multiply this by the questions.length which is the length of the array (so multiply by 4 in this case)
  var n = Math.floor(Math.random() * questions.length);

  questions[n].displayQuestion();

  // Prompts for the answer and uses parseInt to parse the answer from a string into a number:
  var answer = parseInt(prompt('Please type the correct answer.'));

  questions[n].checkAnswer(answer);
})();