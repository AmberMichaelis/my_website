import { snakeEats, growSnake } from './snakeCharacter.js'
import { randomGridPosition } from './snakeGrid.js'

let food = getRandomFoodPosition();
const GROWTH_RATE = 5;

export function update() {
    if (snakeEats(food)) {
        growSnake(GROWTH_RATE);
        food = getRandomFoodPosition();
    }
}

export function draw(gameBoard) {
    const foodElement = document.createElement('div');
    foodElement.style.gridColumnStart = food.x;
    foodElement.style.gridRowStart = food.y;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition() {
    let newFoodPosition;
    while (newFoodPosition == null || snakeEats(newFoodPosition)) {
        newFoodPosition = randomGridPosition();
    }
    return newFoodPosition;
}


