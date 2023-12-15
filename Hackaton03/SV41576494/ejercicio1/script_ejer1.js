//Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.
$("#btnIngresar").click(determinarDigitos);
function determinarDigitos(){
    let entero = Number($("#txtEntero").val());
    let division = entero / 10;
    while(division < 1){
        console.log(division);
        division++;
    }
}