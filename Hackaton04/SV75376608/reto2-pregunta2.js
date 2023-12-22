//Cree una función que tome números y devuelva la suma de sus cubos.
//sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
function sumaCubos(a, b, c){
    resultado = Math.pow(a,3) + Math.pow(b,3) +Math.pow(c,3)
    return resultado
}
console.log(sumaCubos(1,5,9))