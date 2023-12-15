function ejercicio03(){
// Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.

// Definir variable
let numero;

// Solicitar al usuario ingresar un número
numero = parseInt(prompt("Ingrese un número:"));

// Verificar si el número termina en 4 y mostrar el resultado
if (numero % 10 === 4) {
  console.log("El número termina en 4.");
} else {
  console.log("El número no termina en 4.");
}
}