//Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo,
// sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
//Tipo A 10% de descuento Tipo B 15% de descuento Tipo C 20% de descuento

let numeroHelados = parseInt(prompt("Cuantos helados vas a pedir , estan $4 c/u"))


alert("Nuestras membresias son de tipo :  A - B - C ")
let respuesta = prompt("Que tipo de membresia tienes ?")
let total = 0

switch (respuesta) {
    case "A":
        total = (numeroHelados * 4)
        alert("Tu importe a pagar es " + total )
        alert("Por ser miembro " + respuesta + " se te otorga 10% de descuento")
        alert("Pagarás " + (total - (0.10 * total)))
        break;
    case "B":
         total = (numeroHelados * 4)
        alert("Tu importe a pagar es " + total )
        alert("Por ser miembro " + respuesta + " se te otorga 15% de descuento")
        alert("Pagarás " + (total - (0.15 * total)))
        break;
    case "C":
         total = (numeroHelados * 4)
        alert("Tu importe a pagar es " + total )
        alert("Por ser miembro " + respuesta + " se te otorga 20% de descuento")
        alert("Pagarás " + (total - (0.20 * total)))
        break;
    default:
        alert("No eres miembro")
        break;
}