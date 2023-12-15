//Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, 
//esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra;
//si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento;
// y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.
let precioZapato = 80.00
let totalSubVenta = 0;
let desc1 = 0.10
let desc2 = 0.20
let desc3 = 0.40

let cantidad = parseInt(prompt("Cuantos pares de zapatas va a llevarse ? , el precio por cada zapato es $80"))


if (cantidad >= 30) {
    totalSubVenta = cantidad * precioZapato;
    alert("Pagarás " + totalSubVenta)
    alert("Pero por llevarte " + cantidad + " de zapatos , obtienes el 40% de descuento, tu total a pagar será :" +
        (totalSubVenta - (desc3 * totalSubVenta)))
}
else if (cantidad > 20 && cantidad < 30) {
    totalSubVenta = cantidad * precioZapato;
    alert("Pagarás " + totalSubVenta)
    alert("Pero por llevarte " + cantidad + " de zapatos , obtienes el 20% de descuento, tu total a pagar será :" +
        (totalSubVenta - (desc2 * totalSubVenta)))

}
else if (cantidad > 10) {
    totalSubVenta = cantidad * precioZapato;
    alert("Pagarás " + totalSubVenta)
    alert("Pero por llevarte " + cantidad + " de zapatos , obtienes el 10% de descuento, tu total a pagar será :" +
        (totalSubVenta - (desc1 * totalSubVenta)))
}

else {
    totalSubVenta = cantidad * precioZapato;
    alert("Por llevarte " + cantidad + " de zapatos , no obienes descuento, tu total a pagar será : " + totalSubVenta)
}