//Hacer un algoritmo en JavaScript que nos permita saber si un número es un número perfecto.

let numero = parseInt(prompt("Escribe tu numero"))
let sumaDivisores = 0

for (let i = 1; i < numero; i++) {
    if(numero % i == 0){
        sumaDivisores += i
        console.log("Un divisor es el numero " + i)
    }
}

if(sumaDivisores == numero){
    alert("El numero " + numero + " es un numero perfecto")
}