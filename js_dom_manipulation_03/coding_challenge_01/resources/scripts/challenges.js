/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn.
(Hint: Always save the previous dice roll in a separate variable)

2. Add an input field to the HTML where players can set the winning score, so that
they can change the predefined score of 100. (Hint: you can read that value with
the .value property in JavaScript. This is a good oportunity to use google to figure this out :)

3. Add another dice to the game, so that there are two dices now. The player looses
his current score when one of them is a 1. (Hint: you will need CSS to position the second dice,
so take a look at the CSS code for the first one.)
*/

// lecture 01 -- First DOM Access and Manipulation
var scores, roundScore, activePlayer, gamePlaying, scoreValue;

init();

var previousDiceRoll;
// Lecture 02 -- Events and Event Handling: Rolling the Dice
document.querySelector('.btn-roll').addEventListener('click', function (e) {
  if (gamePlaying) {
    // 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;

    // 2. Display result
    document.querySelector('.dice').style.display = 'block';
    document.querySelector('.dice-2').style.display = 'block';
    document.querySelector('.dice').src = 'resources/images/dice/dice-' + dice + '.png';
    document.querySelector('.dice-2').src = 'resources/images/dice/dice-' + dice2 + '.png';

    // Update the round score only IF the rolled number was not a 1
    // else, if the player rolls six two times in a row, the player loses
    // all of it score
    if (dice === 6 && previousDiceRoll === 6) {
      // Player loses all the score
      scores[activePlayer] = 0;

      // Update the UI
      document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

      // It's the next player
      nextPlayer();
    } else if (dice !== 1 && dice2 !== 1) {
      // Add score
      roundScore += dice + dice2;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
      // It's the next player
      nextPlayer();
    }

    previousDiceRoll = dice;
  }
});

// Lecture 04 -- Implementing Our 'Hold' Function and the DRY Principle
document.querySelector('.btn-hold').addEventListener('click', function (e) {
  if (gamePlaying) {
    // Add CURRENT score to the GLOBAL score
    scores[activePlayer] += roundScore;

    // Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // Check if player won the game
    if (scores[activePlayer] >= scoreValue) {
      document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.dice-2').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

      // Once the game finish, set the score back to default value of 100
      document.querySelector('.input-custom-score').value = '';

      gamePlaying = false;
    } else {
      // It's the next player
      nextPlayer();
    }
  }
});

function nextPlayer() {
  // It's the next player
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  // document.querySelector('.player-0-panel').classList.remove('active');
  // document.querySelector('.player-1-panel').classList.add('active');

  document.querySelector('.dice').style.display = 'none';
  document.querySelector('.dice-2').style.display = 'none';
}

// Lecture 05 -- Creating a Game Initialization Function
document.querySelector('.btn-new').addEventListener('click', init);

// Set the score
document.getElementById('btn-score').addEventListener('click', init);

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  // Set a custom score
  var input = document.querySelector('.input-custom-score').value;

  // Check if the user has entered any value, if the user hasn't
  // entered any value, set the default value to 100
  if (input) {
    scoreValue = input;
  } else {
    scoreValue = 100;
  }

  document.querySelector('.dice').style.display = 'none';
  document.querySelector('.dice-2').style.display = 'none';

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
