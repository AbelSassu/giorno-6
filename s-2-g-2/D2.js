/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
const numero1 = parseInt(prompt("inserisci numero 1"))
const numero2 = parseInt(prompt("inserisci numero 2"))
let vincitore
if (numero1 > numero2){
vincitore = numero1
}
else if (numero2 > numero1){
vincitore = numero2
}
else(numero1 === numero2);{
  alert("I due numeri sono uguali")
}
alert(`il numero più grande è ${vincitore}!!`)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
const numeroEs2 = parseInt(prompt("inserisci un numero"))
const cinque = 5
if (numeroEs2 !== cinque){
  alert("not equal")
}
else {
  alert("equal")
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
const numeroEs3 = parseInt(prompt("Inserisci un numero: "))
if(numeroEs3 % 5 == 0) {
alert("Divisibile per 5")
} 
else{
alert(" NON divisibile per 5")
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let y1 = parseInt(prompt("inserisci il numero 1"))
let y2 = parseInt(prompt("inserisci il numero 2"))
if (y1 === 8 || y2 === 8 || y1 + y2 === 8 || y1 - y2 === 8 || y2 - y1 === 8){
  alert(verificato)
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
let totalShoppingCart = parseInt(prompt("Inserisci totale spesa"))
let spedizione = 10
if (totalShoppingCart > 50){
alert (`il totale è ${totalShoppingCart}€, hai diritto alla spedizione gratuita.`)
} else {
  alert(`il totale è ${totalShoppingCart + spedizione}, arriva a 50€ per la spedizione gratuita`)
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
totalShoppingCart = totalShoppingCart * 0.8
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
let z1 = 1
let z2 = 2
let z3 = 3

if (z1 >= z2) {
  if (z3 >= z1) {
    console.log(z3, z1, z2)
  } else {
    if (z3 >= z2) {
      console.log(z1, z3, z2)
    } else {
      console.log(z1, z2, z3)
    }
  }
} else {
  if (z3 >= z2) {
    console.log(z3, z2, z1)
  } else {
    if (z3 >= z1) {
      console.log(z2, z3, z1)
    } else {
      console.log(z2, z1, z3)
    }
  }
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
const numeroTesto = parseFloat(prompt("inserisci un numero o un testo"))
if (typeof numeroTesto === "Number"){
  alert("è un numero")
  }
  else {
    alert("è un testo")
  }
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
const numeroEs9 = prompt("Inserisci un numero: ")
if(numeroEs9 % 2 == 0) {
alert("il numero è pari")
} 
else{
alert("il numero è dispari")
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
let val = 7
if (val < 5) {
    console.log("Meno di 5");
  } else if (val < 10) {
    console.log("Meno di 10");
  } else {
    console.log("Uguale a 10 o maggiore");
  }
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = 'Toronto',
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
delete me.lastName
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
delete me.skills[2]
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
const lista = [lista1, lista2, lista3, lista4, lista5, lista6, lista7, lista8, lista9, lista10]
lista.unshift(1)
lista.push(2)
lista.push(3)
lista.push(4)
lista.push(5)
lista.push(6)
lista.push(7)
lista.push(8)
lista.push(9)
lista.push(10)
//era meglio usare lista.push (1)
/* SCRIVI QUI LA TUA RISPOSTA */

/*ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
const posizione = 9
const valutaNuova = 100
lista [posizione] = valutaNuova
console.log(lista)
/* SCRIVI QUI LA TUA RISPOSTA */


