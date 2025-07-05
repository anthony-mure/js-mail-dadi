/*Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota:
Non è necessario provvedere alla validazione delle email*/

//creo una lista di email di invitati a duna festa//

const listEmail = ["ironman@gmail.com","walter.white@gmail.com","peter.parker@gmail.com","gerald.di.rivia@gmail.com","monkey.d.luffy@gmail.com","nico.robin@gmail.com","mikasa.ackerman@gmail.com","nezuko.kamado.@gmail.com","fujiko.mine@gmail.com","bulma.brief@gmail.com"];

//chiedi all'utente la sua email//

const userEmail = parseInt(prompt("inserisci la tua email"));

let found = ("EMAIL TROVATA! puoi accedere al party!");
let notFound =("EMAIL NON TROVATA!!!");
//controlla che sia nella lista degli invitati e stampa un messaggio sull'esito del controllo//

for(let i = 0; i < listEmail.length; i++){
  if(userEmail === listEmail[i] ){
  
  }
}



  
    
  
   
    

