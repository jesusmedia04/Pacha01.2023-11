function ejercicio19(){
// Hacer un algoritmo en JavaScript para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:

// Cajero (56$/día).

// Servidor (64$/día).

// Preparador de mezclas (80$/día).

// Mantenimiento (48$/día).

// El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó

// Definir variables
let idEmpleado, diasTrabajados, salarioDiario, totalPago;

// Solicitar al usuario ingresar el número identificador del empleado
console.log("Ingrese el número identificador del empleado (1: Cajero, 2: Servidor, 3: Preparador de mezclas, 4: Mantenimiento): ");
idEmpleado = parseInt(prompt(""));

// Solicitar al usuario ingresar la cantidad de días trabajados
console.log("Ingrese la cantidad de días trabajados (1 a 6): ");
diasTrabajados = parseInt(prompt(""));

// Asignar el salario diario según el tipo de empleado
switch (idEmpleado) {
  case 1:
    salarioDiario = 56;
    break;
  case 2:
    salarioDiario = 64;
    break;
  case 3:
    salarioDiario = 80;
    break;
  case 4:
    salarioDiario = 48;
    break;
  default:
    console.log("Número de empleado no válido");
}

// Calcular el total a pagar
totalPago = salarioDiario * diasTrabajados;

// Mostrar el resultado
if (idEmpleado >= 1 && idEmpleado <= 4) {
  console.log("El empleado con identificador " + idEmpleado + " debe recibir $" + totalPago + " por " + diasTrabajados + " días trabajados.");
}
}