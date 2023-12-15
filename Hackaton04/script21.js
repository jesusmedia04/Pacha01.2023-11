/*Te dan una cadena de palabras. Debe encontrar la palabra 
"Nemo" y devolver una cadena como esta: "¡Encontré a Nemo en 
[el orden de la palabra que encuentra nemo]!".
findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"
 */

function findNemo(cadena) {
    // Divide la cadena en palabras usando split
    const palabras = cadena.split(' ');

    // Busca la palabra "Nemo" en el array de palabras
    const posicionNemo = palabras.indexOf('Nemo');

    if (posicionNemo !== -1) {
        // Si se encuentra la palabra, devuelve un mensaje indicando la posición
        return console.log(`I found Nemo at ${posicionNemo + 1}!`); // Suma 1 para convertir de índice a posición de palabra
    } else {
        // Si no se encuentra la palabra, devuelve un mensaje indicando que no se encontró
        return console.log("Nemo not found :(");
    }
}

