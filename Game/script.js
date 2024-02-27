'use strict';

//document.querySelector('.etc).textContent/vlaue;
//console.log(document.querySelector('//class .message //id #message').textContent);
//console.log(document.querySelector('.guess').value);

/*addEventListener('name',function()


});
*/
// Math.trunc -> to make it real number not decimal
// Math.random() -> to get a random number
// *20 -> from 0 to 19  ,  +1 to make it to 20

let Secretnum = Math.trunc(Math.random() * 26);

let score = 4;
let highscore = 0;
let attempts = 0;

const DisplayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const DisplaySecretNum = function (Snum) {
  document.querySelector('.number').textContent = Snum;
};

const BackgroundColorf = function (Bcolor) {
  document.querySelector('body').style.backgroundColor = Bcolor;
};

const DisplayScore = function (Uscore) {
  document.querySelector('.score').textContent = Uscore;
};

//Check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); // (Number) to convert string to num

  //console.log(guess, typeof guess);

  //if guess is falsy(empty)
  if (!guess) {
    DisplayMessage('enter a real number');
  }

  //When player wins:
  else if (guess === Secretnum) {
    //document.querySelector('.message').textContent = 'Correct number 👌';
    DisplayMessage('Correct number 👌');
    DisplaySecretNum(Secretnum);
    BackgroundColorf('#60b347');
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
      document.querySelector('.guess').disabled = true;
    }
  }
  //when the guess is higher/lower
  else if (guess !== Secretnum)
    if (score > 1) {
      DisplayMessage(guess > Secretnum ? 'Too High ' : 'Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      BackgroundColorf('#ff0000');
      DisplayMessage('Game Over!');
      DisplaySecretNum(Secretnum);
      DisplayScore(0);
      document.querySelector('.guess').disabled = true;
    }
  //when the guess is lower
  /*
  else if (guess < Secretnum)
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('body').style.backgroundColor = '#ff0000';
      document.querySelector('.message').textContent = 'Game Over!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = Secretnum;
      document.querySelector('.guess').disabled = true;
    }
    */
});

//again button
document.querySelector('.again').addEventListener('click', function () {
  Secretnum = Math.trunc(Math.random() * 20 + 1);
  score = 4;

  BackgroundColorf('#3700ff');
  DisplayMessage('start guessing...');
  DisplaySecretNum('?');
  DisplayScore(score);
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').disabled = false;
  document.querySelector('.guess').value = '';

  attempts++;
  document.querySelector('.attempts').textContent = attempts;
});
