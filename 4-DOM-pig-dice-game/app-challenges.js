/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

CHALLENGES:

1. A player loses their ENTIRE score when they roll two 6 in a row. After that, it's the next players turn. (HINT: always save the previous dice roll in a separate variable).
2. Add an input field to the HTML where players can set the winning score, so they can change the predifined score of 100. (HINT: you can read that value with the .value property in JavaScript. This is a good opportunity to use Google to figure this out).
3. Add another dice to the game, so that there are two dices now. The player loses their current score when one of them is a 1. (HINT: you will need CSS to position the second dice so look at the CSS code for the first one).
*/

var scores, roundScore, activePlayer, gamePlaying, winningScore, previousRoll;

init();

// ROLL DICE BUTTON
document.querySelector('.btn-roll').addEventListener('click', function() {
  if (gamePlaying) {

    // document.getElementById('dice-1').classList.remove('red-dice');
    // document.getElementById('dice-2').classList.remove('red-dice');
    // document.getElementById('dice-1').style.display = 'block';
    // document.getElementById('dice-2').style.display = 'block';
    // setTimeout(rollDice, 500);
    // setTimeout(rollDice, 600);
    // setTimeout(rollDice, 700);
    // setTimeout(rollDice, 800);
    // setTimeout(rollDice, 1000);
    // function rollDice() {
    //   var dice1 = Math.floor(Math.random() * 6) + 1;
    //   var dice2 = Math.floor(Math.random() * 6) + 1;
    //   document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
    //   document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
    // }
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    document.getElementById('dice-1').classList.remove('red-dice');
    document.getElementById('dice-2').classList.remove('red-dice');
    document.getElementById('dice-1').style.display = 'block';
    document.getElementById('dice-2').style.display = 'block';
    document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
    document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

    if (dice1 == 6 && dice2 == 6) {
      scores[activePlayer] = 0;
      document.querySelector('#score-' + activePlayer).textContent = '0';
      document.getElementById('dice-1').classList.add('red-dice');
      document.getElementById('dice-2').classList.add('red-dice');
      nextPlayer();
    } else if (dice1 == 1 && dice2 == 1) {
      document.getElementById('dice-1').classList.add('red-dice');
      document.getElementById('dice-2').classList.add('red-dice');
      nextPlayer();
    } else if (dice1 !== 1 && dice2 !== 1) {
      roundScore += dice1 + dice2;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else if (dice1 == 1) {
      document.getElementById('dice-1').classList.add('red-dice');
      nextPlayer();
    } else if (dice2 == 1) {
      document.getElementById('dice-2').classList.add('red-dice');
      nextPlayer();
    } else {
      nextPlayer();
    }
    /*
    if (dice === 6 && previousRoll === 6) {
      scores[activePlayer] = 0;
      document.querySelector('#score-' + activePlayer).textContent = '0';
      nextPlayer();
    } else if (dice !== 1) {
      roundScore += dice;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
      nextPlayer();
    }
    previousRoll = dice;
    */
  }
});

// HOLD BUTTON
document.querySelector('.btn-hold').addEventListener('click', function() {
  if (gamePlaying) {
    scores[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
    var input = document.querySelector('.final-score').value;
    // undefined, 0, null or "" are COERCED to false
    // anything else is COERCED to true
    if (input) {
      winningScore = input;
    } else {
      winningScore = 100;
    }

    if (scores[activePlayer] >= winningScore) {
      document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
      document.getElementById('dice-1').style.display = 'none';
      document.getElementById('dice-2').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
});

// NEXT PLAYER FUNCTION
function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;
  previousRoll = 0;
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  // document.getElementById('dice-1').style.display = 'none';
  // document.getElementById('dice-2').style.display = 'none';
  // document.getElementById('dice-1').classList.remove('red-dice');
  // document.getElementById('dice-2').classList.remove('red-dice');
}

// NEW BUTTON
document.querySelector('.btn-new').addEventListener('click', init);

// GAME INITIALISE FUNCTION
function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;
  document.getElementById('dice-1').style.display = 'none';
  document.getElementById('dice-2').style.display = 'none';
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
  document.getElementById('dice-1').classList.remove('red-dice');
  document.getElementById('dice-2').classList.remove('red-dice');
}

// HIDE/SHOW DICE FUNCTIONS
// function hideDice() {
//   document.getElementById('dice-1').style.display = 'none';
//   document.getElementById('dice-2').style.display = 'none';
// }
// function showDice() {
//   document.getElementById('dice-1').style.display = 'block';
//   document.getElementById('dice-2').style.display = 'block';
// }

// RED DICE
function redDice() {
  // Make the dice background red
}

// ROLL DICE
// function rollDice() {
//   var dice1 = Math.floor(Math.random() * 6) + 1;
//   var dice2 = Math.floor(Math.random() * 6) + 1;
//   document.getElementById('dice-1').classList.remove('red-dice');
//   document.getElementById('dice-2').classList.remove('red-dice');
//   document.getElementById('dice-1').style.display = 'block';
//   document.getElementById('dice-2').style.display = 'block';
//   document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
//   document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
// }
