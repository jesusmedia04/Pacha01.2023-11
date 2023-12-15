function ejercicio15(){
// Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos.

// Definir variables
let centimetros, pulgadas, libras, kilogramos;

// Solicitar al usuario ingresar las cantidades
console.log("Ingrese la cantidad en centímetros: ");
centimetros = parseFloat(prompt(""));

console.log("Ingrese la cantidad en libras: ");
libras = parseFloat(prompt(""));

// Convertir centímetros a pulgadas y libras a kilogramos
pulgadas = centimetros * 0.393701;
kilogramos = libras * 0.453592;

// Mostrar los resultados
console.log("Equivalente en pulgadas: ", pulgadas);
console.log("Equivalente en kilogramos: ", kilogramos);
}