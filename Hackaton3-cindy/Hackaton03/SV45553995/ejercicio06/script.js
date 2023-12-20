//Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber cuál será su salario semanal, 
//se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 entonces 
//las horas extras se le pagarán a $25 por hora.

function ejercicio06(){
    let tot, extra; 
    let horas = parseInt( prompt("Cantidad de horas trabajadas: "))
    if (horas<= 40)
    {
        tot = horas*20;
            document.write("  El total a pagar es: ", tot);
    }
    if (horas >= 40)
    {
        tot = horas*25;
        tot = 39*20+((horas-39)*25)
            document.write("  El total a pagar es: ", tot);
    }
}