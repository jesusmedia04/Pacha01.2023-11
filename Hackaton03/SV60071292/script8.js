function ejercicio08(){
// Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.

// Definir variables
let nota1, nota2, nota3, promedio;

// Solicitar al usuario ingresar las tres notas
console.log("Ingrese la primera nota: ");
nota1 = parseFloat(prompt(""));

console.log("Ingrese la segunda nota: ");
nota2 = parseFloat(prompt(""));

console.log("Ingrese la tercera nota: ");
nota3 = parseFloat(prompt(""));

// Calcular el promedio
promedio = (nota1 + nota2 + nota3) / 3;

// Evaluar aprobación
if (promedio >= 6) {
  console.log("El estudiante aprobó con un promedio de:", promedio);
} else {
  console.log("El estudiante no aprobó con un promedio de:", promedio);
}
}