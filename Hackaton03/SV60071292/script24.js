function ejercicio24(){
//Hacer un algoritmo en JavaScript para realizar la suma de todos los números pares hasta el 1000.

// Definir variables
let suma = 0;
let i;

// Inicializar la suma a cero
suma = 0;

// Calcular la suma de los números pares hasta 1000
for (i = 2; i <= 1000; i += 2) {
  suma += i;
}

// Mostrar el resultado
console.log("La suma de los números pares hasta 1000 es: " + suma);
}