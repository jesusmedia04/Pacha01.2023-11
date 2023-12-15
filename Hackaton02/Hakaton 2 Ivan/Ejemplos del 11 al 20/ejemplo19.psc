Proceso ejemplo19
	
	escribir "Ingrese el identificador del empleado: "
	leer id_empleado
	
	escribir "Ingrese la cantidad de días trabajados: "
	leer dias_trabajados
	
	si (id_empleado == 1)
		tipo_empleado = "Cajero"
	sino
		si (id_empleado == 2)
			tipo_empleado = "Servidor"
		sino
			si (id_empleado == 3)
				tipo_empleado = "Preparador de mezclas"
			sino
				tipo_empleado = "Mantenimiento"
			FinSi
		FinSi
	FinSi
	
	si (tipo_empleado == "Cajero")
		salario = dias_trabajados * 56
	sino
		si (tipo_empleado == "Servidor")
			salario = dias_trabajados * 64
		sino
			si (tipo_empleado == "Preparador de mezclas")
				salario = dias_trabajados * 80
			sino
				salario = dias_trabajados * 48
			FinSi
		FinSi
	FinSi
	
	escribir "El salario a pagar al empleado ", tipo_empleado, " es de: ", salario

	
FinProceso
