Proceso ejemplo35
	
	numero_mayor = (leer_numero)
	numero_menor = (leer_numero)
	
	para numero desde 2 hasta 20
		escribir "Ingrese un número: "
		leer numero
		si (numero > numero_mayor)
			numero_mayor = numero
		SiNo
			si (numero < numero_menor)
				numero_menor = numero
			FinSi
		FinSi
	FinPara
	
	escribir "El número mayor es: ", numero_mayor
	escribir "El número menor es: ", numero_menor

FinProceso
