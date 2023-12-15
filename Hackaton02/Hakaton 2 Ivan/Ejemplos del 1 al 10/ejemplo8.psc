Proceso ejemplo8
	
	escribir "Ingrese la primera nota: "
	leer nota1
	escribir "Ingrese la segunda nota: "
	leer nota2
	escribir "Ingrese la tercera nota: "
	leer nota3
	
	promedio = (nota1 + nota2 + nota3) / 3
	
	si (promedio >= 6)
		resultado = "Aprobado"
	sino
		resultado = "Reprobado"
	Finsi
	
	escribir "El promedio es: ", promedio
	escribir "El resultado es: ", resultado
	
FinProceso
