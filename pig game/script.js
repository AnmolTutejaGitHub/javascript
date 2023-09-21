'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');  //El -- element 
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');   //ID selector
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Starting conditions of the same 
const init = function () {
  scores = [0, 0];

  //variable to store current score 
  currentScore = 0;


  activePlayer = 0; //staring player will be O
  playing = true;

  score0El.textContent = 0;   //we are defining numbers here , js will automatically convert it into string 
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');   //hidden class
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer =function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0; //current--0/1  is ID 
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;  //ternary operator for switching player
  player0El.classList.toggle('player--active');//toogle method will add class if its not there and will remove it if its there ,, another method of adding removing class
  player1El.classList.toggle('player--active');//player--active is the class where css of 
};

// Rolling dice functionality   //eventlistener
btnRoll.addEventListener('click', function () {
  if (playing) {

    // 1.Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;   //math.random functionality in detail in nb


    // 2.Display dice
    diceEl.classList.remove('hidden');

    //manipulating src to generate dice 
    //use template literals
    diceEl.src = `dice-${dice}.png`;

    // 3.Check for rolled 1
    if (dice !== 1) {

      //Add dice to current score
      currentScore = currentScore+dice;

      //to know which is active player
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;  //this will set current score corresponding to the player playing 
    } else {
      //Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1.Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {

      // Finishing  the game
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {

      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
