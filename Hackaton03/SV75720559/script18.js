//18. Hacer un algoritmo en JavaScript para una empresa se encarga
//de la venta y distribución de CD vírgenes. Los clientes 
//pueden adquirir los artículos (supongamos un único producto de una única marca)
//por cantidad. Los precios son:
//$10. Si se compran unidades separadas hasta 9.
//$8. Si se compran entre 10 unidades hasta 99.
//$7. Entre 100 y 499 unidades.
//$6. Para mas de 500 unidades.
//La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo 
//en JavaScript que dado un número de CDs a vender calcule el precio total para el
 //cliente y la ganancia para el vendedor.
 function ejercicio18(){
    let canC, precioU, total, ganV
    canC = parseInt(prompt("Ingrese la cantidad de CD a vender: "))

    if (canC >= 1 && canC<= 9) {
        precioU = 10;
    } else if (canC >= 10 && canC <= 99) {
        precioU= 8;
    } else if (canC >= 100 && canC <= 499) {
        precio_U = 7;
    } else {
        precioU = 6;
    }
    total = canC * precioU
    ganV = Math.round(total * 0.0825)

    alert("El precio total para el cliente es: $" + total)
    alert("La ganancia pa   ra el vendedor es: $" + ganV)
 }
if (condition) {
    
} else {
    
}
 