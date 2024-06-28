// ------------------------------
//    CODICE ACCESSO CON EMAIL
// ------------------------------

// Aggiunge un event listener al pulsante "check-access-btn" per verificare l'accesso
document.getElementById("check-access-btn").addEventListener("click", function () {
    // CERCATO SU INTERNET "reportValidity()"
    // Controlla la validità del modulo e, se corretta, esegue checkAccess.
    if (document.getElementById("email-form").reportValidity()) {
        checkAccess();
    }
});

// Funzione per controllare se l'email dell'utente è autorizzata
function checkAccess() {
    const authorizedEmails = ["pippo@gmail.com", "pluto@gmail.com", "tizio@gmail.com", "caio@gmail.com", "sempronio@gmail.com"];
    const userEmail = document.getElementById("input-email").value;
    let accessGranted = false;

    // Controlla se l'email dell'utente è nell'elenco delle email autorizzate
    for (let i = 0; i < authorizedEmails.length; i++) {
        if (authorizedEmails[i] === userEmail) {
            accessGranted = true;
            break;
        }
    }

    const accessBox = document.getElementById("access-box");
    const accessMessage = document.getElementById("access-message");

    // Aggiorna le classi CSS e il messaggio di accesso
    if (accessGranted) {
        // Rimuove la classe "access-red" e aggiunge "access-green"
        accessBox.classList.remove("access-red");
        accessBox.classList.add("access-green");
        // Imposta il messaggio di accesso consentito
        accessMessage.textContent = "Access Consented";
    }
    else {
        // Rimuove la classe "access-green" e aggiunge "access-red"
        accessBox.classList.remove("access-green");
        accessBox.classList.add("access-red");
        // Imposta il messaggio di accesso negato
        accessMessage.textContent = "Access Denied";
    }
}




// ------------------------------
//    CODICE GIOCO DEI DADI
// ------------------------------

// Aggiunge un event listener al pulsante "dice" per avviare il gioco dei dadi
document.getElementById('dice').addEventListener('click', diceGame);

// Funzione per il gioco dei dadi
function diceGame() {
    const playerRoll = Math.ceil(Math.random() * 6);
    const computerRoll = Math.ceil(Math.random() * 6);

    const scoreElement = document.getElementById('score');
    scoreElement.textContent = `${playerRoll} - ${computerRoll}`;

    const winnerElement = document.getElementById('winner');

    // Determina e mostra il vincitore
    if (playerRoll > computerRoll) {
        winnerElement.textContent = "Giocatore";
    } else if (computerRoll > playerRoll) {
        winnerElement.textContent = "Computer";
    } else {
        winnerElement.textContent = "Pareggio";
    }
}