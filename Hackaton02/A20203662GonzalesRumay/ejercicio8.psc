// Hacer un algoritmo en Pseint para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
Proceso Ejercicio8
    Definir nota1, nota2, nota3, promedio Como Real
	
    Escribir "Ingrese la primera nota:"
    Leer nota1
    Escribir "Ingrese la segunda nota:"
    Leer nota2
    Escribir "Ingrese la tercera nota:"
    Leer nota3
	
    promedio = (nota1 + nota2 + nota3) / 3.0
    Si promedio >= 14.0 Entonces
        Escribir "El estudiante aprobó con un promedio de ", promedio
    Sino
        Escribir "El estudiante no aprobó con un promedio de ", promedio
    FinSi
FinProceso