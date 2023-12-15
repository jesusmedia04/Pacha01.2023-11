Proceso ejemplo7
	
	Escribir "Ingrese el tipo de menbresia: "
	Leer tipo_membresia
	
	escribir "Ingrese el total de la compra: "
	leer total_compra
	
	si (tipo_membresia == "A")
		descuento = 0.1 * total_compra
	sino
		si (tipo_membresia == "B")
			descuento = 0.15 * total_compra
		sino
			descuento = 0.2 * total_compra
		Finsi
	Finsi
	
	total_pagar = total_compra - descuento
	
	escribir "El total a pagar es: ", total_pagar
	
FinProceso
