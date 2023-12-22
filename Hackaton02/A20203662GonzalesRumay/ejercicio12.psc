//  Hacer un algoritmo en Pseint que lea dos numeros y diga cual es el mayor.
Proceso Ejercicio12
    Definir num1, num2, mayor Como Real
	
    Escribir "Ingrese el primer numero:"
    Leer num1
    Escribir "Ingrese el segundo numero:"
    Leer num2
	
    Si num1 > num2 Entonces
        mayor = num1
    Sino
        mayor = num2
    FinSi
    Escribir "El numero mayor es:", mayor
FinProceso
