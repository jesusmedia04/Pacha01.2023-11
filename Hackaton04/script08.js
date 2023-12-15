/*Cree una función que tome una matriz de matrices con números. Devuelve 
una nueva matriz (única) con el mayor número de cada uno.
findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]*/

function findLargestNums(matriz) {
    // Utiliza map para aplicar la función Math.max a cada submatriz
    // y encontrar el número más grande de cada una
    const numerosMasGrandes = matriz.map(submatriz => Math.max(...submatriz));

    return console.log(numerosMasGrandes);
}


