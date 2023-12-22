//
//Cree una función que tome dos argumentos (elemento, tiempos). 
//El primer argumento (elemento) es el elemento que necesita repetirse, mientras que el segundo argumento (veces)
// es la cantidad de veces que se debe repetir el elemento. Devuelve el resultado en una matriz.
//repeat(13, 5) ➞ [13, 13, 13, 13, 13]
function repeat(arg1 ,arg2) {
    let repetidos = []

    for (let i = 0; i < arg2; i++) {
        
        repetidos.push(arg1)
    }

    return repetidos
}

console.log(repeat(13,4))