function ejercicio02(){
//Hacer un algoritmo en JavaScript que lea un número entero por el teclado y determinar si es negativo.

// Definir variable
let numero;

// Solicitar al usuario ingresar un número
numero = parseInt(prompt("Ingrese un número entero:"));

// Verificar si el número es negativo y mostrar el resultado
if (numero < 0) {
  console.log("El número es negativo.");
} else {
  console.log("El número no es negativo.");
}
}
