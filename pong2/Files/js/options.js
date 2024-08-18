/*--------
    Make the Options Button 
    . on click
    . show or hide the `.sides` div
---------*/
var optionsHeader = document.querySelector("#options h2");

// Select all fill inputs and input divs
const fillInputs = document.querySelectorAll('input.fill');
const outputDivs = document.querySelectorAll('.output');
/*---------
    Program the two fill inputs to do the following:
    . Display the correct colors on the inputs and outputs and paddles    
    . using an `input` event
        . Change the player's fill property to the value of the input
        . Change the pad's fill property  to the player's fill property
        . Show the fill's hex code in the output div 

-----------*/
// Event listener, fill color
optionsHeader.addEventListener("click", function() {
    var sidesDiv = document.querySelector(".sides");
    sidesDiv.classList.toggle("hidden");
});

// Loop through the fill inputs
fillInputs.forEach((input, index) => {
    input.value = player[index].fill;
    outputDivs[index].innerHTML = player[index].fill;

    input.addEventListener('input', (e) => {
        player[index].fill = e.target.value;
        player[index].pad.fill = player[index].fill;
        outputDivs[index].innerHTML = player[index].fill;
    });
});
/*---------
    Program the six key inputs to do the following:
    . Display the correct key names for each player   
    . using a `keydown` event
        .Display the correct key name in the input
        .Change the player's key to the value of the input
        .Show the player's key in the output div 
-----------*/
