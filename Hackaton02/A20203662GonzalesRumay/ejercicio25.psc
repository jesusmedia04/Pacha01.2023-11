//25. Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta
Proceso Ejercicio25
	Definir numero, resultado, i Como Real 
    Escribir "Ingrese un número para calcular su factorial:"
    Leer numero
    Si numero < 0 Entonces
        Escribir "El factorial no está definido para números negativos."
    Sino
        resultado = 1
        Si numero > 1 Entonces
            Para i = numero Hasta 2 Con Paso -1 Hacer
                resultado = resultado * i
            FinPara
        FinSi
        Escribir "El factorial de ", numero, " es ", resultado
    FinSi
FinProceso