'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!'

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displaMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener(
    'click', function () {
        const guess = Number(document.querySelector('.guess').value)
        if (!guess) {
            displaMessage('No Number!');

        } else if (guess === secretNumber) {
            displaMessage('Correct Number');
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('body').style.backgroundColor = '#60b347'
            document.querySelector('.number').style.width = '30rem';

            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
        } else if (guess !== secretNumber) {
            if (score > 1) {
                displaMessage((guess > secretNumber) ? 'Too High' : 'Too Low');
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.score').textContent = 0;
                displaMessage("You Lost The Game");
            }
        }

        // else if (guess > secretNumber) {
        //     if (score > 1) {
        //         document.querySelector('.message').textContent = 'Too High';
        //         score--;
        //         document.querySelector('.score').textContent = score;
        //     }else {
        //         document.querySelector('.score').textContent = 0;
        //         document.querySelector('.message').textContent = "You Lost The Game";
        //     }
        // } else if (guess < secretNumber) {
        //     if (score > 1) {
        //         document.querySelector('.message').textContent = 'Too Low';
        //         score--;
        //         document.querySelector('.score').textContent = score;
        //     }else {
        //         document.querySelector('.score').textContent = 0
        //         document.querySelector('.message').textContent = "You Lost The Game";
        //     }
        // }
    });

document.querySelector('.again').addEventListener(
    'click', function () {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20 + 1);

        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        displaMessage('Start guessing...');
        document.querySelector('.score').textContent = score;
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';

    })