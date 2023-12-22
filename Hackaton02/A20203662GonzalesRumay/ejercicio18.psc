// Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribucion de CD virgenes. Los clientes pueden adquirir los articulos (supongamos un unico producto de una unica marca) por cantidad. Los precios son:
//$10. Si se compran unidades separadas hasta 9.
//$8. Si se compran entre 10 unidades hasta 99.
//$7. Entre 100 y 499 unidades.
//$6. Para mas de 500 unidades.
//La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en Pseint que dado un numero de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.
Proceso Ejercicio18
	PRECIO_UNIDAD_1 = 10
	PRECIO_UNIDAD_2 = 8
	PRECIO_UNIDAD_3 = 7
    PRECIO_UNIDAD_4 = 6
    GANANCIA_PORCENTAJE = 8.25 / 100
	
    // Definir variables
    Definir cantidadCds Como Entero
    Definir precioUnitario, precioTotal, gananciaVendedor Como Real
	
    Escribir "Ingrese la cantidad de CDs a vender:"
    Leer cantidadCds
	
    Si cantidadCds >= 1 y cantidadCds <= 9 Entonces
        precioUnitario = PRECIO_UNIDAD_1
    Sino Si cantidadCds >= 10 y cantidadCds <= 99 Entonces
			precioUnitario = PRECIO_UNIDAD_2
		Sino Si cantidadCds >= 100 y cantidadCds <= 499 Entonces
				precioUnitario = PRECIO_UNIDAD_3
			Sino
				precioUnitario = PRECIO_UNIDAD_4
			FinSi
		FinSi
	FinSi
	
	precioTotal = cantidadCds * precioUnitario
	gananciaVendedor = precioTotal * GANANCIA_PORCENTAJE
	Escribir "Precio total para el cliente: $", precioTotal
	Escribir "Ganancia para el vendedor: $", gananciaVendedor
FinProceso
