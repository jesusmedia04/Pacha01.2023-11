/* Dada una palabra, escriba una función que devuelva el primer índice y 
el último índice de un carácter.
charIndex("hello", "l") ➞ [2, 3]
// The first "l" has index 2, the last "l" has index 3.*/

function charIndex(palabra, caracter) {
    // Encuentra el primer índice del carácter
    const primerIndice = palabra.indexOf(caracter);

    // Si el carácter no está presente, devuelve un array vacío
    if (primerIndice === -1) {
        return console.log([]);
    }

    // Encuentra el último índice del carácter
    const ultimoIndice = palabra.lastIndexOf(caracter);

    // Devuelve un array con el primer y último índice
    return console.log([primerIndice, ultimoIndice]);
}
