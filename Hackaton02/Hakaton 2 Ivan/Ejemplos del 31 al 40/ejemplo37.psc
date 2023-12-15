Proceso ejemplo37
	
	escribir "Ingrese el primer número: "
	leer a
	
	escribir "Ingrese el segundo número: "
	leer b
	
	si (a < b)
		r = a
		a = b
		b = r
	FinSi
	
	mientras (r <> 0)
		r = a % b
		a = b
		b = r
	FinMientras
	
	escribir "El MCD de los números ingresados es: ", b
FinProceso
