// 19. Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados
// ordenados de la siguiente forma con su número identificador y salario diario 
//correspondiente:

//    Cajero (56$/día).

//    Servidor (64$/día).

//    Preparador de mezclas (80$/día).

//    Mantenimiento (48$/día).

//    El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó

function ejercicio19(){
let idEmpleado, diasTrabajados, salarioDiario, totalPagar;


idEmpleado = parseInt(prompt("Ingrese el número identificador del empleado (11:cajero,22:servidor,33:preparador,44:mantenimiento):"));


switch (idEmpleado) {
    case 11:
        salarioDiario = 56;
        break;
    case 22:
        salarioDiario = 64;
        break;
    case 33:
        salarioDiario = 80;
        break;
    case 44:
        salarioDiario = 48;
        break;
    default:
        alert("Número de empleado no válido.");
        
        return;
}


diasTrabajados = parseInt(prompt("Ingrese la cantidad de días trabajados en la semana"+
"(máximo 6 días):"));


if (diasTrabajados > 6) {
    alert("La cantidad de días trabajados no puede ser mayor a 6.");
} else {
    totalPagar = diasTrabajados * salarioDiario;
    alert("El dueño debe pagar al empleado $" + totalPagar.toFixed(2));
}
}
