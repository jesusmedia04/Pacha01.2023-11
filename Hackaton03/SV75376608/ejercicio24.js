//Hacer un algoritmo en JavaScript para realizar la suma de todos los números pares hasta el 1000.

alert("Algoritmo para hallar la suma de todos los números pares hasta el 1000")
let sumaPares = 0
let i = 0
while (i <= 1000) {
    if (i % 2 == 0) {
        sumaPares += i
    }
    i++
}
alert("La suma de todos los pares hasta 1000 , es : " + sumaPares);