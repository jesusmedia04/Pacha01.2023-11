function ejercicio10(){
// Hacer un algoritmo en JavaScript que diga si un número es par o impar.

// Definir variable
let numero;

// Solicitar al usuario ingresar un número
console.log("Ingrese un número: ");
numero = parseInt(prompt(""));

// Verificar si el número es par o impar
if (numero % 2 === 0) {
  console.log("El número es par.");
} else {
  console.log("El número es impar.");
}
}