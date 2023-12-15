//16. Hacer un algoritmo en JavaScript que 
//lea un número y según ese número, indique el día que corresponde.
function ejercicio16() {
    let num
    num = parseInt(prompt("Ingrese un numero del 1 al 7 : "))

    switch (num) {
        case 1 :
            alert("El dia es: Lunes")
            break;
        case 2:   
            alert("El dia es: Martes")
        break; 
        case 3:   
            alert("El dia es: Miercoles")
        break; 
        case 4:   
            alert("El dia es: Jueves")
        break; 
        case 5:   
            alert("El dia es: Viernes")
        break; 
        case 6:   
            alert("El dia es: Sabado")
        break; 
        case 7:   
            alert("El dia es: Domingo")
        break;
        default :
        alert("Numero fuera de rango. Ingrese un numero del 1 al 7.")
        break;
    } 
}
