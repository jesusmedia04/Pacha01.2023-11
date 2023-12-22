//Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.
//squaresSum(3) ➞ 14
// 1² + 2² + 3² =
// 1 + 4 + 9 =
// 14

function squaresSum(valor) {
    let suma = 0

    for(let i = 1 ; i <= valor; i++){

        suma = suma + Math.pow(i,2)
    }

    return suma
}

console.log(squaresSum(3))