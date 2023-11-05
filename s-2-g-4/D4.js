/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
let risultato = area(5, 10)
function area(l1, l2){
    return l1 * l2
}
console.log(risultato)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
let risultato2 = crazySum(5, 5)
function crazySum(n1, n2){
    if (n1 === n2){
       return (n1 + n2) * 3
    }
    else {
        return n1 + n2
    }
}
console.log(risultato2)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
let risultato3 = crazyDiff(5, 19)
function crazyDiff(num1, num2){
    if (num1 > 19){
        return
    } else {
      
    }
}
console.log(risultato3)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
let risultato4 = boundary(400)
function boundary(n){
    if (n > 20 && n <=100 || n === 400){
    return true
}   else {
    return false
}
}
console.log(risultato4)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
let risultato5 = epify("EPICODE è qui per te")
function epify(stringa){
    if(stringa.startsWith("EPICODE") > 0){
        return epify + ("EPICODE")
    } else {
       return epify
    }
}
console.log(risultato5)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
let risultato6 = check3and7(32)
function check3and7(nplus){
    if (nplus % 3 === 0 || nplus % 7 === 0){
    return true
}   else {
        return false
    }
}
console.log (risultato6)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
let risultato7 = reverseString ("EPICODE")
function reverseString(stringa7){
    let stringhetta = stringa7.split("")
    let contrario = stringhetta.reverse()
    let metti = contrario.join("")
    return metti
}
console.log(risultato7)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
let risultato8 = upperFirst ("ciao sono abel sassu")
function upperFirst(stringa8){
    let togli = stringa8.split(" ")
    for (let i8 = 0; i8 < togli.length; i8++) {
        togli[i8] = togli[i8].charAt(0).toUpperCase() + togli[i8].slice(1);
}          let inserite = togli.join(" ") 
        return inserite
}
console.log (risultato8)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
let risultato9 = cutString("we come va a casa")
function cutString (stringa9){
let tolta = stringa9.shift()
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
