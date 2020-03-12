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

var Question = function() {
  this.question = question;
  this.answers = answers;
  this.correctAnswer = correctAnswer;
};

var question1 = new Question('What is 5+5', ['a) 15', 'b) 25', 'c) 10'], '10');
var question2 = new Question();
var question3 = new Question();
var question4 = new Question();
var question5 = new Question();
