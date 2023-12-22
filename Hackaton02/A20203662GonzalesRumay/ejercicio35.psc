// 35. Hacer un algoritmo en Pseint que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.
Proceso Ejercicio35
	Definir numero, mayor, menor Como Real
    Definir i Como Entero
	
    Escribir "Ingrese veinte números:"
	
    Leer numero
    mayor = numero
    menor = numero
	
    Para i = 2 Hasta 20 Hacer
        Escribir "Ingrese el siguiente número:"
        Leer numero
		
        Si numero > mayor Entonces
            mayor = numero
        FinSi
		
        Si numero < menor Entonces
            menor = numero
        FinSi
    FinPara
	
    Escribir "El número mayor es: ", mayor
    Escribir "El número menor es: ", menor
FinProceso