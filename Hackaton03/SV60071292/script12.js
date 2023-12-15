function ejercicio12(){
// Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.

// Definir variables
let num1, num2;

// Solicitar al usuario ingresar dos números
console.log("Ingrese el primer número: ");
num1 = parseFloat(prompt(""));

console.log("Ingrese el segundo número: ");
num2 = parseFloat(prompt(""));

// Determinar el mayor entre los dos números
if (num1 > num2) {
  console.log("El número mayor es:", num1);
} else {
  console.log("El número mayor es:", num2);
}
}