/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.


function firstLetterArray(listNames) {
    const letters = []
   
    for (let i = 0 ; i < names.length; i++) {
        // console.log(listNames[i])
        const name = listNames[i]
        // console.log(name[0])
        letters.push(name[0])
    }

    return letters
}
    


// Invoca la funzione qui e stampa il risultato in console

console.log(firstLetterArray(names))

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]