let inputDirection = { x: 0, y: 0 };
let lastDirection;

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if (lastDirection === 'down') break;
            lastDirection = 'up';
            inputDirection = { x: 0, y: -1 };
            break;
        case 'ArrowDown':
            if (lastDirection === 'up') break;
            lastDirection = 'down';
            inputDirection = { x: 0, y: 1 };
            break;
        case 'ArrowRight':
            if (lastDirection === 'left') break;
            lastDirection = 'right';
            inputDirection = { x: 1, y: 0 };
            break;
        case 'ArrowLeft':
            if (lastDirection === 'right') break;
            lastDirection = 'left';
            inputDirection = { x: -1, y: 0 };
            break;
    }
})

export function getInputDirection() {
    return inputDirection;
}
