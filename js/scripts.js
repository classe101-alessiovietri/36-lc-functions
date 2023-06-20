// Definizione della funzione stampaTreInConsole()
function stampaTreInConsole() {
    console.log('INIZIO DEL CORPO DI stampaTreInConsole()');
    console.log(1 + 2);
    console.log('FINE DEL CORPO DI stampaTreInConsole()');
}

stampaTreInConsole();

stampaTreInConsole();

stampaTreInConsole();

const numeroUno = 'A';  // Non corrisponde all'argomento della funzione
const numeroDue = 'B';  // Non corrisponde all'argomento della funzione
const numeroTre = 'C';

/*
    function somma(
        let numeroUno = primo valore da fuori (cioè dalla chiamata),
        let numeroDue = secondo valore da fuori (cioè dalla chiamata)
    ) {
*/
function somma(numeroUno, numeroDue) {
    console.log(numeroUno, numeroDue);
    const sum = numeroUno + numeroDue;
    console.log(sum);

    return sum;

    /* ----- DA QUI NON ESEGUE PIù NIENTE ----- */

    console.log('QUESTO NON ME LO STAMPA');
    let ciccio = 4;
    alert('ciao');
}

let numberOne = 1;
let numberTwo = 2;

somma(numberOne, numberTwo);        // In console: 3

// numberOne = 9;
// numberTwo = 1;

console.log('TEST RETURN', somma(9, 1));        // In console: 10

somma(8, numberTwo);        // In console:

somma(numberTwo, 3);        // In console:
somma();        // In console:
somma(numeroUno, numeroDue);        // In console:

const sommaFinale = somma(7, 12);
console.log('sommaFinale', sommaFinale);


let ciccio = 3;

if (true) {
    let ciccio = 4;
    console.log('DENTRO IF', ciccio);
}

console.log('FUORI IF', ciccio);







function isEven(num) {

    // if (num % 2 == 0) {
    //     return true;
    // }
    // else {
    //     return false;
    // }

    if (num % 2 == 0) {
        return true;
        /* Se entro nell'if, l'esecuzione della funzione termina qui */
    }

    return false;
    /* Se NON entro nell'if, continuo la funzione e arrivo al return di false */

}


console.log('2', isEven(2));        // true
console.log('7', isEven(7));        // false
console.log('4387', isEven(4387));  // false