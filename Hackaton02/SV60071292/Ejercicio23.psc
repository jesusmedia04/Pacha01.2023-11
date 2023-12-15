Proceso Ejercicio23
	
//	Hacer un algoritmo en Pseint para calcular la suma de los n�meros impares menores o iguales a n.
	
		// Definir variables
		Definir n, suma, i Como Entero
		
		// Solicitar al usuario ingresar un n�mero
		Escribir "Ingrese un n�mero entero positivo para calcular la suma de los impares menores o iguales a n: "
		Leer n
		
		// Inicializar la suma a cero
		suma <- 0
		
		// Calcular la suma de los impares menores o iguales a n
		Para i <- 1 Hasta n Con Paso 2 Hacer
			suma <- suma + i
		FinPara
		
		// Mostrar el resultado
		Escribir "La suma de los impares menores o iguales a ", n, " es: ", suma
		
FinProceso
