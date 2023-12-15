Proceso Ejemplo5

	// entero número_zapatos, precio_zapato, subtotal, descuento, total
	escribir "Ingrese el número de zapatos: "
	leer numero_zapatos
	subtotal = número_zapatos * precio_zapato
	
	Si(número_zapatos >30)
			descuento = 0.4 * subtotal
		SiNo
			si (número_zapatos >20)
				descuento = 0.2 * subtotal
			SiNo
				descuento = 0.1 * subtotal 
			FinSi
			
		FinSi
		
		total = subtotal - descuento
		
		Escribir "El total a pagar es:", total
FinProceso




