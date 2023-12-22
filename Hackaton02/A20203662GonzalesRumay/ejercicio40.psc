// Hacer un algoritmo en Pseint que cumpla con la aproximaci�n del n�mero pi con la serie de Nilakantha. La formula que se debe aplicar es: Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14)
Proceso Ejercicio40
    Definir n Como Entero
    Definir termino, aproximacionPi Como Real
	
    Escribir "Ingrese la cantidad de t�rminos para la aproximaci�n de Pi:"
    Leer n
    termino = 2
    aproximacionPi = 3.0
	
    Para i = 1 Hasta n Hacer
        aproximacionPi = aproximacionPi + (4.0 / (termino * (termino + 1) * (termino + 2)))
        termino = termino + 2
        aproximacionPi = aproximacionPi - (4.0 / (termino * (termino + 1) * (termino + 2)))
        termino = termino + 2
    FinPara
	
    Escribir "La aproximaci�n de Pi con ", n, " t�rminos es:", aproximacionPi
FinProceso