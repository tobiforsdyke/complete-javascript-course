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

var teamJohn, teamMike;
teamJohn = 'John\'s team';
teamMike = 'Mike\'s team';

var gameJohn1, gameJohn2, gameJohn3;
gameJohn1 = 89;
gameJohn2 = 120;
gameJohn3 = 103;

var gameMike1, gameMike2, gameMike3;
gameMike1 = 116;
gameMike2 = 94;
gameMike3 = 123;

var averageScoreJohn = (gameJohn1 + gameJohn2 + gameJohn3) / 3;
var averageScoreMike = (gameMike1 + gameMike2 + gameMike3) / 3;

if (averageScoreJohn > averageScoreMike) {
  console.log(teamJohn + ' is the winner with an everage score of ' + averageScoreJohn + '. (' + teamMike + ' had an average score of ' + averageScoreMike + ').');
} else {
  console.log(teamMike + ' is the winner with an everage score of ' + averageScoreMike + '. (' + teamJohn + ' had an average score of ' + averageScoreJohn + ').');
}

console.log('================= change of scores =================');

var gameJohn1, gameJohn2, gameJohn3;
gameJohn1 = 110;
gameJohn2 = 120;
gameJohn3 = 130;

var gameMike1, gameMike2, gameMike3;
gameMike1 = 32;
gameMike2 = 50;
gameMike3 = 74;

var averageScoreJohn = (gameJohn1 + gameJohn2 + gameJohn3) / 3;
var averageScoreMike = (gameMike1 + gameMike2 + gameMike3) / 3;

console.log(teamJohn + ': ' + averageScoreJohn);
console.log(teamMike + ': ' + averageScoreMike);

if (averageScoreJohn > averageScoreMike) {
  console.log(teamJohn + ' is the winner with an everage score of ' + averageScoreJohn + '. (' + teamMike + ' had an average score of ' + averageScoreMike + ').');
} else {
  console.log(teamMike + ' is the winner with an everage score of ' + averageScoreMike + '. (' + teamJohn + ' had an average score of ' + averageScoreJohn + ').');
}

console.log('================= adding Mary =================');

var teamJohn, teamMike;
teamJohn = 'John\'s team';
teamMike = 'Mike\'s team';
teamMary = 'Mary\'s team';

var gameJohn1, gameJohn2, gameJohn3;
gameJohn1 = 89;
gameJohn2 = 120;
gameJohn3 = 103;

var gameMike1, gameMike2, gameMike3;
gameMike1 = 116;
gameMike2 = 94;
gameMike3 = 123;

var gameMary1, gameMary2, gameMary3;
gameMary1 = 116;
gameMary2 = 94;
gameMary3 = 123;

var averageScoreJohn = (gameJohn1 + gameJohn2 + gameJohn3) / 3;
var averageScoreMike = (gameMike1 + gameMike2 + gameMike3) / 3;
var averageScoreMary = (gameMary1 + gameMary2 + gameMary3) / 3;
console.log(teamJohn + ': ' + averageScoreJohn);
console.log(teamMike + ': ' + averageScoreMike);
console.log(teamMary + ': ' + averageScoreMary);

if (averageScoreJohn > averageScoreMike && averageScoreJohn > averageScoreMary) {
  console.log(teamJohn + ' is the winner with an everage score of ' + averageScoreJohn + '. (' + teamMike + ' average: ' + averageScoreMike + ', and ' + teamMary + ' average: ' + averageScoreMary + ').');
} else if (averageScoreMike > averageScoreJohn && averageScoreMike > averageScoreMary) {
  console.log(teamMike + ' is the winner with an everage score of ' + averageScoreMike + '. (' + teamJohn + ' average: ' + averageScoreJohn + ', and ' + teamMary + ' average: ' + averageScoreMary + ').');
} else if (averageScoreMary > averageScoreJohn && averageScoreMary > averageScoreMike) {
  console.log(teamMary + ' is the winner with an everage score of ' + averageScoreMary + '. (' + teamJohn + ' average: ' + averageScoreJohn + ', and ' + teamMike + ' average: ' + averageScoreMike + ').');
} else {
  console.log('There was a draw!');
}

console.log('================= Switch attempt =================');

switch (true) {
  case averageScoreJohn > averageScoreMike && averageScoreJohn > averageScoreMary:
    console.log(teamJohn + ' is the winner with an everage score of ' + averageScoreJohn + '. (' + teamMike + ' average: ' + averageScoreMike + ', and ' + teamMary + ' average: ' + averageScoreMary + ').');
    break;
  case averageScoreMike > averageScoreJohn && averageScoreMike > averageScoreMary:
    console.log(teamMike + ' is the winner with an everage score of ' + averageScoreMike + '. (' + teamJohn + ' average: ' + averageScoreJohn + ', and ' + teamMary + ' average: ' + averageScoreMary + ').');
    break;
  case averageScoreMary > averageScoreJohn && averageScoreMary > averageScoreMike:
    console.log(teamMary + ' is the winner with an everage score of ' + averageScoreMary + '. (' + teamJohn + ' average: ' + averageScoreJohn + ', and ' + teamMike + ' average: ' + averageScoreMike + ').');
    break;
  default:
    console.log('Baffled!');
}
