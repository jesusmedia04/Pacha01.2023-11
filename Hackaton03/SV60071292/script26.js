function ejercicio26(){
//Hacer un algoritmo en JavaScript para calcular el resto y cociente por medio de restas sucesivas.

// Definir variables
let dividendo, divisor, cociente, resto;

// Solicitar al usuario ingresar el dividendo y el divisor
console.log("Ingrese el dividendo: ");
dividendo = parseInt(prompt(""));

console.log("Ingrese el divisor: ");
divisor = parseInt(prompt(""));

// Inicializar el cociente y el resto a cero
cociente = 0;
resto = 0;

// Calcular el cociente y el resto mediante restas sucesivas
while (dividendo >= divisor) {
  dividendo -= divisor;
  cociente++;
}

// El valor final de dividendo es el resto
resto = dividendo;

// Mostrar el resultado
console.log("El cociente es: " + cociente);
console.log("El resto es: " + resto);
}