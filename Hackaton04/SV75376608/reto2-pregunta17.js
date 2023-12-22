//Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.
//diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32.

function diffMaxMin (matriz){
    let min = 0
    let max = 0
    matriz.sort(function(a,b) { return a - b})

    min = matriz[0]
    max = matriz[matriz.length - 1]


    return max - (min)
}

console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]))
