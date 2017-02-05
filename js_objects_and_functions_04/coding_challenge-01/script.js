(function () {
  var counter = 0;

  function Question(question, leave, answer, correct, displayAnswer) {
    this.question      = question;
    this.leave         = leave;
    this.answer        = answer;
    this.correct       = correct;
    this.displayAnswer = displayAnswer;
  }

  // Display to the user how to quit the game
  Question.prototype.quitGame = function () {
    console.log(this.leave + '\n ----------------------');
  }

  // Display the question with the possible answers
  Question.prototype.questions = function () {
    console.log(this.question);

    // Loop through all the possible answers and display them
    for (var i in this.answer) {
      console.log('Answer ' + i + ': ' + this.answer[i]);
    }
  };

  // Check the if the answer that the user entered is correct
  // and increment the score if the answer is correct
  Question.prototype.userAnswer = function (answers, value) {
    // Check if the answer is correct, and, if it is
    // update the score.
    // If the answer is not correct, do not update the score
    if (answers === this.correct) {
      console.log('Correct answer: ' + this.displayAnswer + '\n');
      counter += 1;
    } else {
      console.log('Incorrect answer.');
      counter -= 1;
    }

    // Display the points accumulated
    console.log('\n ----------------------');
    console.log('Your current points: ' + counter);
  };

  Question.prototype.total = function (total) {
    console.log('\n');
    console.log('Your total points: ' + total);
    console.log('\n');
  }

  var leaveGame = new Question('', 'In order to exit the game, write "exit" in the text field above', [], '');
  leaveGame.quitGame();

  var q1 = new Question('What is the capital of Germany?', '', ['Berlin', 'Frankfurt', 'Munich', 'Dresden'], 0, 'Berlin');
  var q2 = new Question('What is the capital of Slovakia?', '', ['Kosice', 'Presov', 'Bratislava', 'Nitra'], 2, 'Bratislava');
  var q3 = new Question('What is the capital of Switzerland?', '', ['Geneva', 'Bern', 'Basel', 'Zurich'], 3, 'Zurich');
  var q4 = new Question('What is the capital of Poland?', '', ['Krakow', 'Wroclaw', 'Lodz', 'Warsaw'], 3, 'Warsaw');
  var q5 = new Question('What is the capital of Belarus', '', ['Minsk', 'Mogilev', 'Gomel', 'Vitebsk'], 0, 'Minsk');
  var qs = [q1, q2, q3, q4, q5];

  function nextQuestion() {
    var rand = Math.floor(Math.random() * qs.length);
    qs[rand].questions();

    var ans = prompt('Please enter the correct answer, by typing "0", "1", "2" or "3"; type "exit" to quit the game. ');

    if (ans !== 'exit') {
      qs[rand].userAnswer(parseInt(ans, 10), counter);
      nextQuestion();
    } else {
      qs[rand].total(counter);
    }
  }

  nextQuestion();

})();
