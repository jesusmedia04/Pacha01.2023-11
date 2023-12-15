//Hacer un algoritmo en JavaScript para calcular el factorial de un número de una forma distinta.

let numero = parseInt(prompt("Escriba el numero para sacar factorial"))

let factorial = 1
let i = 1
while(i <= numero){
    factorial *= i
    i++
}

alert("El factorial de " + numero + " es :" + factorial)