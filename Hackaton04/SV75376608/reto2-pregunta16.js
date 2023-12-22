//
//Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.
//countdown(5) ➞ [5, 4, 3, 2, 1, 0]

function countdown(valor){

    let newMatriz = []
    let y = 0

    for(let i = valor ; i > 0 ; i--) {

        newMatriz[y++] = i
    }

    return newMatriz
}

console.log(countdown(5))