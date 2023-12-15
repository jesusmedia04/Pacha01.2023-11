Proceso ejemplo16
	
	escribir "Ingrese un número del 1 al 7: "
	leer dia
	
	si (dia == 1)
		dia_semana = "Domingo"
	SiNo
		si( dia == 2)
			dia_semana = "Lunes"
		SiNo
			si(dia == 3)
				dia_semana = "Martes"
			SiNo
				si(dia == 4)
					dia_semana = "Miercoles"
				SiNo
					si(dia == 5)
						dia_semana = "Jueves"
					SiNo
						si(dia = 6)
							dia_semana = "Viernes"
						SiNo
							si(dia == 7)
								dia_semana = "Sabado"
							SiNo
								dia_semana = "Dia incorrecto"
							FinSi
						FinSi
					
					FinSi
				FinSi
			FinSi
		FinSi
	FinSi
	
	escribir "El día de la semana es: ", dia_semana

FinProceso
