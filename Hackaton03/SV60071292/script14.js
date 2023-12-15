function ejercicio14(){
// Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo. (Pendiente)

// Definir variable
let numero;

// Solicitar al usuario ingresar un entero positivo del 1 al 10
console.log("Ingrese un entero positivo del 1 al 10: ");
numero = parseInt(prompt(""));

// Verificar si el número es 9 y mostrar un mensaje especial
if (numero === 9) {
  console.log("¡El número 9 es un caso especial!");
  console.log("El número 9 no es primo, pero es un cuadrado mágico.");
} else {
  // Verificar si el número es primo
  if (numero === 2 || numero === 3 || numero === 5 || numero === 7) {
    console.log("El número ingresado es primo.");
  } else {
    console.log("El número ingresado no es primo.");
  }
}
}