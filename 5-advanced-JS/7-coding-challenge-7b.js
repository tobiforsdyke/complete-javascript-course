/*********************************************
* CODING CHALLENGE 7
*/
/*
8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after task 8, the game literally never ends. So include the operation to quit the game if the user writes 'exit' instead of the answer. In this case DON'T call the function from task 8.

10. Track the users score to make the game more fun! So each time an answer is correct add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point.)

11. Display the score in the console. Use yet another method for this.
*/


(function() {
    function Question(question, answers, correct) {
      this.question = question;
      this.answers = answers;
      this.correct = correct;
    }
  
    Question.prototype.displayQuestion = function() {
      console.log(this.question);
      for (var i = 0; i < this.answers.length; i++) {
        console.log(i + ': ' + this.answers[i]);
      }
    }
  
    Question.prototype.checkAnswer = function(ans, callback) {
      var sc;
      if (ans === this.correct) {
        console.log('Correct answer!');
        sc = callback(true);
      } else {
        console.log('Wrong answer, try again...');
        sc = callback(false);
      }
      this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('----------------------------');
    }
  
    var q1 = new Question('Is JavaScript cool?', ['Yes', 'No'], 0);
    var q2 = new Question('What is 5+5?', ['a) 15', 'b) 25', 'c) 10'], 2);
    var q3 = new Question('What is the name of the course instructor?', ['John', 'Michael', 'Jonas'], 2);
    var q4 = new Question('What best describes coding?', ['Boring', 'Hard', 'Tedious', 'Fun'], 3);
    var q5 = new Question('What colour is grass?', ['Red', 'Green', 'Blue'], 1);

    var questions = [q1, q2, q3, q4, q5];

    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }

    var keepScore = score();

    function nextQuestion() {
        var n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();
        var answer = prompt('Please type the correct answer (or type "exit" to quit).');
        if (answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }
    }
    nextQuestion();
  })();