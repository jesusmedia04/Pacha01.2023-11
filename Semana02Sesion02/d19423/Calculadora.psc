<<<<<<< HEAD
Proceso Calculadora
	Escribir("Escribe el primer numero")
	Leer primerNumero
	Escribir("Escribe el segundo numero")
	Leer segundoNumero
	
	Escribir ("Presiona 1 para sumar , presiona 2 para restar, presiona 3 para multiplicar o presiona 4 para dividir")
	Leer operacion
	
	resultado = 0
	
	si operacion = "1" Entonces
		resultado = primerNumero + segundoNumero
	SiNo
		si  operacion = "2" Entonces
			resultado = primerNumero - segundoNumero
		  SiNo
			si  operacion = "3" Entonces
				resultado = primerNumero * segundoNumero
			  SiNo
				si  operacion = "4" Entonces
					resultado = primerNumero / segundoNumero
=======
Proceso Calculadora 
	escribir("Escribe el primer numero")
	Leer primerNumero
	Escribir("Escribe el Segundo numero")
	Leer segundoNumero 
	escribir("Presiona 1 para sumar, presiona 2 para restar, presiona 3 para multiplicar o presiona 4 para dividir")
	Leer operacion 
	resultado = 0 
	si operacion = "1" Entonces
		resultado = primerNumero + segundoNumero
	SiNo
		si operacion = "2" Entonces
			resultado = primerNumero - segundoNumero 
		SiNo
			si operacion = "3" Entonces 
				resultado = primerNumero * segundoNumero 
			SiNo
				si operacion = "4" Entonces 
					resultado = primerNumero / segundoNumero 
>>>>>>> fuentes/main
				FinSi
			FinSi
		FinSi
	FinSi
<<<<<<< HEAD
		
//	si operacion = "2" Entonces
//			resultado = primerNumero - segundoNumero
//	FinSi
	
	Escribir "El resultado de la suma es " , resultado
	
FinProceso
=======
	escribir "el resultado de la  suma es ", resultado
FinProceso
>>>>>>> fuentes/main
