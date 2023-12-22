// Hacer un algoritmo en Pseint que lea un numero y segun ese numero, indique el dia que corresponde.
Proceso Ejercicio16
	Definir numeroDia Como Entero
    Escribir "Ingrese un numero del 1 al 7:"
    Leer numeroDia
	
    Si numeroDia = 1 Entonces
        Escribir "Lunes"
    Sino Si numeroDia = 2 Entonces
			Escribir "Martes"
		Sino Si numeroDia = 3 Entonces
				Escribir "Miercoles"
			Sino Si numeroDia = 4 Entonces
					Escribir "Jueves"
				Sino Si numeroDia = 5 Entonces
						Escribir "Viernes"
					Sino Si numeroDia = 6 Entonces
							Escribir "Sabado"
						Sino Si numeroDia = 7 Entonces
								Escribir "Domingo"
							Sino
								Escribir "Numero no valido. Debe ser del 1 al 7."
							FinSi
						FinSi
					FinSi
				FinSi
			FinSi
		FinSi
	FinSi
	
	
FinProceso