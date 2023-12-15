function ejercicio06(){
// Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.

// Definir variables
let horasTrabajadas, sueldo;
const tarifaNormal = 20;
const tarifaExtra = 25;

// Solicitar al usuario ingresar las horas trabajadas
console.log("Ingrese las horas trabajadas: ");
horasTrabajadas = parseFloat(prompt(""));

// Calcular el sueldo
if (horasTrabajadas <= 40) {
  sueldo = horasTrabajadas * tarifaNormal;
} else {
  sueldo = 40 * tarifaNormal + (horasTrabajadas - 40) * tarifaExtra;
}

// Mostrar el sueldo
console.log("El sueldo semanal es: $", sueldo);
}