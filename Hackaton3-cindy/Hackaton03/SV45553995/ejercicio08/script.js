
//Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si 
//el estudiante aprobado o no.

function ejercicio08(){
    
    let promedio;

    let nota1 = parseInt( prompt("ingrese la nota 1 del alumno: "))
    let nota2 = parseInt( prompt("ingrese la nota 2 del alumno: "))
    let nota3 = parseInt( prompt("ingrese la nota 3 del alumno: "))
    
    promedio = (nota1+nota2+nota3)/3;
    
    if (promedio>=11)
    {
        document.write("La nota promedio es: "+promedio+ "  El alumno esta aprobado") 
    }
    else
    if  (promedio <11)
    {
        document.write("La nota promedio es: "+promedio+ "  El alumno esta desaprobado") 
    }

}