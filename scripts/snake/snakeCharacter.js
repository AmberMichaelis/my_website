import { getInputDirection } from "./snakeInput.js";

export const SNAKE_SPEED = 5; // How many times the snake moves per second
const snakeBody = [{ x: 11, y: 11 }] // Initial snake segment
let newSegments = 0;

export function update() {
    addSegments();
    // Determine which direction to move snake based on arrow keys
    const inputDirection = getInputDirection()
    // Start with second to last div in snakeBody
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        // Move previous div to parent div location
        snakeBody[i + 1] = { ...snakeBody[i] };
    }

    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    })
}

export function growSnake(amount) {
    newSegments += amount;
}

export function snakeEats(position, { ignoreHead = false } = {}) {
    // Checks each snake segment and returns true if at least one segment is located at the agrument's position
    return snakeBody.some((segment, index) => {
        // If ignoreHead option is passed in as true, returns false when checking head segment
        if (ignoreHead && index === 0) return false;
        return equalPositions(segment, position);
    })
}

export function getSnakeHead() {
    return snakeBody[0];
}

export function snakeHitsItself() {
    return snakeEats(snakeBody[0], { ignoreHead: true})
}

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y;
}

function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1]})
    }

    newSegments = 0;
}
