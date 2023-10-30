/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

let stringa = "contenuto stringa, si mette tra virgolette";
console.log(stringa)
let numero = 34;
console.log(numero) //nei numeri non si mettono virgolette
let booleans = true
console.log(booleans) //i booleans rispondono con vero o falso in base alle domande che poniamo

/* SCRIVI QUI LA TUA RISPOSTA */


/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let nome = "Abel";
console.log(nome);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let numero1 = 12;
let numero2 = 20;
let risultato = numero1 + numero2;
console.log(risultato);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x = 12;
console.log(x);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
nome ="Sassu";
console.log(nome)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let y = 4;
let risultato2 = y - x;
console.log(risultato2)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
let name1 = "john";
let name2 = "John";
console.log(name1 == name2);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO EXTRA
Convertire Fahrenheit a Celsius*/
let fahrenheit = 70;
let celsius = (fahrenheit - 32) * (5/9);
console.log(celsius)