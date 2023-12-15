function ejercicio16(){
// Hacer un algoritmo en JavaScript que lea un número y según ese número, indique el día que corresponde.

// Definir variable
let numeroDia;

// Solicitar al usuario ingresar un número
console.log("Ingrese un número del 1 al 7: ");
numeroDia = parseInt(prompt(""));

// Evaluar el número para determinar el día
switch (numeroDia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default:
    console.log("Número no válido. Ingrese un número del 1 al 7.");
}
}