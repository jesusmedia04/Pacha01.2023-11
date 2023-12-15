Proceso Ejercicio5
	
//	Hacer un algoritmo en Pseint para una tienda de zapatos que tiene una promoci�n de descuento para vender al mayor, esta depender� del n�mero de zapatos que se compren. Si son m�s de diez, se les dar� un 10% de descuento sobre el total de la compra; si el n�mero de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son m�s treinta zapatos se otorgar� un 40% de descuento. El precio de cada zapato es de $80.
	
		// Definir variables
		Definir cantidadZapatos Como Entero
		Definir precioPorZapato, totalCompra, descuento, totalConDescuento Como Real
		
		// Asignar el precio por zapato
		precioPorZapato <- 80.0
		
		// Solicitar al usuario ingresar la cantidad de zapatos
		Escribir "Bienvenido a la tienda de zapatos."
		Escribir "Precio por zapato: $80"
		Escribir "Ingrese la cantidad de zapatos que desea comprar: "
		Leer cantidadZapatos
		
		// Calcular el total de la compra
		totalCompra <- cantidadZapatos * precioPorZapato
		
		// Calcular el descuento seg�n la cantidad de zapatos
		Si cantidadZapatos > 30 Entonces
			descuento <- 0.4 * totalCompra
		Sino 
			Si cantidadZapatos > 20 Entonces
				descuento <- 0.2 * totalCompra
			Sino 
				Si cantidadZapatos > 10 Entonces
					descuento <- 0.1 * totalCompra
				Sino
					descuento <- 0  // No hay descuento si la cantidad es 10 o menos
				FinSi
			FinSi
		FinSi
		
		// Calcular el total con descuento
		totalConDescuento <- totalCompra - descuento
		
		// Mostrar los resultados
		Escribir "Cantidad de zapatos: ", cantidadZapatos
		Escribir "Total de la compra: $", totalCompra
		Escribir "Descuento aplicado: $", descuento
		Escribir "Total con descuento: $", totalConDescuento
		
FinProceso
