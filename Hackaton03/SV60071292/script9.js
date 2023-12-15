function ejercicio09(){
// Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.

// Definir variables
let salario, nuevoSalario;

// Solicitar al usuario ingresar el salario actual
console.log("Ingrese el salario actual del trabajador: ");
salario = parseFloat(prompt(""));

// Determinar el aumento según el salario actual
if (salario > 2000) {
  nuevoSalario = salario * 1.05; // Aumento del 5%
} else {
  nuevoSalario = salario * 1.10; // Aumento del 10%
}

// Mostrar el nuevo salario
console.log("El nuevo salario del trabajador es: $", nuevoSalario);
}