//Hacer un algoritmo en JavaScript para una tienda de helados que da un descuento por compra a sus clientes con 
//membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos 
//son los siguientes:
//Tipo A 10% de descuento Tipo B 15% de descuento Tipo C 20% de descuento.

function ejercicio07(){
    let tot;
    let memb = prompt("ingrese el tipo de membresía: ").toString()
    let cost = parseInt( prompt("ingrese el costo del helado: "))

    if (memb=="A")
    {
        tot = cost*0.9;
            document.write("  El total a pagar es: ", tot);
    }
    else
    if (memb=="B")
    {
        tot = cost*0.85;
            document.write("  El total a pagar es: ", tot);
    }
    else
    if (memb=="C")
    {
        tot = cost*0.8;
            document.write("  El total a pagar es: ", tot);
    }
}