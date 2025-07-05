/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/


// definisco le variabili //

const randomPcNumbers = [];
const randomUserNumbers = [];

//variabili per vedere il punteggio//

let pcPoints = 0 ;
let userPoints = 0 ;

//genero 2 numeri da 1 a 6 casuali per il pc e l'utente//

for(let i = 0; i < 2 ; i++){

  const pcNumbers = Math.floor(Math.random() * 6) + 1;

  const userNumbers = Math.floor(Math.random() * 6) + 1;

  randomPcNumbers.push(pcNumbers);

  randomUserNumbers.push(userNumbers);

  if(pcNumbers > userNumbers){
    pcPoints++;
  }
  else if(pcNumbers < userNumbers){
    userPoints++;
  }
}

console.log(randomPcNumbers);
console.log(randomUserNumbers);

//controllo quale delle due variabili sia maggiore//

if(pcPoints > userPoints){

   console.log( `I numeri del pc sono: ${randomPcNumbers} I numeri dell'utente sono: ${randomUserNumbers}. HA VINTO IL COMPUTER!`);
  }
  else if(pcPoints < userPoints){

    console.log( `I numeri del pc sono: ${randomPcNumbers} I numeri dell'utente sono: ${randomUserNumbers}. HAI VINTO! `);
  }
  else{
    console.log("PAREGGIO!");
  }


