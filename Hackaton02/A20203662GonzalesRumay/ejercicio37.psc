// 37. Hacer un algoritmo en Pseint para conseguir el M.C.D de un número por medio del algoritmo de Euclides.
Proceso Ejercicio37
    Definir num1, num2, resto, mcd Como Entero
	
    Escribir "Ingrese el primer número:"
    Leer num1
	
    Escribir "Ingrese el segundo número:"
    Leer num2
	
    Mientras num2 <> 0 Hacer
        resto = num1 % num2
        num1 = num2
        num2 = resto
    FinMientras
    mcd = num1
    Escribir "El Máximo Común Divisor (MCD) de los dos números es:", mcd
FinProceso