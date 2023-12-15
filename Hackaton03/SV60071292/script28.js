function ejercicio28(){
//Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo repetir.
// Definir variables
let suma = 0;
let contador = 1;

// Calcular la suma de los primeros cien números con un ciclo Mientras
while (contador <= 100) {
  suma += contador;
  contador++;
}

// Mostrar el resultado
console.log("La suma de los primeros cien números es: " + suma);
}