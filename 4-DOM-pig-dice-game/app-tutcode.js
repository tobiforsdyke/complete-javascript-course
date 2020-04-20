/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores, roundScore, activePlayer, gamePlaying, winningScore;
// scores = [0, 0];
// roundScore = 0;
// activePlayer = 0;
winningScore = 20;
init();

// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// Get the text value of the css score element and store it in var x:
// var x = document.querySelector('#score-0').textContent;
// console.log(x);



// Select the button roll by css class and add the btn function as a callback function:
// function btn() {}
// document.querySelector('.btn-roll').addEventListener('click', btn);
// Below is the same as above but with an anonymous function inside instead of calling an external function:

// ROLL DICE BUTTON
document.querySelector('.btn-roll').addEventListener('click', function() {
  if (gamePlaying) {
    // 1. Generate a random number
    var dice = Math.floor(Math.random() * 6) + 1;
    // 2. Display the resulting image (and set the dice property to be visible again)
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    // 3. Update the round score but only if the number was NOT a 1
    if (dice !== 1) {
      // Add the score
      roundScore += dice;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
      // Next player (uses a ternary statement instead of an if else statement)
      nextPlayer();
    }
  }
});

// HOLD BUTTON
document.querySelector('.btn-hold').addEventListener('click', function() {
  if (gamePlaying) {
    // 1. Add CURRENT score to the players GLOBAL score
    scores[activePlayer] += roundScore;
    // Above is same as writing: scores[activePlayer] = scores[activePlayer] + roundScore;
    // 2. Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    // 3. Check if player won the game
    if (scores[activePlayer] >= winningScore) {
      document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
      document.querySelector('.dice').style.display = 'none';
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
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  // document.querySelector('.player-0-panel').classList.remove('active');
  // document.querySelector('.player-1-panel').classList.add('active');
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  document.querySelector('.dice').style.display = 'none';
}

// NEW BUTTON
// document.querySelector('.btn-new').addEventListener('click', function() {
//   init();
// });
document.querySelector('.btn-new').addEventListener('click', init);

// Game initialise function
function init() {
  // Initialise scores
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;
  // Set the display to none for the css property of the dice:
  document.querySelector('.dice').style.display = 'none';
  // Set the inital scores to 0 (using getElementById instead of querySelector):
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
}
