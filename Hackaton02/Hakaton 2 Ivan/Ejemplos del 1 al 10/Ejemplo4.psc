Proceso Ejemplo4
	
	Escribir "Ingresa el primer numero"
	Leer numero1
	Escribir "Ingresa el segundo numero"
	Leer numero2
	Escribir "Ingresa el tercer numero"
	Leer numero3
	
	si (numero1 < numero2)
		si (numero1 < numero3)
			Entonces
			menor = numero1
			medio = numero2
			mayor = numero3
		SiNo
			menor = numero3
			medio = numero1
			mayor = numero2
			
		FinSi
	sino
		si (numero2 < numero3)
			entonces
			menor = numero2
			medio = numero1
			mayor = numero3
		sino
			menor = numero3
			medio = numero2
			mayor = numero1
		FinSi
		
	FinSi
	
	Escribir  "El numero menor es: ", numero1
	Escribir "El numero medio es: ", numero2
	Escribir "El numero mayor es: ", numero3
	
FinProceso
