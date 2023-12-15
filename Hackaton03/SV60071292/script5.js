function ejercicio05(){
// Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.

// Definir variables
let cantidadZapatos;
let precioPorZapato = 80.0;
let totalCompra, descuento, totalConDescuento;

// Solicitar al usuario ingresar la cantidad de zapatos
console.log("Bienvenido a la tienda de zapatos.");
console.log("Precio por zapato: $80");
cantidadZapatos = parseInt(prompt("Ingrese la cantidad de zapatos que desea comprar:"));

// Calcular el total de la compra
totalCompra = cantidadZapatos * precioPorZapato;

// Calcular el descuento según la cantidad de zapatos
if (cantidadZapatos > 30) {
  descuento = 0.4 * totalCompra;
} else if (cantidadZapatos > 20) {
  descuento = 0.2 * totalCompra;
} else if (cantidadZapatos > 10) {
  descuento = 0.1 * totalCompra;
} else {
  descuento = 0; // No hay descuento si la cantidad es 10 o menos
}

// Calcular el total con descuento
totalConDescuento = totalCompra - descuento;

// Mostrar los resultados
console.log("Cantidad de zapatos: ", cantidadZapatos);
console.log("Total de la compra: $", totalCompra);
console.log("Descuento aplicado: $", descuento);
console.log("Total con descuento: $", totalConDescuento);

}