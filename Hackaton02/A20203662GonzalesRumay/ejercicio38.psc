// 38. Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto
Proceso Ejercicio38
    Definir numero, sumaDivisores, i Como Entero
	
    Escribir "Ingrese un número para verificar si es un número perfecto:"
    Leer numero
    sumaDivisores = 0
	
    Para i = 1 Hasta numero / 2 Hacer
        Si numero % i = 0 Entonces
            sumaDivisores = sumaDivisores + i
        FinSi
    FinPara
	
    Si sumaDivisores = numero Entonces
        Escribir "El número ", numero, " es un número perfecto."
    Sino
        Escribir "El número ", numero, " no es un número perfecto."
    FinSi
FinProceso