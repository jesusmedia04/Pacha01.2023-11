Proceso ejemplo27
	suma = 0
	contador = 0
	
	escribir "Ingrese un número: "
	leer numero
	
	es_positivo = verdadero
	
	Mientras ((numero >= 0) o (es_positivo))
		si (numero >= 0)
			suma = suma + numero
			contador = contador + 1
		SiNo
			es_positivo = Falso
		FinSi
		   escribir "Ingrese un número: "
		   leer numero
	FinMientras
    
	si(contador == 0)
		escribir "No hay media"
	FinSi
	
	media = suma / contador
	
	escribir "La media es: ", media
FinProceso
