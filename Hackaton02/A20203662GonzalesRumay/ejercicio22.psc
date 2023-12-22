// 22. Hacer un algoritmo en Pseint para calcular la suma de los n primeros números.
Proceso Ejercicio22
	Definir n,suma,i Como Entero
	Escribir "Ingrese la cantidad de números para calcular la suma:"
	Leer n
	Si n <= 0 Entonces
		Escribir  "El número debe ser mayor que cero"
	SiNo
		suma = 0
		Escribir "Calculando la suma de los primeros ", n, " números..."
		Para i = 1 Hasta n Hacer
			suma = suma + i
			Escribir "Sumando ", i, " - Suma parcial: ", suma
		FinPara
		Escribir "La suma total de los primeros ", n, " números es ", suma
	FinSi
FinProceso