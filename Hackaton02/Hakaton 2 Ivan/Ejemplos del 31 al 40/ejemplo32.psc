Proceso ejemplo32
	poblacion_maxima = 0
	
	para contador desde 1 hasta 3
		escribir "Ingrese la provincia: "
		leer provincia
		
		escribir "Ingrese la ciudad: "
		leer ciudad
		
		escribir "Ingrese la población: "
		leer poblacion
		
		si (poblacion > poblacion_maxima)
			poblacion_maxima = poblacion
			provincia_maxima = provincia
			ciudad_maxima = ciudad
		FinSi
	FinPara
	escribir "La ciudad con la población máxima es: ", ciudad_maxima, ", en la provincia de ", provincia_maxima
FinProceso
