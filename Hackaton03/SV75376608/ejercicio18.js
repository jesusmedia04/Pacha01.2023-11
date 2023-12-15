/*
Hacer un algoritmo en JavaScript para una empresa se encarga de la venta y distribución de CD vírgenes.
 Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:

$10. Si se compran unidades separadas hasta 9.

$8. Si se compran entre 10 unidades hasta 99.

$7. Entre 100 y 499 unidades.

$6. Para mas de 500 unidades.

La ganancia para el vendedor es de 8,25 % de la venta. 
Realizar un algoritmo en JavaScript que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.
*/

let precio = 0;
let costo = 0;
let ganaVendedor = 0.0825

let cantidad = parseInt(prompt("Cuantos CD piensa llevar"));

if(cantidad <= 9){
    costo = 10
    alert("Comprarás " + cantidad +  " CD , su costo será de " + costo + " soles")
    alert("El cliente pagará : " +(costo * cantidad) )
    alert("El vendedor tendra una ganancia de : " + (ganaVendedor * (costo * cantidad)) )
}else if (cantidad >= 10 && cantidad <= 99){
    costo = 8
    alert("Comprarás " + cantidad +  " CD , su costo será de " + costo + " soles")
    alert("El cliente pagará : " +(costo * cantidad) )
    alert("El vendedor tendra una ganancia de : " + (ganaVendedor * (costo * cantidad)) )
}else if (cantidad >= 100 && cantidad <= 499){
    costo = 7
    alert("Comprarás " + cantidad +  " CD , su costo será de " + costo + " soles")
    alert("El cliente pagará : " +(costo * cantidad) )
    alert("El vendedor tendra una ganancia de : " + (ganaVendedor * (costo * cantidad)) )
}else if (cantidad >= 500){
    costo = 6
    alert("Comprarás " + cantidad +  " CD , su costo será de " + costo + " soles")
    alert("El cliente pagará : " +(costo * cantidad) )
    alert("El vendedor tendra una ganancia de : " + (ganaVendedor * (costo * cantidad)) )
}else{
    alert("Es probable que el numero que ingresaste sea negativo")
}