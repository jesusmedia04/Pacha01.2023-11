Proceso ejemplo38
	Escribir "Ingrese el numero: "
	Leer numero
	
	suma = 0
	
	Para i desde 1 hasta numero
		si(numero % i == 0)
			suma = suma + i
		FinSi
	FinPara
	
	si(suma == numero)
		escribir "El numero es perfecto"
	SiNo
		Escribir "El numero no es perfecto"
	FinSi
FinProceso
