function ejercicio14(){
//Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez y al 9 
//y determine si es un número primo (Pendiente)


let numero = parseInt (prompt ("Escribe un numero del 1 al 9") )

if( numero<10 && numero>0){
    switch(numero){
        case 2:
            alert("es un número primo")
            break;    
        case 3:
            alert("es un número primo")
            break; 
        case 5:
            alert("es un número primo")
            break; 
        case 7:
            alert("es un número primo")
            break;     
        default:
            alert("no es un número primo")
            break;  
          
    }
} else{
    alert("Es un valor inválido")
}







}