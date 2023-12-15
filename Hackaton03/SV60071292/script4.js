function ejercicio04(){
// Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor. (Pendiente)

// Definir variables
let num1, num2, num3;

// Solicitar al usuario ingresar tres números
num1 = parseInt(prompt("Ingrese el primer número:"));
num2 = parseInt(prompt("Ingrese el segundo número:"));
num3 = parseInt(prompt("Ingrese el tercer número:"));

// Ordenar los números de menor a mayor y mostrarlos
if (num1 <= num2 && num1 <= num3) {
  if (num2 <= num3) {
    console.log(num1, num2, num3);
  } else {
    console.log(num1, num3, num2);
  }
}

if (num2 <= num1 && num2 <= num3) {
  if (num1 <= num3) {
    console.log(num2, num1, num3);
  } else {
    console.log(num2, num3, num1);
  }
}

if (num3 <= num1 && num3 <= num2) {
  if (num1 <= num2) {
    console.log(num3, num1, num2);
  } else {
    console.log(num3, num2, num1);
  }
}
}