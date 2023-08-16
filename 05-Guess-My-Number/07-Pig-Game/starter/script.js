'use strict';

window.onload = function () {
    OpenBootstrapPopup();
};
function OpenBootstrapPopup() {
    $("#myModal").modal('show');
}

function openHoldPopup(){
    $("#holdModal").modal('show');
    let cnt = (100-score[activePlayer] > 0) ? 100-score[activePlayer] : 0;
    document.getElementById('hold').innerHTML = `Player Switched as per the rules and By holding, It saves your score permenantly and ${cnt} is remaining to win`;
}

function openOnePopup() {
    $("#oneModal").modal('show');
}

function openWinnerPopup(){
    $("#winnerModal").modal('show');
}

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnRule = document.querySelector('.btn--rules');

btnRule.addEventListener('click',OpenBootstrapPopup);


score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');


let score, currentScore, activePlayer, playing;

const init = function () {
    score = [0, 0];
    activePlayer = 0;
    playing = true;
    currentScore = 0;

    score0.textContent = 0;
    score1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;

    dice.classList.add('hidden');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
}
init();

const swithPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = (activePlayer === 0 ? 1 : 0);
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function () {
    if (playing) {
        //generate the random number btwn 1 to 6
        const diceNum = Math.trunc(Math.random() * 6 + 1);
        //display dice
        dice.classList.remove('hidden');
        //setting dice according to dice number
        dice.src = `dice-${diceNum}.png`;

        if (diceNum !== 1) {
            //add to current score
            currentScore += diceNum;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            openOnePopup();
            swithPlayer();
        }
    }
})

btnHold.addEventListener('click', function () {
    if (playing) {
        score[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
        if (score[activePlayer] >= 20) {
            playing = false;
            dice.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            openWinnerPopup();
            return;
        }
        
        openHoldPopup();
        swithPlayer();
    }
})

btnNew.addEventListener('click', init);