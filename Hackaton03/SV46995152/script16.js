/* Hacer un algoritmo en JavaScript que lea un número y según ese número, 
indique el día que corresponde.*/

function ejercicio16(){
    let numero = parseInt(prompt('ingrese un numero'));
    let dia

    if(numero === 1){
        dia = 'lunes';
       }else if(numero === 2){
        dia = 'martes';
       }else if(numero === 3){
        dia = 'miercoles';
       }else if(numero === 4){
        dia = 'jueves';
       }else if(numero === 5){
        dia = 'viernes';
       }else if(numero === 6){
        dia = 'sabado';
       }else if(numero === 7){
        dia = 'domingo'
       }
       alert('dia de la semana ' + dia )
   

}