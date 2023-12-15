Proceso ejemplo31
	suma_pares = 0
	suma_impares = 0
	contador_pares = 0
	contador_impares = 0
	
	para i desde 1 hasta 10
		escribir "Ingrese un número: "
		leer numero
		
		si (numero % 2 == 0)
			suma_pares = suma_pares + numero
			contador_pares = contador_pares + 1
		SiNo
			uma_impares = suma_impares + numero
			contador_impares = contador_impares + 1
		FinSi
	FinPara
	
	media_pares = suma_pares / contador_pares
	
	media_impares = suma_impares / contador_impares
	
	escribir "La media de los números pares es: ", media_pares
	escribir "La media de los números impares es: ", media_impares
FinProceso
