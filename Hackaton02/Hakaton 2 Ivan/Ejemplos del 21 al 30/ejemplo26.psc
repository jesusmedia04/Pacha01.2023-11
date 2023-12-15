Proceso ejemplo26
	
	escribir "Ingrese el dividendo: "
	leer dividendo
	escribir "Ingrese el divisor: "
	leer divisor
	
	resto = 0
	cociente = 0
	
	mientras (dividendo >= divisor)
		dividendo = dividendo - divisor
		cociente = cociente + 1
	FinMientras
	resto = dividendo
	
	escribir "El cociente es: ", cociente	
	escribir "El resto es: ", resto
FinProceso
