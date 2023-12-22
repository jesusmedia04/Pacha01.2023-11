/*
Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
charIndex("hello", "l") ➞ [2, 3]
// The first "l" has index 2, the last "l" has index 3.

charIndex("circumlocution", "c") ➞ [0, 8]
// The first "c" has index 0, the last "c" has index 8.
 */

function charIndex(valor1 , valor2) {

    let indice1 = valor1.indexOf(valor2)
    let indice2 = valor1.lastIndexOf(valor2)

    return `La primera ${valor2} tiene un indice ${indice1} y la ultima ${valor2} tiene un indice ${indice2}`
}

console.log(charIndex("hello", "l"))