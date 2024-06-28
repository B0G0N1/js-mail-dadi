<!-------------------------
     CONSEGNA ESERCIZIO
-------------------------->
Ciao ragazzi,
Esercizio di oggi:
nome repo: js-mail-dadi
Mail
Chiedi all’utente la sua email (tramite prompt o input, a voi la scelta),
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Vietato utilizzare la funzione includes
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
Buon lavoro e buon divertimento!



<!----------------------
    PSEUDO CODICE MAIL
------------------------>
1.  Definire una lista di email autorizzate:
    authorized_emails_list = ["email1@example.com", "email2@example.com", "email3@example.com", ...]
2.  Chiedere all'utente di inserire la sua email:
    user_email = INPUT("Inserisci la tua email: ")
3.  Impostare una variabile di controllo a falso:
    access_granted = FALSO
4.  Controllare attraverso la lista di email autorizzate:
    PER OGNI email IN authorized_emails_list:
        SE user_email è UGUALE A email:
            access_granted = VERO
            INTERROMPI IL ciclo
5.  Controllare il risultato del controllo:
    SE access_granted è VERO:
        STAMPA "Accesso consentito"
    ALTRIMENTI:
        STAMPA "Accesso negato"