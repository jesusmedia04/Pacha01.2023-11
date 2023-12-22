//24. Hacer un algoritmo en Pseint para realizar la suma de todos los números pares hasta el 1000
Proceso Ejercicio24
	Definir limite, suma, i Como Entero
    limite = 1000
    suma = 0
    Escribir "Calculando la suma de los números pares hasta ", limite, "..."
    Para i = 2 Hasta limite Con Paso 2 Hacer
        suma = suma + i
        Escribir "Sumando ", i, " - Suma parcial: ", suma
    FinPara
    Escribir "La suma total de los números pares hasta ", limite, " es ", suma
FinProceso