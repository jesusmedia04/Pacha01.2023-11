Proceso ejemplo18
	
	escribir "Ingrese la cantidad de CDs a vender: "
	leer cantidad_cds
	
	si (cantidad_cds <= 9)
		precio_unitario = 10
	sino
		si (cantidad_cds <= 99)
			precio_unitario = 8
		sino
			si (cantidad_cds <= 499)
				precio_unitario = 7
			sino
				precio_unitario = 6
			FinSi
		FinSi
	FinSi
	
	precio_total = cantidad_cds * precio_unitario
	
	ganancia = precio_total * 0.0825
	
	escribir "El precio total para el cliente es: ", precio_total
	escribir "La ganancia para el vendedor es: ", ganancia
	
FinProceso
