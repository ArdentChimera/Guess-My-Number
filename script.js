'use strict';

const input = document.querySelector('.guess');
const guessBtn = document.querySelector('.check');
const resetBtn = document.querySelector('.again');

let score = Number(document.querySelector('.score').textContent);
let winningNumber = generateRandomNumber();

guessBtn.addEventListener('click', handleClick);
resetBtn.addEventListener('click', handleReset);

function handleClick(e) {
  e.preventDefault();

  console.log(Number(input.value));

  if (Number(input.value) === winningNumber) {
    document.querySelector('.message').textContent = 'Correct number';
    document.querySelector('.highscore').textContent = score;
    document.body.style.backgroundColor = 'green';
    guessBtn.setAttribute('disabled', 'disabled');
  } else if (Number(input.value) < winningNumber) {
    document.querySelector('.message').textContent = 'Too low...';
    score--;

    if (score === 0) {
      document.querySelector('.message').textContent = 'Game Over';
      document.body.style.backgroundColor = 'red';
      document.querySelector('.score').textContent = 0;

      guessBtn.setAttribute('disabled', 'disabled');
    } else {
      document.querySelector('.score').textContent = score;
    }
  } else if (Number(input.value) > winningNumber) {
    document.querySelector('.message').textContent = 'Too high...';

    if (score === 0) {
      document.querySelector('.message').textContent = 'Game Over';
      document.body.style.backgroundColor = 'red';
      document.querySelector('.score').textContent = 0;

      guessBtn.setAttribute('disabled', 'disabled');
    } else {
      document.querySelector('.score').textContent = score;
    }
  }

  input.value = '';
}

function handleReset() {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.highscore').textContent = '0';
  guessBtn.removeAttribute('disabled');
  document.body.style.backgroundColor = '#222';
  winningNumber = generateRandomNumber();
  score = Number(document.querySelector('.score').textContent);
}

function generateRandomNumber() {
  const number = Math.floor(Math.random() * 20 + 1);

  return number;
}
