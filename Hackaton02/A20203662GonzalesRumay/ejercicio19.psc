// Hacer un algoritmo en Pseint para una heladeria se tienen 4 tipos de empleados ordenados de la siguiente forma con su numero identificador y salario diario correspondiente:
//Cajero (56$/dia).
//Servidor (64$/dia).
//Preparador de mezclas (80$/dia).
//Mantenimiento (48$/dia).
//El dueño de la tienda desea tener un programa donde solo ingrese dos numeros enteros que representen al numero identificador del empleado y la cantidad de d?as que trabajo en la semana (6 dias maximos). Y el programa le mostrara por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingreso?
Proceso Ejercicio19
	SALARIO_CAJERO = 56
    SALARIO_SERVIDOR = 64
    SALARIO_PREPARADOR = 80
    SALARIO_MANTENIMIENTO = 48
	
    Definir idEmpleado, diasTrabajados Como Entero
    Definir salarioSemanal Como Real
	
    Escribir "Ingrese el numero identificador del empleado:"
    Leer idEmpleado
    Escribir "Ingrese la cantidad de dias trabajados en la semana (maximo 6 dias):"
    Leer diasTrabajados
	
	Si diasTrabajados >= 1 y diasTrabajados <= 6 Entonces
        Si idEmpleado = 1 Entonces
            salarioSemanal = SALARIO_CAJERO * diasTrabajados
			Escribir "El salario semanal para el empleado ", idEmpleado, " es: $", salarioSemanal
        Sino 
			Si idEmpleado = 2 Entonces
				salarioSemanal = SALARIO_SERVIDOR * diasTrabajados
				Escribir "El salario semanal para el empleado ", idEmpleado, " es: $", salarioSemanal
			Sino 
				Si idEmpleado = 3 Entonces
					salarioSemanal = SALARIO_PREPARADOR * diasTrabajados
					Escribir "El salario semanal para el empleado ", idEmpleado, " es: $", salarioSemanal
				Sino 
					Si idEmpleado = 4 Entonces
						salarioSemanal = SALARIO_MANTENIMIENTO * diasTrabajados
						Escribir "El salario semanal para el empleado ", idEmpleado, " es: $", salarioSemanal
					Sino
						Escribir "Numero de empleado no valido."
					FinSi
					
					
					
				FinSi
			FinSi
		FinSi
	SiNo
		Escribir "Cantidad de dias trabajados no valida. Debe ser de 1 a 6 dias."
	FinSi
FinProceso