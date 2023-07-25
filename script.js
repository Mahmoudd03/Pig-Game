'use strict';
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const rollButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');
const newGameButton = document.querySelector('.btn--new');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
let score0 = 0;
let score1 = 0;
const dicesImages = [
    0,
    'dice-1.png',
    'dice-2.png',
    'dice-3.png',
    'dice-4.png',
    'dice-5.png',
    'dice-6.png',
];
const players = document.querySelectorAll('.player');

let currentScore = 0;

score0El.textContent = 0;
score1El.textContent = 0;
dice.style.display = 'none';

rollButton.addEventListener('click', rollDice);
holdButton.addEventListener('click', hold);
newGameButton.addEventListener('click', newGame);

function rollDice() {
    dice.style.display = 'block';
    const rolledNumber = Math.trunc(Math.random() * 6) + 1;
    switch (rolledNumber) {
        case 1:
            dice.src = dicesImages[1];
            break;
        case 2:
            dice.src = dicesImages[2];
            break;
        case 3:
            dice.src = dicesImages[3];
            break;
        case 4:
            dice.src = dicesImages[4];
            break;
        case 5:
            dice.src = dicesImages[5];
            break;
        case 6:
            dice.src = dicesImages[6];
            break;
    }
    for (let i = 0; i < players.length; i++) {
        if (players[i].classList.contains('player--active')) {
            if (rolledNumber != 1) {
                currentScore += rolledNumber;
                document.querySelector('.player--active .current .current-score').textContent = currentScore;
            }
            else {
                currentScore = 0;
                document.querySelector('.player--active .current .current-score').textContent = 0;
            }
        }
    }
    if (rolledNumber == 1) {
        players[0].classList.toggle('player--active');
        players[1].classList.toggle('player--active');
    }
}
function hold() {
    if (player0.classList.contains('player--active')) {
        score0 += currentScore;
        player0.querySelector('.player--0 .score').textContent = score0;
        document.querySelector('.player--active .current .current-score').textContent = 0;
    }
    else {
        score1 += currentScore;
        player1.querySelector('.player--1 .score').textContent = score1;
        document.querySelector('.player--active .current .current-score').textContent = 0;
    }
    currentScore = 0;

    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}
function newGame(){
    dice.style.display = 'none';
    score0 = 0;
    score1 = 0;
    player0.querySelector('.player--0 .score').textContent = 0;
    player1.querySelector('.player--1 .score').textContent = 0;
    currentScore = 0;
    document.querySelector('.player--active .current .current-score').textContent = 0;
}