
//Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una promoción de descuento para vender 
//al mayor, esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento 
//sobre el total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% 
//de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80
function ejercicio05(){
    // Operadores “>” y “<”
    //{}
        let desc, tot; 
        let cant = parseInt( prompt("Escribe la cantidad de zapatos a compar: "))
        if (cant>10 & cant<=20)
        {
            desc =cant*0.1*80;
            tot=cant*80 - desc;
            document.write("El descuento es: ", desc);
            document.write("  El total a pagar es: ", tot);
        }
        else
        if (cant>20 & cant<=30)
        {
            desc =cant*0.2*80;
            tot=cant*80 - desc;
            document.write("El descuento es: ", desc);
            document.write("  El total a pagar es: ", tot);
        }
        else
        if (cant>30)
        {
            desc =cant*0.4*80;
            tot=cant*80 - desc;
            document.write("El descuento es: ", desc);
            document.write("El total a pagar es: ", tot);
        }
    }