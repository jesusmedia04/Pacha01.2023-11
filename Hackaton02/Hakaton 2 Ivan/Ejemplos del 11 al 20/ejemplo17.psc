Proceso ejemplo17
	
	escribir "Ingrese la hora: "
	leer hora
	
	escribir "Ingrese los minutos: "
	leer minutos
	
	escribir "Ingrese los segundos: "
	leer segundos
	
	segundos = segundos + 1
	si (segundos > 59)
		segundos = 0
		minutos = minutos + 1
	FinSi
	
	
	si (minutos > 59)
		minutos = 0
		hora = hora + 1
	FinSi
	
	escribir "La hora dentro de un segundo es: ", hora, ":", minutos, ":", segundos

FinProceso
