/***********************************
* Coding Challenge 2
*/

/*
FIXED MY VERSION. I HAD DONE IT CORRECTLY BUT HAD OVER-THOUGHT IT AND MADE IT MORE COMPLICATED THAN IT NEEDED TO BE. BUT WAS ESSENTIALLY CORRECT!
*/

console.log('================= my version - simplified =================');

var averageScoreJohn = (89 + 120 + 103) / 3;
var averageScoreMike = (116 + 94 + 123) / 3;
var averageScoreMary = (97 + 134 + 105) / 3;
console.log('John\'s team average: ' + averageScoreJohn);
console.log('Mike\'s team average: ' + averageScoreMike);
console.log('Mary\'s team average: ' + averageScoreMary);

if (averageScoreJohn > averageScoreMike && averageScoreJohn > averageScoreMary) {
  console.log('John\'s team is the winner with an average score of ' + averageScoreJohn + '. (Mike\'s team average: ' + averageScoreMike + ', Mary\'s team average: ' + averageScoreMary + ').');
} else if (averageScoreMike > averageScoreJohn && averageScoreMike > averageScoreMary) {
  console.log('Mike\'s team is the winner with an average score of ' + averageScoreMike + '. (John\'s team average: ' + averageScoreJohn + ', Mary\'s team average: ' + averageScoreMary + ').');
} else if (averageScoreMary > averageScoreJohn && averageScoreMary > averageScoreMike) {
  console.log('Mary\'s team is the winner with an average score of ' + averageScoreMary + '. (John\'s team average: ' + averageScoreJohn + ', Mike\'s team average: ' + averageScoreMike + ').');
} else {
  console.log('There was a draw!');
}

console.log('================= Switch version =================');

switch (true) {
  case averageScoreJohn > averageScoreMike && averageScoreJohn > averageScoreMary:
    console.log('John\'s team is the winner with an average score of ' + averageScoreJohn + '. (Mike\'s team average: ' + averageScoreMike + ', Mary\'s team average: ' + averageScoreMary + ').');
    break;
  case averageScoreMike > averageScoreJohn && averageScoreMike > averageScoreMary:
    console.log('Mike\'s team is the winner with an average score of ' + averageScoreMike + '. (John\'s team average: ' + averageScoreJohn + ', Mary\'s team average: ' + averageScoreMary + ').');
    break;
  case averageScoreMary > averageScoreJohn && averageScoreMary > averageScoreMike:
    console.log('Mary\'s team is the winner with an average score of ' + averageScoreMary + '. (John\'s team average: ' + averageScoreJohn + ', Mike\'s team average: ' + averageScoreMike + ').');
    break;
  default:
    console.log('There was a draw again!');
}
