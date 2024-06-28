// ------------------------------
//    CODICE ACCESSO CON EMAIL
// ------------------------------
document.getElementById("check-access").onclick = checkAccess;

function checkAccess() {
    const authorized_emails_list = ["x", "pippo@gmail.com", "pluto@gmail.com", "tizio@gmail.com", "caio@gmail.com", "sempronio@gmail.com"];
    const user_email = document.getElementById("input-email").value;
    let access_granted = false;

    for (let i = 0; i < authorized_emails_list.length; i++) {
        if (user_email === authorized_emails_list[i]) {
            access_granted = true;
            break;
        }
    }

    const accessBox = document.getElementById("access-box");
    const accessMessage = document.getElementById("access-message");

    if (access_granted) {
        accessBox.classList.remove("access-red");
        accessBox.classList.add("access-green");
        accessMessage.textContent = "Access Consented";
    } else {
        accessBox.classList.remove("access-green");
        accessBox.classList.add("access-red");
        accessMessage.textContent = "Access Denied";
    }
}
