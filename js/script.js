document.getElementById("check-access-btn").addEventListener("click", function () {
    document.getElementById("email-form").reportValidity();
    checkAccess();
});

function checkAccess() {
    const authorizedEmails = ["pippo@gmail.com", "pluto@gmail.com", "tizio@gmail.com", "caio@gmail.com", "sempronio@gmail.com"];
    const userEmail = document.getElementById("input-email").value;
    const accessGranted = authorizedEmails.includes(userEmail);

    const accessBox = document.getElementById("access-box");
    const accessMessage = document.getElementById("access-message");

    accessBox.classList.toggle("access-green", accessGranted);
    accessBox.classList.toggle("access-red", !accessGranted);
    accessMessage.textContent = accessGranted ? "Access Consented" : "Access Denied";
}

document.getElementById('dice').addEventListener('click', diceGame);

function diceGame() {
    const playerRoll = Math.ceil(Math.random() * 6);
    const computerRoll = Math.ceil(Math.random() * 6);

    const scoreElement = document.getElementById('score');
    scoreElement.textContent = `${playerRoll} - ${computerRoll}`;

    const winnerElement = document.getElementById('winner');

    if (playerRoll > computerRoll) {
        winnerElement.textContent = "Giocatore";
    } else if (computerRoll > playerRoll) {
        winnerElement.textContent = "Computer";
    } else {
        winnerElement.textContent = "Pareggio";
    }
}