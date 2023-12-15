/*Cree una función que capitalice la última letra de cada palabra.
capLast("hello") ➞ "hellO" */


function capLast(cadena) {
    // Divide la cadena en palabras usando split
    const palabras = cadena.split(' ');

    // Capitaliza la última letra de cada palabra
    const palabrasCapitalizadas = palabras.map(palabra => {
        const ultimaLetra = palabra.slice(-1).toUpperCase();
        const restoPalabra = palabra.slice(0, -1);
        return restoPalabra + ultimaLetra;
    });

    // Une las palabras capitalizadas en una cadena
    const resultado = palabrasCapitalizadas.join(' ');

    return console.log(resultado);
}

