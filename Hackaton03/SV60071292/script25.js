function ejercicio25(){
//Hacer un algoritmo en JavaScript para calcular el factorial de un número de una forma distinta.

// Definir variables
let numero, factorial, i;

// Solicitar al usuario ingresar un número
console.log("Ingrese un número para calcular su factorial: ");
numero = parseInt(prompt(""));

// Inicializar el factorial a 1
factorial = 1;
i = 1;

// Calcular el factorial usando un bucle Mientras
while (i <= numero) {
  factorial *= i;
  i++;
}

// Mostrar el resultado
console.log("El factorial de " + numero + " es: " + factorial);
}