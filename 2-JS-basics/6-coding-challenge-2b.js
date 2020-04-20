/***********************************
* Coding Challenge 2
*/

/*
John and Mike both play basketball in different teams. In the last 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team.
2. Decide which team wins in average (highest average score) and print the winner to the console. Also include the average score in the output.
3. Change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score).

4. EXTRA: Mary also plays basketball and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision.
5. Like before, change the scores to generate different winners keeping in mind there might be draws.
*/

console.log('================= THE CORRECT WAY =================');

var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
console.log(scoreJohn, scoreMike);

if (scoreJohn > scoreMike) {
  console.log('John\'s team wins with ' + scoreJohn + ' average points.');
} else if (scoreMike > scoreJohn) {
  console.log('Mike\'s team wins with ' + scoreMike + ' average points.');
} else {
  console.log('There was a draw.');
}

console.log('================= ADDING MARY =================');

var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
  console.log('John\'s team wins with ' + scoreJohn + ' average points.');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
  console.log('Mike\'s team wins with ' + scoreMike + ' average points.');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
  console.log('Mary\'s team wins with ' + scoreMary + ' average points.');
} else {
  console.log('There was a draw.');
}
