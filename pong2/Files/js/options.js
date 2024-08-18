// Make the Options Button show or hide the .sides div
var optionsHeader = document.querySelector("#options h2");

optionsHeader.addEventListener("click", function() {
    var sidesDiv = document.querySelector(".sides");
    sidesDiv.classList.toggle("hidden");
});

//divs for colors
const fillInputs = document.querySelectorAll('input.fill');
const fillOutputDivs = document.querySelectorAll('.output');

//controlling keys
const uInputs = document.querySelectorAll('.u-input');
const uOutputDivs = document.querySelectorAll('.u-output');

//up key for each player
function updateOutput(playerIndex, newKey) {
    uOutputDivs[playerIndex].textContent = newKey;
}

//add event listeners
fillInputs.forEach((input, index) => {
    input.value = player[index].fill;
    fillOutputDivs[index].innerHTML = player[index].fill;

    input.addEventListener('input', (e) => {
        player[index].fill = e.target.value;
        player[index].pad.fill = player[index].fill;
        fillOutputDivs[index].innerHTML = player[index].fill;
    });
});


uInputs.forEach((input, index) => {
    
    input.value = players[index].controls.u;

    
    input.addEventListener('keydown', (event) => {
        event.preventDefault(); 
        const newKey = event.key;
        input.value = newKey; 
        players[index].controls.u = newKey; 
        updateOutput(index, newKey); 

    
    input.addEventListener('focus', () => {
        gameState = 'pause'; // pause the game
    });
});
