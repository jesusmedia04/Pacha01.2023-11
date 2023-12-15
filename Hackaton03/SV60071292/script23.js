function ejercicio23(){
// Hacer un algoritmo en JavaScript para calcular la suma de los números impares menores o iguales a n.

// Definir variables
let n, suma, i;

// Solicitar al usuario ingresar un número
console.log("Ingrese un número entero positivo para calcular la suma de los impares menores o iguales a n: ");
n = parseInt(prompt(""));

// Inicializar la suma a cero
suma = 0;

// Calcular la suma de los impares menores o iguales a n
for (i = 1; i <= n; i += 2) {
  suma += i;
}

// Mostrar el resultado
console.log("La suma de los impares menores o iguales a " + n + " es: " + suma);
}