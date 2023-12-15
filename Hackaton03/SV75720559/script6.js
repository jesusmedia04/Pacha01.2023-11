//6. Hacer un algoritmo en JavaScript para ayudar a un trabajador a 
//saber cuál será su sueldo semanal, se sabe que si trabaja 
//40 horas o menos, se le pagará $20 por hora, pero si trabaja 
//más de 40 horas entonces las horas extras se le pagarán a $25 por hora.
function ejercicio06(){
        let sueldoH = 20
        let horasT = 0
    
        horasT= parseInt(prompt("Ingrese las horas que trabajó en esta semana: "))
    
        let total = 0

    if (horasT <= 40 ) {
        total = horasT * sueldoH    
    } else {
        total = 40 * sueldoH + (horasT - 40 ) * 25
    
    }
    alert("El sueldo semanal es: $" + total)
}
