Proceso Ejemplo1
	
	Leer numero
	Escribir "1"
	Leer numero
	
	cantidad_digitos = 0
	Mientras  (numero > 0)
		digito = numero % 10
		numero = numero // 10
		cantidad_digitos = cantidad_digitos + 1
	FinMientras
	
	si ( cantidad_digitos = 3 )
		Escribir "El numero tiene tres digitos"
	SiNo
		Escribir "El numero no tiene tres digitos"
	FinSi
	
FinProceso
