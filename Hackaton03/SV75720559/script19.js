//19. Hacer un algoritmo en JavaScript para una heladería se 
//tienen 4 tipos de empleados ordenados de la siguiente forma 
//con su número identificador y salario diario correspondiente:
//Cajero (56$/día).
//Servidor (64$/día).
//Preparador de mezclas (80$/día).
//Mantenimiento (48$/día).
//El dueño de la tienda desea tener un programa donde 
//sólo ingrese dos números enteros que representen al número 
//identificador del empleado y la cantidad de días que trabajó 
//en la semana (6 días máximos). Y el programa le mostrará por 
//pantalla la cantidad de dinero que el dueño le debe pagar al empleado que 
function ejercicio19(){
    let tEmpleado , diasT
    let salD, salT

    tEmpleado = prompt("Ingrese el tipo de empleado : ")
    diasT = parseInt(prompt("Ingrese la cantidad de dias trabajados hasta un maximo de 6 dias: "))

    switch (tEmpleado) {
        case 'cajero':
            salD = 56
            break;
        case 'servidor':
            salD = 64
            break;
        case 'preparador':
            salD = 80
            break;
        case 'mantenimiento':
            salD = 48
            break;
    }
    if (diasT > 6) {
        alert("La cantidad de dias trabajados no puede ser mayor a 6.")
    } else {
        salT = diasT * salD
        alert("El total a pagar al empleado es: $" + salT)
    }
}
