import Ball from './Ball.js';
import Paddle from './Paddle.js';

const gamecontainer = document.getElementById('game-container')
const ball = new Ball(document.getElementById("ball"));

const playerPaddle = new Paddle(document.getElementById('player-paddle'));
const computerPaddle = new Paddle(document.getElementById('computer-paddle'));


let lastTime;
let gameStarted = true;

function update(time) { 
    if (gameStarted) {
        if (lastTime != null) {
            const delta = time - lastTime;
            ball.update(delta);
            computerPaddle.update(delta, ball.y)
        }

        lastTime = time;
        window.requestAnimationFrame(update);
    }
}
function startGame() {
    gameStarted = true;
    window.requestAnimationFrame(update);
}



document.addEventListener('click', () => {
    startGame();
});

