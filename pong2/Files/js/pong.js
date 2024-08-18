
let paddleSpeed = 10;


const paddle1 = {
    y: 0,
    velocity: 1
};

const paddle2 = {
    y: 0,
    velocity: 1
};


function movePaddles() {
    
    paddle1.y += paddle1.velocity * paddleSpeed;
    paddle2.y += paddle2.velocity * paddleSpeed;

    
    paddle1.y = Math.max(0, Math.min(paddle1.y, canvas.height - paddleHeight));
    paddle2.y = Math.max(0, Math.min(paddle2.y, canvas.height - paddleHeight));
}


function updateGame() {
    movePaddles();
    
}


function gameLoop() {
    updateGame();
    requestAnimationFrame(gameLoop);
}


const canvas = document.getElementById('pong');
const ctx = canvas.getContext('2d');
const paddleHeight = 100; 


gameLoop();
