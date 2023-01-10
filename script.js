'use strict';

let guessNumber = Math.trunc(Math.random() * 20 + 1);
let scores = Number(document.querySelector(`.score`).textContent);
let highScore = 0;
console.log(scores);
// console.log(highScore);
// console.log(typeof highScore);

document.querySelector('.check').addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  //   console.log(guess, typeof guess);
  //   document.querySelector(`.message`).textContent = `correct answer!!`;
  //   console.log(guessNumber);

  if (!guess) {
    document.querySelector(`.message`).textContent = `❌❌ no number`;
  } else if (guess > guessNumber) {
    if (scores > 1) {
      document.querySelector(`.message`).textContent = `📈📈Too High!!`;
      scores = scores - 1;
      document.querySelector(`.score`).textContent = scores;
      document.querySelector(`body`).style.backgroundColor = '#eb9f34';
    } else {
      document.querySelector(`.score`).textContent = 0;
      document.querySelector(`.message`).textContent = `You have lost😢😢`;
      document.querySelector(`body`).style.backgroundColor = '#eb3434';
    }
  } else if (guess < guessNumber) {
    if (scores > 1) {
      document.querySelector(`.message`).textContent = `📉📉Too Low!!`;
      scores = scores - 1;
      document.querySelector(`.score`).textContent = scores;
      document.querySelector(`body`).style.backgroundColor = '#3449eb';
    } else {
      document.querySelector(`.score`).textContent = 0;
      document.querySelector(`.message`).textContent = `You have lost😢😢`;
      document.querySelector(`body`).style.backgroundColor = '#eb3434';
    }
  } else {
    document.querySelector(`.message`).textContent = `🎉correct answer!!`;
    if (highScore < scores) {
      highScore = scores;
    }

    document.querySelector(`.number`).textContent = guessNumber;
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector(`body`).style.backgroundColor = '#34ebb1';
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  document.querySelector('.number').textContent = '?';
  document.querySelector(`body`).style.backgroundColor = '#222';
  document.querySelector(`.score`).textContent = 20;
  scores = 20;
  guessNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(`.message`).textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
});
