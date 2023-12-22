//Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor.
Proceso Ejercicio4
    Definir num1, num2, num3, temp Como Entero
    Escribir "Ingrese el primer número:"
    Leer num1
    Escribir "Ingrese el segundo número:"
    Leer num2
    Escribir "Ingrese el tercer número:"
    Leer num3
	
    Si num1 > num2 Entonces
        temp = num1
        num1 = num2
        num2 = temp
    FinSi
	
    Si num2 > num3 Entonces
        temp = num2
        num2 = num3
        num3 = temp
    FinSi
	
    Si num1 > num2 Entonces
        temp = num1
        num1 = num2
        num2 = temp
    FinSi
    Escribir "Números ordenados de menor a mayor:", num1, ", ", num2, ", ", num3
FinProceso