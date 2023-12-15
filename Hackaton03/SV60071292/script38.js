function ejercicio38(){
//Hacer un algoritmo en JavaScript que nos permita saber si un número es un número perfecto.

let num1, sumaDivisores;

num1 = parseInt(prompt("Ingrese el número: "));
sumaDivisores = 0;

for (let i = 1; i <= num1 / 2; i++) {
    if (num1 % i === 0) {
        sumaDivisores += i;
    }
}

if (sumaDivisores === num1) {
    console.log("El número ingresado es un número perfecto.");
} else {
    console.log("El número ingresado no es un número perfecto.");
}
}