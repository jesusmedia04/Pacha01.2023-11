// Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.
Proceso Ejercicio17
	Definir hora, minuto, segundo Como Entero
	
    Escribir "Ingrese la hora (formato 24 horas):"
    Leer hora
    Escribir "Ingrese los minutos:"
    Leer minuto
    Escribir "Ingrese los segundos:"
    Leer segundo
	
    Si hora >= 0 y hora <= 23 y minuto >= 0 y minuto <= 59 y segundo >= 0 y segundo <= 59 Entonces
        // Calcular la hora dentro de un segundo
        segundo = segundo + 1
		
        // Ajustar los minutos y las horas si es necesario
        Si segundo = 60 Entonces
            segundo = 0
            minuto = minuto + 1
			
            Si minuto = 60 Entonces
                minuto = 0
                hora = hora + 1
				
                Si hora = 24 Entonces
                    hora = 0 // Volver a 0 si se alcanzan las 24 horas
                FinSi
            FinSi
        FinSi
		
        Escribir "La hora dentro de un segundo es: ", hora, ":", minuto, ":", segundo
    Sino
        Escribir "Entrada de tiempo no valida."
    FinSi
FinProceso