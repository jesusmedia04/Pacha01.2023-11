// Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba m�s de $2000 tendr� un aumento del 5%, si generaba menos de $2000 su aumento ser� de un 10%.
Proceso Ejercicio9
    Definir salarioActual, nuevoSalario Como Real
    Escribir "Ingrese el salario actual del trabajador:"
    Leer salarioActual
	
    Si salarioActual > 2000.0 Entonces
        // Aumento del 5% para salarios mayores a $2000
        nuevoSalario = salarioActual * 1.05
    Sino
        // Aumento del 10% para salarios de $2000 o menos
        nuevoSalario = salarioActual * 1.10
    FinSi
	
    Escribir "Salario actual: $", salarioActual
    Escribir "Nuevo salario con aumento: $", nuevoSalario
FinProceso