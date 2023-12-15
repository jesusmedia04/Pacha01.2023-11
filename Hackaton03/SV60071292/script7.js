function ejercicio07(){
//Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:

//Tipo A 10% de descuento
//Tipo B 15% de descuento
//Tipo C 20% de descuento

// Definir variables
let tipoMembresia;
let totalCompra, descuento, totalConDescuento;

// Solicitar al usuario ingresar el tipo de membresía
console.log("Ingrese el tipo de membresía (A, B o C): ");
tipoMembresia = prompt("").toUpperCase(); // Convertir a mayúsculas para ser insensible a mayúsculas/minúsculas

// Solicitar al usuario ingresar el total de la compra
console.log("Ingrese el total de la compra: ");
totalCompra = parseFloat(prompt(""));

// Calcular el descuento según el tipo de membresía
switch (tipoMembresia) {
  case "A":
    descuento = 0.10 * totalCompra;
    break;
  case "B":
    descuento = 0.15 * totalCompra;
    break;
  case "C":
    descuento = 0.20 * totalCompra;
    break;
  default:
    console.log("Tipo de membresía no válido.");
}

// Calcular el total con descuento
totalConDescuento = totalCompra - descuento;

// Mostrar los resultados
console.log("Total de la compra: $", totalCompra);
console.log("Descuento aplicado: $", descuento);
console.log("Total con descuento: $", totalConDescuento);
}