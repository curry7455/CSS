// Initial setup for the menu
document.addEventListener('DOMContentLoaded', function () {
    const menusDiv = document.getElementById('menus');

    // Create the start-options div
    const startOptions = document.createElement('div');
    startOptions.id = 'start-options';

    // Create the buttons
    const newGameButton = document.createElement('button');
    newGameButton.textContent = 'New Game';
    newGameButton.setAttribute('data-load', 'false');

    const continueButton = document.createElement('button');
    continueButton.textContent = 'Continue';
    continueButton.setAttribute('data-load', 'true');

    const highScoresButton = document.createElement('button');
    highScoresButton.textContent = 'High Scores';

    // Append the buttons to the startOptions div
    startOptions.appendChild(newGameButton);
    startOptions.appendChild(continueButton);
    startOptions.appendChild(highScoresButton);

    // Append the startOptions div to the menus div
    menusDiv.appendChild(startOptions);

    // Event listeners for the buttons
    newGameButton.addEventListener('click', function () {
        window.location.href = 'lobby.html?load=false';
    });

    continueButton.addEventListener('click', function () {
        window.location.href = 'lobby.html?load=true';
    });

    highScoresButton.addEventListener('click', function () {
        window.location.href = 'hs.html';
    });
});

// Function to remove the start menu and display the new menu
function switchToGameMenu() {
    const menusDiv = document.getElementById('menus');
    while (menusDiv.firstChild) {
        menusDiv.removeChild(menusDiv.firstChild);
    }

    // Here you would create and append the new game menu elements, similar to above
}
