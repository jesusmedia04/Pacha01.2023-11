function ejercicio11(){
// Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.

// Definir variables
let num1, num2, num3;

// Solicitar al usuario ingresar tres números
console.log("Ingrese el primer número: ");
num1 = parseFloat(prompt(""));

console.log("Ingrese el segundo número: ");
num2 = parseFloat(prompt(""));

console.log("Ingrese el tercer número: ");
num3 = parseFloat(prompt(""));

// Determinar el mayor entre los tres números
if (num1 >= num2 && num1 >= num3) {
  console.log("El número mayor es: ", num1);
} else if (num2 >= num1 && num2 >= num3) {
  console.log("El número mayor es: ", num2);
} else {
  console.log("El número mayor es: ", num3);
}
}