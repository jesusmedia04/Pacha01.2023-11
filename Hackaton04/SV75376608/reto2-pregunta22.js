//
//Cree una función que capitalice la última letra de cada palabra.
//capLast("hello") ➞ "hellO"

function capLast(cadena){

    let ultimaLetra = cadena.substr(cadena.length-1)

    let reemplazo =  cadena.replaceAll(ultimaLetra,ultimaLetra.toUpperCase())

    return reemplazo;
}

console.log(capLast("como"))