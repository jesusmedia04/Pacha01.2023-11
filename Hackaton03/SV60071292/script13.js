function ejercicio13(){
// Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.

// Definir variable
let letra;

// Solicitar al usuario ingresar una letra
console.log("Ingrese una letra: ");
letra = prompt("").toLowerCase(); // Convertir la letra a minúscula para simplificar la comparación

// Determinar si la letra es una vocal
if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
  console.log("La letra ingresada es una vocal.");
} else {
  console.log("La letra ingresada no es una vocal.");
}
}
