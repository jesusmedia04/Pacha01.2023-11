/* Hacer un algoritmo en JavaScript para ayudar a un trabajador 
a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, 
se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras
se le pagarán a $25 por hora.*/

function ejercicio06(){

let horasTrabajadas = parseInt(prompt('Horas trabajadas:'));
let sueldoBase
let sueldoExtra
let sueldoTotal
if(horasTrabajadas <= 40){
    sueldo = horasTrabajadas * 20
} else{
    sueldoBase = 40 * 20;
    sueldoExtra = ( horasTrabajadas - 40) * 25
    sueldoTotal = sueldoBase + sueldoExtra
}
alert( 
    'horas extras: ' + ( horasTrabajadas - 40) + ', ' +
    'su sueldo semanal es de $: ' + sueldoTotal
  );

}


