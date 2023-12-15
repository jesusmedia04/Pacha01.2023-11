function ejercicio21(){
//Hacer un algoritmo en JavaScript que permita calcular el factorial de un número.

// Definir variables
let numero, factorial, i;

// Solicitar al usuario ingresar un número
console.log("Ingrese un número para calcular su factorial: ");
numero = parseInt(prompt(""));

// Inicializar el factorial a 1
factorial = 1;

// Calcular el factorial
for (i = 1; i <= numero; i++) {
  factorial *= i;
}

// Mostrar el resultado
console.log("El factorial de " + numero + " es: " + factorial);
}