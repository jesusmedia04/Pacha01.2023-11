Proceso ejemplo9
	escribir "Ingrese el salario base: "
	leer salario_base
	
	si (salario_base > 2000)
		aumento = salario_base * 0.05
	sino
		aumento = salario_base * 0.1
	FinSi
	
	nuevo_salario = salario_base + aumento
	
	escribir "El nuevo salario es: ", nuevo_salario

FinProceso
