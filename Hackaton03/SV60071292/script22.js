function ejercicio22(){
//Hacer un algoritmo en JavaScript para calcular la suma de los n primeros números.

// Definir variables
let n, suma, i;

// Solicitar al usuario ingresar un número
console.log("Ingrese un número entero positivo para calcular la suma de los primeros n números: ");
n = parseInt(prompt(""));

// Inicializar la suma a cero
suma = 0;

// Calcular la suma de los primeros n números
for (i = 1; i <= n; i++) {
  suma += i;
}

// Mostrar el resultado
console.log("La suma de los primeros " + n + " números es: " + suma);
}