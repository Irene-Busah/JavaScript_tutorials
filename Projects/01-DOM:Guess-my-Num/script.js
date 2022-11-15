'use strict';
/*
    DOM manipulation:
    DOM means Document Object Model. It is a structured representation of HTML documents. It allows JavaScript to access HTML elements and styles to manipulate them.

    Example; change text, HTML attributes and even CSS styles

*/

// ============= GUESSING GAME WITH JAVASCRIPT =============

// generating a random number
let randomNumber = Math.trunc(Math.random() * 20 + 1);
let highScore = 0;
let score = 20;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// adding an eventListener to the check button on the game
document.querySelector('.check').addEventListener('click', function () {
  // getting the guessed number of the user
  const guess = Number(document.querySelector('.guess').value);

  // condition to check if there is no number entered by the
  if (!guess) {
    displayMessage('No Number!');

    // condition to check if the guessed number is equal to the secret number
  } else if (randomNumber === guess) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = guess;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // condition to check if the guessed number is greater than the secret number
  } else if (randomNumber !== guess) {
    if (score > 1) {
      displayMessage(guess > randomNumber ? 'Too High!' : 'Too Low!');
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the Game!';
    }
  }
});

// ============== CODE CHALLENGE 1 ===================

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

// implementing the eventListener to the check button

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20 + 1);

  // initializing the score of the player
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '15rem';
});
