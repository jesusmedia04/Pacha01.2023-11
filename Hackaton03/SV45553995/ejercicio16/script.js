function ejercicio16(){
//Hacer un algoritmo en JavaScript que lea un número y según ese número, 
//indique el día que corresponde.

let diadesemana = parseInt (prompt ("Ingrese un número: ") )

switch(diadesemana){
    case 1: 
        alert("lunes")
        break;
    case 2:
        alert("martes")
        break;
    case 3:
        alert("miercoles")
        break;
    case 4:
        alert("jueves")
        break; 
    case 5:
        alert("viernes")
        break;
    default:
        alert("no es un valor valido")
        break;
}
}