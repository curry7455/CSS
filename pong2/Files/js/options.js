// Function to pause the game
function pauseGame() {
    gameState = 'pause'; // Ensure gameState is defined and used in the game logic
}

// Function to update output divs with the current value
function updateOutput(divs, index, value) {
    divs[index].textContent = value;
}

// Make the Options Button show or hide the .sides div
const optionsHeader = document.querySelector("#options h2");
optionsHeader.addEventListener("click", function() {
    const sidesDiv = document.querySelector(".sides");
    sidesDiv.classList.toggle("hidden");
});

// Select all fill inputs and output divs for colors
const fillInputs = document.querySelectorAll('input.fill');
const fillOutputDivs = document.querySelectorAll('.fill-output');

// Select all "up" input elements for controlling keys
const uInputs = document.querySelectorAll('input.u');
const uOutputDivs = document.querySelectorAll('.u-output');

// Select all "straight" input elements for controlling keys
const straightInputs = document.querySelectorAll('input.s');
const straightOutputDivs = document.querySelectorAll('.s-output');

// Select all "down" input elements for controlling keys
const dInputs = document.querySelectorAll('input.d');
const dOutputDivs = document.querySelectorAll('.d-output');

// Select paddle speed controls
const paddleSpeedInput = document.querySelector('#paddle-speed-input');
const paddleSpeedOutput = document.querySelector('#paddle-speed-output');

// Loop through the fill inputs
fillInputs.forEach((input, index) => {
    // Ensure that player index is correctly mapped
    const playerIndex = Math.floor(index / 2); // Adjust if necessary based on HTML structure
    input.value = player[playerIndex].fill;
    updateOutput(fillOutputDivs, playerIndex, player[playerIndex].fill);

    input.addEventListener('input', (e) => {
        player[playerIndex].fill = e.target.value;
        player[playerIndex].pad.fill = player[playerIndex].fill;
        updateOutput(fillOutputDivs, playerIndex, player[playerIndex].fill);
    });

    input.addEventListener('focus', pauseGame);
});

// Loop through the up inputs
uInputs.forEach((input, index) => {
    input.value = player[index].controls.up;
    updateOutput(uOutputDivs, index, player[index].controls.up);

    input.addEventListener('keydown', (event) => {
        event.preventDefault();
        const newKey = event.key;
        input.value = newKey;
        player[index].controls.up = newKey;
        updateOutput(uOutputDivs, index, newKey);
    });

    input.addEventListener('focus', pauseGame);
});


straightInputs.forEach((input, index) => {
    input.value = player[index].controls.straight;
    updateOutput(straightOutputDivs, index, player[index].controls.straight);

    input.addEventListener('keydown', (event) => {
        event.preventDefault();
        const newKey = event.key;
        input.value = newKey;
        player[index].controls.straight = newKey;
        updateOutput(straightOutputDivs, index, newKey);
    });

    input.addEventListener('focus', pauseGame);
});


dInputs.forEach((input, index) => {
    input.value = player[index].controls.down;
    updateOutput(dOutputDivs, index, player[index].controls.down);

    input.addEventListener('keydown', (event) => {
        event.preventDefault();
        const newKey = event.key;
        input.value = newKey;
        player[index].controls.down = newKey;
        updateOutput(dOutputDivs, index, newKey);
    });

    input.addEventListener('focus', pauseGame);
});


paddleSpeedInput.addEventListener('input', (e) => {
    const newSpeed = e.target.value;
    paddleSpeedOutput.textContent = newSpeed;
    paddleSpeed = newSpeed; 
});


paddleSpeedOutput.textContent = paddleSpeedInput.value;
