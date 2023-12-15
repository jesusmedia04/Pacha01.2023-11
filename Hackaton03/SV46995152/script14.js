/*  Hacer un algoritmo en JavaScript que lea un entero positivo 
del 1 al diez y al 9 y determine si es un número primo. (Pendiente)*/ 

function ejercicio14(){
    let numero = parseInt(prompt('ingrese el primer numero'));
    if(numero >= 1 && numero <= 10){
        alert('el numero esta comprendido del 1 al 10: ' )
    } else{
        alert('el numero no esta comprendido del 1 al 10: ' )
    }
    for(let i = 2; i < numero / 2; i++){
        if(numero % i === 0){
            numero = false;
        }
    }
    if(numero){
        alert('si es un numero primo')
    }else{
        alert('no es un numero primo')
    }
   
    }
   


    
    
    
      
