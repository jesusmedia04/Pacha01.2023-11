// 1. Hacer un algoritmo en Pseint que lea un numero por el teclado y determinar si tiene tres digitos.
Proceso Ejercicio1
    Definir numero Como Entero
    Escribir "Ingrese un numero:"
    Leer numero
	
    Si Abs(numero) >= 100 y Abs(numero) <= 999 Entonces
        Escribir "El numero tiene tres digitos."
    Sino
        Escribir "El numero no tiene tres digitos."
    FinSi
FinProceso