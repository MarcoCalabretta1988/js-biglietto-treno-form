// Controllo collegamento script
console.log('JS OK');

//TRACCIA
/*
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Nota:
Se non vi sentite particolarmente creativi, ispiratevi all'immagine in allegato. Potete scegliere di implementare una soluzione completamente diversa oppure simile.
*/

//TO DO LIST

/*
1-Prendo l'elementi da DOM
2-Creo costanti
3-Creo logica ad evento click button
4-Prendo i valori dei chilometri e l eta e li assegno
5- Calcolo costo
6-Applico eventuali sconti
7-stampo a video
8- Logica bottone di reset

*/


//1-Prendo l'elemento da DOM

const ticket = document.getElementById('ticketprice');
const nosale = document.getElementById('nosale');
const km = document.getElementById('km');
const age = document.getElementById('age');
const userKm = document.getElementById('userKm');
const userAge = document.getElementById('userAge');
const getButton = document.getElementById ('get-button');
const resetButton = document.getElementById ('reset-button');
const ticketResult = document.querySelector('.result-ticket');
const userName= document.getElementById ('userName');
const userNameRecap = document.getElementById('user-name-recap');

// 2-Creo costanti

const kmPrice = 0.21;
const underageSale = 20;
const elderlySale = 40;

// 3- Creo logica ad evento click button

getButton.addEventListener('click', function(){

    // 4-Prendo i valori dei chilometri e l eta e li assegno
   const userKmElement = parseInt(userKm.value.trim());
   const userAgeElement = userAge.options[userAge.selectedIndex].value;
   const userAgeElementText = userAge.options[userAge.selectedIndex].text;
   const userNameElement = userName.value.trim();

   console.log(userAgeElement);

    //Validazione

    let isValid = true;

    if (isNaN(userKmElement) || userKmElement < 1 ){
    isValid = false;
    alert ('Inserisci chilometraggio valido');
    }
    
    if (!isNaN(userNameElement)){
        isValid = false;
        alert ('Inserisci Nome e Cognome valido');
        }

    if (isValid){

    ticketResult.classList.add('visibility');

    // 5- Calcolo costo
    const userTicketPrice = userKmElement * kmPrice;

    // 6-Applico eventuali sconti

    let saleTicketPrice = userTicketPrice;
    
    if (userAgeElement === 'old'){
        saleTicketPrice = userTicketPrice - ( userTicketPrice * elderlySale) / 100;
        nosale.innerText = `Il tuo prezzo senza sconto era: ${userTicketPrice.toFixed(2)} €`;
       
    }
    
    else if ( userAgeElement === 'young'){
        saleTicketPrice = userTicketPrice - (userTicketPrice * underageSale) / 100;
        nosale.innerText = `Il tuo prezzo senza sconto era: ${userTicketPrice.toFixed(2)} €`;
    }
   

    // 7-stampo a video
    
    const message = `Il costo del tuo biglietto è ${saleTicketPrice.toFixed(2)} €`;
    userNameRecap.innerText = `Nome passeggero: ${userNameElement}`;
    ticket.innerText = message;  
    age.innerText = ` Fascia di eta inserita: ${userAgeElementText}`;
    km.innerText = ` Km inseriti: ${userKmElement}`;
    }
    
    });

   
    // 8- Logica bottone di reset
    resetButton.addEventListener('click' , function(){

    userKm.value='';
    userName.value = '';
    ticketResult.classList.remove('visibility');
    });













