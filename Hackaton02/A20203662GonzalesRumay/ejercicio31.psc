// Hacer un algoritmo en Pseint parar calcular la media de los n�meros pares e impares, s�lo se ingresar� diez n�meros.
Proceso Ejercicio31
	Definir numero, sumaPares, sumaImpares, contadorPares, contadorImpares, mediaPares, mediaImpares Como Real
	
    sumaPares = 0
    sumaImpares = 0
    contadorPares = 0
    contadorImpares = 0
	
    Escribir "Ingrese diez n�meros:"
	
    Para i = 1 Hasta 10 Hacer
        Escribir "N�mero ", i, ": "
        Leer numero
		
        Si numero % 2 = 0 Entonces
            sumaPares = sumaPares + numero
            contadorPares = contadorPares + 1
        Sino
            sumaImpares = sumaImpares + numero
            contadorImpares = contadorImpares + 1
        FinSi
    FinPara
	
    Si contadorPares > 0 Entonces
        mediaPares = sumaPares / contadorPares
        Escribir "La media de los n�meros pares es: ", mediaPares
    Sino
        Escribir "No se ingresaron n�meros pares."
    FinSi
	
    Si contadorImpares > 0 Entonces
        mediaImpares = sumaImpares / contadorImpares
        Escribir "La media de los n�meros impares es: ", mediaImpares
    Sino
        Escribir "No se ingresaron n�meros impares."
    FinSi
FinProceso