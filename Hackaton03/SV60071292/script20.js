function ejercicio20(){
// Hacer un algoritmo en JavaScript que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:

// Cuántos números son Pares?

// ¿Cuál es el mayor de todos?

// Si el tercero es par, calcular el cuadrado del segundo.

// Si el primero es menor que el cuarto, calcular la media de los 4 números.

// Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.

// Definir variables
let num1, num2, num3, num4;

// Solicitar al usuario ingresar 4 números
console.log("Ingrese el primer número: ");
num1 = parseInt(prompt(""));

console.log("Ingrese el segundo número: ");
num2 = parseInt(prompt(""));

console.log("Ingrese el tercer número: ");
num3 = parseInt(prompt(""));

console.log("Ingrese el cuarto número: ");
num4 = parseInt(prompt(""));

// Contar números pares
let contadorPares = 0;

if (num1 % 2 === 0) {
  contadorPares++;
}

if (num2 % 2 === 0) {
  contadorPares++;
}

if (num3 % 2 === 0) {
  contadorPares++;
}

if (num4 % 2 === 0) {
  contadorPares++;
}

console.log("Cantidad de números pares: " + contadorPares);

// Encontrar el mayor
let mayor = num1;

if (num2 > mayor) {
  mayor = num2;
}

if (num3 > mayor) {
  mayor = num3;
}

if (num4 > mayor) {
  mayor = num4;
}

console.log("El mayor de todos es: " + mayor);

// Si el tercero es par, calcular el cuadrado del segundo
if (num3 % 2 === 0) {
  console.log("El cuadrado del segundo número es: " + num2 * num2);
}

// Si el primero es menor que el cuarto, calcular la media de los 4 números
if (num1 < num4) {
  let media = (num1 + num2 + num3 + num4) / 4;
  console.log("La media de los 4 números es: " + media);
}

// Si el segundo es mayor que el tercero
if (num2 > num3) {
  // Verificar si el tercero está entre 50 y 700
  if (num3 >= 50 && num3 <= 700) {
    // Calcular la suma de los 4 números
    let suma = num1 + num2 + num3 + num4;
    console.log("La suma de los 4 números es: " + suma);
  }
}
}