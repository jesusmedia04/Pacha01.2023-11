// Hacer un algoritmo en Pseint que convierta centimetros a pulgadas y libras a kilogramos.
Proceso Ejercicio15
	Definir centimetros, pulgadas, libras, kilogramos Como Real
	CENTIMETROS_A_PULGADAS = 0.393701
    LIBRAS_A_KILOGRAMOS = 0.453592
	
    Escribir "Ingrese la longitud en centimetros:"
    Leer centimetros
    pulgadas = centimetros * CENTIMETROS_A_PULGADAS
	
    Escribir "Ingrese el peso en libras:"
    Leer libras
    kilogramos = libras * LIBRAS_A_KILOGRAMOS
	
    Escribir "Longitud en pulgadas: ", pulgadas
    Escribir "Peso en kilogramos: ", kilogramos
FinProceso