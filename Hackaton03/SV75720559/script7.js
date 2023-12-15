//7. Hacer un algoritmo en JavaScript para una tienda de helado que da un 
//descuento por compra a sus clientes con membresía dependiendo de su tipo, 
//sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. 
//Los descuentos son los siguientes:
//Tipo A 10% de descuento
//Tipo B 15% de descuento
//Tipo C 20% de descuento
function ejercicio07(){
    let total, descuento, precioD
    let tipoM 
    tipoM = prompt("Ingrese el tipo de membresia :")
    total = parseInt(prompt("Ingrese el total de la compra"))

    switch (tipoM) {
        case 'A':
            descuento = total * 0.10
            break;
        case 'B':
            descuento = total * 0.15
            break; 
        case 'C':
            descuento = total * 0.1020
            break;
        default:
            break;
    }
    precioD = total - descuento
    if (descuento > 0) {
        alert("Se aplico un descuento " + descuento + " para la memebresia de tipo " + tipoM)
        alert("El precio a apagar es " + precioD)
    } else{
        alert("No se aplico un descuento. El precio a pagar es $ " + total)
    }

}