Proceso ejemploe6
	
	Escribir "Ingrese las horas trabajadas: "
	Leer horass_trabajadas
	
	salario_hora = 20
	salario_base = salario_hora * horass_trabajadas
	
	si(horass_trabajadas >40)
		horas_extras = horass_trabajadas - 40
	SiNo
		horas_extras = 0
	FinSi
	
	salario_extra = horas_extras * 25
	
	salario_semanal = salario_base + salario_extras
	
	Escribir "El salario semanal es; ", salario_semanal
	
FinProceso
