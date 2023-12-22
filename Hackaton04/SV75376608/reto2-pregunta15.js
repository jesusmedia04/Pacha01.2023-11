//Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada
//multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]

function multiplyByLength(matriz) {
    let newMatriz = []
    let cantidad = matriz.length;

    for (let i = 0 ; i < matriz.length ; i++){

            newMatriz.push(matriz[i] * cantidad) 
    }

    return newMatriz
}

console.log(multiplyByLength([2, 3, 1, 0]))