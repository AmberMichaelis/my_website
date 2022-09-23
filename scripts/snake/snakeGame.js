import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeHitsItself } from './snakeCharacter.js';
import { update as updateFood, draw as drawFood} from './snakeFood.js'
import { outsideGrid } from './snakeGrid.js'

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('snake__game__board')

// Game Loop
function snakeMain(currentTime) {
    if (gameOver) {
        if (confirm('Press ok to try again')) {
            window.location = '/projects/snake.html';
        }
        return;
    }
    window.requestAnimationFrame(snakeMain);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < (1 / SNAKE_SPEED)) {
        return;
    }
    lastRenderTime = currentTime;

    update(); // moves snake (but doesn't draw it), grows snake, lose condition
    draw(); // takes info from update method and draws it in correct position
}

window.requestAnimationFrame(snakeMain);

function update() {
    updateSnake();
    updateFood();
    checkDeath();
}

function draw() {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeHitsItself();
}
