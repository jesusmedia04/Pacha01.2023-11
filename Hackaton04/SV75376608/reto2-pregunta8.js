/*Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.
findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]
 */


function findLargestNums(matriz){
    let max = 0
    let fullMatriz = []

    for (let i = 0; i < matriz.length; i++) {
            matriz[i].sort(function(a,b){return a - b})
            max = matriz[i][matriz[i].length - 1] 
            fullMatriz.push(max)
    }

    return fullMatriz
}

console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]))