Proceso Ejercicio16
	
//	Hacer un algoritmo en Pseint que lea un n�mero y seg�n ese n�mero, indique el d�a que corresponde.
	
		// Definir variable
		Definir numeroDia Como Entero
		
		// Solicitar al usuario ingresar un n�mero
		Escribir "Ingrese un n�mero del 1 al 7: "
		Leer numeroDia
		
		// Evaluar el n�mero para determinar el d�a
		Segun numeroDia Hacer
				Caso 1:
				Escribir "Lunes"
				Caso 2:
				Escribir "Martes"
				Caso 3:
				Escribir "Mi�rcoles"
				Caso 4:
				Escribir "Jueves"
				Caso 5:
				Escribir "Viernes"
				Caso 6:
				Escribir "S�bado"
				Caso 7:
				Escribir "Domingo"
			    De Otro Modo: 
				Escribir "N�mero no v�lido. Ingrese un n�mero del 1 al 7."
		FinSegun
		
FinProceso
