Proceso Calculadora2
<<<<<<< HEAD
	Escribir("Escribe el primer numero")
	Leer primerNumero
	Escribir("Escribe el segundo numero")
	Leer segundoNumero
	
	Escribir ("Presiona 1 para sumar , presiona 2 para restar, presiona 3 para multiplicar o presiona 4 para dividir")
	Leer operacion
	
	resultado = 0
	
	Segun operacion Hacer
		1: 
			resultado = primerNumero + segundoNumero
		2:
			resultado = primerNumero - segundoNumero
		3:
=======
	escribir("Escribe el primer numero")
	leer primerNumero
	Escribir("Escribe el Segundo numero")
	Leer segundoNumero 
	escribir("Presiona 1 para sumar, presiona 2 para restar, presiona 3 para multiplicar o presiona 4 para dividir")
	Leer operacion
	resultado = 0
	Segun operacion Hacer
		1:
			resultado = primerNumero + segundoNumero
		2:
			resultado = primerNumero - segundoNumero
	    3: 
>>>>>>> fuentes/main
			resultado = primerNumero * segundoNumero
		4:
			resultado = primerNumero / segundoNumero
		De Otro Modo:
<<<<<<< HEAD
			Escribir  "Operacion no válida"
	FinSegun
	
	Escribir "El resultado de la suma es " , resultado
	
FinProceso
=======
			Escribir "Operacion no Valida"
	Fin Segun
	escribir "el resultado es ", resultado
FinProceso
>>>>>>> fuentes/main
