//17. Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.
function ejercicio17(){
    let hora, min, seg
    hora = parseInt(prompt("Ingrese la hora (formato de 24 horas): "))
    min = parseInt(prompt("Ingrese los minutos: "))
    seg = parseInt(prompt("Ingrese los segundos: "))

    seg = seg + 1 

    if (min >= 60 ) {
        seg = 0
        min = min + 1
    }
    if (min >= 60) {
        min = 0
        hora = hora + 1
    }
    if (hora >= 24) {
        hora = 0 
    }
    alert("La hora despues de un segundo es: " + hora +  ":" + min + ":" + seg)
}