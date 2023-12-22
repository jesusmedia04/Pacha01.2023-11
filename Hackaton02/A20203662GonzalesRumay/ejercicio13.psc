// Hacer un algoritmo en Pseint que lea una letra y diga si es una vocal.
Proceso Ejercicio13
	Definir letra Como Caracter
	
    Escribir "Ingrese una letra:"
    Leer letra
	
    Si letra = "a" o letra = "e" o letra = "i" o letra = "o" o letra = "u" Entonces
        Escribir "La letra ingresada es una vocal."
    Sino
		Si letra = "A" o letra = "E" o letra = "I" o letra = "O" o letra = "u" Entonces
			Escribir "La letra ingresada es una vocal."
		SiNo
			Escribir "La letra ingresada no es una vocal."
		FinSi
    FinSi
FinProceso