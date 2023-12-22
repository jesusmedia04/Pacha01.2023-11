// 3. Hacer un algoritmo en Pseint que lea un número y determinar si termina en 4.
Proceso Ejercicio3
    Definir numero Como Entero
    Escribir "Ingrese un número:"
    Leer numero
    Definir ultimoDigito Como Entero
    ultimoDigito = Abs(numero) % 10
	
    Si ultimoDigito = 4 Entonces
        Escribir "El número termina en 4."
    Sino
        Escribir "El número no termina en 4."
    FinSi
FinProceso