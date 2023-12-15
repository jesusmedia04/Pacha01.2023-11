function ejercicio27(){
//Hacer un algoritmo en JavaScript para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.

// Definir variables
let suma = 0;
let contador = 0;
let numero;

// Leer el primer número
console.log("Ingrese un número (ingrese un número negativo para finalizar): ");
numero = parseFloat(prompt(""));

// Procesar números hasta que se ingrese un número negativo
while (numero >= 0) {
  suma += numero;
  contador++;
  console.log("Ingrese otro número (ingrese un número negativo para finalizar): ");
  numero = parseFloat(prompt(""));
}

// Calcular y mostrar la media si se ingresaron números positivos
if (contador > 0) {
  console.log("La media de los números positivos es: " + suma / contador);
} else {
  console.log("No se ingresaron números positivos.");
}
}