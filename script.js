"use strict";
/*
//  Changing the text throgh DOM manupulation
document.querySelector('.message').textContent = 'Correct Number!✔';
console.log(document.querySelector('.message').textContent);
document.querySelector('.guess');
document.querySelector('.guess').value = 41;
*/

// Generating secret number ...
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //  When no guess or input...
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number!';
    displayMessage("⛔ No Number!");

    // When wins the game
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '✅ Correct Number!';
    displayMessage("✅ Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    ///Manupulatung CSS style
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // Setting the Highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // Refactoring the code
    // When the guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
      displayMessage(guess > secretNumber ? "📈 Too High!" : "📉 Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector('.message').textContent = '😡 You lost the game';
      displayMessage("😡 You lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }

  //   ///When the guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😡 You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  //
  //   /// When the guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😡 You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

/// Player can play AGAIN the game....
////Implement a game rest functionality, so that the player can make a new guess!
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  // document.querySelector('.message').textContent =   "Start guessing....";
  displayMessage("Start guessing....");
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
