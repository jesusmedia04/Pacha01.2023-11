function ejercicio11(){
//hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.

let numero1 = parseInt (prompt ("Ingrese numero 1 ") )
let numero2 = parseInt (prompt ("Ingrese numero 2 ") )
let numero3 = parseInt (prompt ("Ingrese numero 3 ") )

if(numero1>numero2 && numero1 >numero3 ){
alert ("escribir el numero mayor es: "+numero1)
}
else{
    if(numero2>numero3)
    {alert ("escribir el numero mayor es: "+numero2)
    }else{
     alert ("escribir el numero mayor es: "+numero3)}   


    }

}
