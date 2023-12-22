// Hacer un algoritmo en Pseint que lea tres numeros y diga cual es el mayor.
Proceso Ejercicio11
    Definir num1, num2, num3, mayor Como Real
	
    Escribir "Ingrese el primer numero:"
    Leer num1
    Escribir "Ingrese el segundo numero:"
    Leer num2
    Escribir "Ingrese el tercer numero:"
    Leer num3
	
    mayor = num1
    Si num2 > mayor Entonces
        mayor = num2
    FinSi
    Si num3 > mayor Entonces
        mayor = num3
    FinSi
    Escribir "El numero mayor es:", mayor
FinProceso