var r1h = 175,
    r1a = 24 * 5,
    r2h = 180,
    r2a = 22 * 5,
    r3h = 168,
    r3a = 26 * 5;

var calcR1 = r1h + r1a;
var calcR2 = r2h + r2a;
var calcR3 = r3h + r3a;

if (calcR1 > calcR2 && calcR1 > calcR3) {
  console.log('Player 1 score: ' + calcR1 +
              '\nPlayer 2 score: ' + calcR2 +
              '\nPlayer 3 score: ' + calcR3);
  console.log('Player 1 wins with a score of - ' + calcR1);
} else if (calcR2 < calcR1 && calcR2 > calcR3) {
  console.log('Player 1 score: ' + calcR1 +
              '\nPlayer 2 score: ' + calcR2 +
              '\nPlayer 3 score: ' + calcR3);
  console.log('Player 2 wins with a score of - ' + calcR2);
} else if (calcR3 > calcR1 && calcR3 > calcR2) {
  console.log('Player 1 score: ' + calcR1 +
              '\nPlayer 2 score: ' + calcR2 +
              '\nPlayer 3 score: ' + calcR3);
  console.log('Player 3 wins with a score of - ' + calcR3);
} else if ((calcR1 === calcR2 && calcR1 === calcR3) || (calcR1 === calcR2 && calcR2 === calcR3)) {
  console.log('Player 1 score: ' + calcR1 +
              '\nPlayer 2 score: ' + calcR2 +
              '\nPlayer 3 score: ' + calcR3);
  console.log('Players have equal scores - ' + calcR1 + ' ' + calcR2 + ' ' + calcR3);
} else {
  console.log('No one wins. :(');
}
