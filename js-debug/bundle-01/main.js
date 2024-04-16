/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}

//La condizione del ciclo i < 5 è sbagliata perchè i viene inizializzato da 0, dovrebbe essere i < 5. Il ciclo scorre un array. 

// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}

//La funzione controlla se un numero è pari e gli somma 5, l'errore è nella condizione if in cui viene usato = piuttosto che == o ===

// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}

// L'errore si trova all'interno del ciclo for in cui sono utilizzate le virgole pittosto che ;, la funzione fa un ciclo che va da 0 a 5

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

// Gli errori si trovano dopo l'incrementatore in cui viene messo il simbolo ;, anche nelle condizioni del ciclo si dovrebbe scorrere tutta l'array e non fermarsi alla lunghezza - 1, nelle condizioni di if in cui si controlla numbers mentre dovrebbe essere numbers[i],

// Sempre nell'if viene utilizzato = piuttosto che == o ===, viene utilizzato ; dopo la condizione in modo sbagliato, quando si esegue il comando push si dovrebbe pushare il numbers[i] piuttosto che l'intera array,

// Il returno dovrebbe essere messo fuori dal ciclo e non dentro in quanto restituisce la nuova array solo dopo aver finito il ciclo

// La funzione controlla i numeri pari della prima array e li pusha nella seconda