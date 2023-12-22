// Hacer un algoritmo en Pseint para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.
Proceso Ejercicio5
    Definir cantidadZapatos, precioUnitario, totalCompra, descuento, totalConDescuento Como Real
    Escribir "Ingrese la cantidad de zapatos a comprar:"
    Leer cantidadZapatos
    precioUnitario = 80.0
    totalCompra = cantidadZapatos * precioUnitario
	
    Si cantidadZapatos > 30 Entonces
        descuento = 0.4  // 40% de descuento
    Sino
        Si cantidadZapatos > 20 Entonces
            descuento = 0.2  // 20% de descuento
        Sino
            Si cantidadZapatos > 10 Entonces
                descuento = 0.1  // 10% de descuento
            Sino
                descuento = 0  
            FinSi
        FinSi
    FinSi
    totalConDescuento = totalCompra - (totalCompra * descuento)
	
    Escribir "Cantidad de zapatos: ", cantidadZapatos
    Escribir "Total de la compra: $", totalCompra
    Escribir "Descuento aplicado: ", descuento * 100, "%"
    Escribir "Total con descuento: $", totalConDescuento
FinProceso