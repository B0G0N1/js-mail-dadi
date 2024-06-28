// ------------------------------
//    CODICE ACCESSO CON EMAIL
// ------------------------------
const authorized_emails_list = ["pippo@gmail.com", "pluto@gmail.com", "tizio@gmail.com", "caio@gmail.com", "sempronio@gmail.com"];
const user_email = prompt("Inserisci la tua email: ");
let access_granted = false;

for (let i = 0; i < authorized_emails_list.length; i++) {
    if (user_email === authorized_emails_list[i]) {
        access_granted = true;
        break;
    }
}

if (access_granted) {
    alert("ACCESSO CONSENTITO");
} else {
    alert("ACCESSO NEGATO");
}