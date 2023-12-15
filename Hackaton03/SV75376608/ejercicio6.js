//Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber cuál será su sueldo semanal, 
//se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora
//, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.

let nHoras = parseInt(prompt("Cuantas horas trabajas semanalmente?"))

if(nHoras <= 40){
    alert("Trabajas " + nHoras +" horas , se te va a pagar " + (nHoras*20) + " soles semanales")
}else if (nHoras > 40){
    alert("Trabajas " + nHoras +" horas , se te va a pagar " + (nHoras*25) + " soles semanales")
}