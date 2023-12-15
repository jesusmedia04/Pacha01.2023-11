function ejercicio17(){
// Hacer un algoritmo en JavaScript donde se ingrese una hora y nos calcule la hora dentro de un segundo.

// Definir variables
let hora, minuto, segundo;

// Solicitar al usuario ingresar la hora, minuto y segundo
console.log("Ingrese la hora: ");
hora = parseInt(prompt(""));

console.log("Ingrese el minuto: ");
minuto = parseInt(prompt(""));

console.log("Ingrese el segundo: ");
segundo = parseInt(prompt(""));

// Incrementar el segundo
segundo = segundo + 1;

// Ajustar los valores si es necesario
if (segundo >= 60) {
  segundo = 0;
  minuto = minuto + 1;

  if (minuto >= 60) {
    minuto = 0;
    hora = hora + 1;
}
}
}