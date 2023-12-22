//Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
//minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
function minMaxMatriz(matriz){

    let minMax = [];

    let _matriz = matriz
    _matriz.sort(function(a, b){return a-b})
    

    minMax.push(_matriz[0])
    minMax.push(_matriz[matriz.length-1])
    return minMax
}

console.log(minMaxMatriz([5,3,2,83,9]))


