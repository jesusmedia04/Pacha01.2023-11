//Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
//Tipo A 10% de descuento
//Tipo B 15% de descuento
//Tipo C 20% de descuento
Proceso Ejercicio7
    Definir tipoMembresia Como Caracter
    Definir totalCompra, descuento, totalConDescuento Como Real
	
    Escribir "Ingrese el tipo de membresía (A, B o C):"
    Leer tipoMembresia
    Escribir "Ingrese el total de la compra:"
    Leer totalCompra
	
    Segun tipoMembresia Hacer
		Caso "A":
            descuento = 0.10  // 10% de descuento para Tipo A
		Caso "B":
            descuento = 0.15  // 15% de descuento para Tipo B
		Caso "C":
            descuento = 0.20  // 20% de descuento para Tipo C
    FinSegun
    totalConDescuento = totalCompra - (totalCompra * descuento)
	
    Escribir "Tipo de membresía: ", tipoMembresia
    Escribir "Total de la compra: $", totalCompra
    Escribir "Descuento aplicado: ", descuento * 100, "%"
    Escribir "Total con descuento: $", totalConDescuento
FinProceso