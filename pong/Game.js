// Initialize canvas and context
const c = document.getElementById('gameCanvas');
const ctx = c.getContext('2d');

// Declare the player array
let player = [];

// Add new Player instances to the array
player[0] = new Player('Player 1', new Box(50, c.height / 2, 20, 100, 'rgba(255, 0, 0)'));
player[1] = new Player('Player 2', new Box(c.width - 50, c.height / 2, 20, 100, 'rgba(255, 0, 0)'));

// Existing ball initialization
let ball = new GameObject(c.width / 2, c.height / 2, 20, 20, 'rgba(25, 25, 25)');

// Query selectors for the score divs
const scoreDivs = document.querySelectorAll('#score div');

function gameLoop() {
    handleInput(); 
    ctx.clearRect(0, 0, c.width, c.height);

    // Update and render players' paddles using a for loop
    for (let i = 0; i < player.length; i++) {
        player[i].pad.move();
        constrainPaddles(player[i].pad);
    }

    // Ball movement 
    ball.move()
    handleBallCollisionWithWalls();

    // Ball collision with paddles and scoring 
    for (let i = 0; i < player.length; i++) {
        if (collide(ball, player[i].pad)) {
            ball.vx = i === 0 ? Math.abs(ball.vx) : -Math.abs(ball.vx);
            ball.x = i === 0 ? player[i].pad.x + player[i].pad.w / 2 + ball.w / 2 : player[i].pad.x - player[i].pad.w / 2 - ball.w / 2;
            generateParticles(ball, ball.x, ball.y);
        }
    }

    // Render paddles, ball, and particle
    for (let i = 0; i < player.length; i++) {
        player[i].pad.render();
    }
    ball.render();
    renderParticles();

    // Update the scores in the HTML
    scoreDivs[0].innerText = player[0].score;
    scoreDivs[1].innerText = player[1].score;

    requestAnimationFrame(gameLoop);
}

// Start the game 
gameLoop();

// Function to constrain paddles
function constrainPaddles(pad) {
    if (pad.y - pad.h / 2 < 0) {
        pad.y = pad.h / 2;
    } else if (pad.y + pad.h / 2 > c.height) {
        pad.y = c.height - pad.h / 2;
    }
}

// Function to handle ball collision with walls
function handleBallCollisionWithWalls() {
    if (ball.y - ball.h / 2 < 0 || ball.y + ball.h / 2 > c.height) {
        ball.vy = -ball.vy;
    }
    if (ball.x - ball.w / 2 < 0) {
        player[1].score += 1;
        console.log(`${player[0].score} | ${player[1].score}`);
        resetBall();
    } else if (ball.x + ball.w / 2 > c.width) {
        player[0].score += 1;
        console.log(`${player[0].score} | ${player[1].score}`);
        resetBall();
    }
}

// Function to reset the ball's position and speed
function resetBall() {
    ball.x = c.width / 2;
    ball.y = c.height / 2;
    ball.vx = (Math.random() > 0.5 ? 1 : -1) * 5;
    ball.vy = (Math.random() * 4) - 2;
}

// Function to detect collision between two objects
let particles = []; 

function generateParticles(ball, x, y) {
    const particleCount = 20;
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: x,
            y: y,
            vx: (Math.random() - 0.5) * 4,
            vy: (Math.random() - 0.5) * 4,
            color: `rgba(255, 64, 0, ${Math.random()})`,
            life: Math.random() * 20
        });
    }
}

function renderParticles() {
    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 1;
    });

    particles = particles.filter(p => p.life > 0); 
}

// Function to handle input)
function handleInput() {
    if (keys['w']) {
        player[0].pad.vy = -5;
    } else if (keys['s']) {
        player[0].pad.vy = 5;
    } else {
        player[0].pad.vy = 0;
    }

    if (keys['ArrowUp']) {
        player[1].pad.vy = -5;
    } else if (keys['ArrowDown']) {
        player[1].pad.vy = 5;
    } else {
        player[1].pad.vy = 0;
    }
}
