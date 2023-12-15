//Hacer un algoritmo en JavaScript para una tienda de zapatos que 
//tiene una promoción de descuento para vender al mayor, esta 
//dependerá del número de zapatos que se compren. Si son más de diez, 
//se les dará un 10% de descuento sobre el total de la compra; 
//si el número de zapatos es mayor de veinte pero menor de treinta, 
//se le otorga un 20% de descuento; y si son más treinta zapatos se 
//otorgará un 40% de descuento. El precio de cada zapato es de $80.


function ejercicio05() {
  const precioZapatos = 80; // Precio de cada zapato
  let cantidadZapatos = prompt("Ingrese la cantidad de zapatos a comprar: ");
  let montoTotal;
  let descuento;

  if(cantidadZapatos > 30){
    descuento = 0.4;
  } else if(cantidadZapatos > 20) {
    descuento = 0.2;
  }else if(cantidadZapatos > 10){
    descuento = 0.1;
  } else {
    descuento = 0
  }
  const total = cantidadZapatos * precioZapatos;
  const descuentoMoneda = total * descuento;
  const totalPago = total - descuentoMoneda;
  alert(
    'el total de compra es: ' + total + ', ' +
    'el descuento es de: ' +  (descuento)*100 + '% ' + ', ' +
    'el total a pagar es: ' + totalPago
  );
}
