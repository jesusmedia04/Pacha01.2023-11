//5. Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene
// una promoción de descuento para vender al mayor,
//esta dependerá del número de zapatos que se compren. Si son más de diez, 
//se les dará un 10% de descuento sobre el total de la compra; si el número de zapatos
// es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son
// más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.
function ejercicio05(){
    let cZapato = parseInt(prompt("Ingrese la cantidad de zapato que comprara"))
    let precioZ = parseInt
    let total = parseInt
    let descuento = parseInt

    precioZ = 80
    total = 0 
    
    total = cZapato * precioZ

    if (cZapato > 30 ) {
        descuento = total * 0.4    
    } else {
        if (cZapato > 20 ) {
            descuento = total * 0.2 
        } else {
            if (cZapato > 10) {
                descuento = total - 0.1
            } else {
                descuento = 0
            }        
        }
    }  
    total = total - descuento
    alert("El pago es :" + total)
}
