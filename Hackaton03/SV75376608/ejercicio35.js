//Hacer un algoritmo en JavaScript para calcular la serie de Fibonacci.


let respuesta = parseInt(prompt("De cuantos elementos quieres la serie Fibonacci"))

let n1 = 0
let n2 = 1

let suma = 0;

console.log(n1)
console.log(n2)
for(let i = 0 ; i < respuesta ; i++){

    
    suma = n1 + n2

    console.log(suma)

    n1 = n2
    n2 = suma
}