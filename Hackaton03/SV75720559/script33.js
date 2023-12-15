//33. Hacer un algoritmo en JavaScript que permita al usuario continuar con el programa.
function ejercicio33(){
    let continuar = 's'

    while (continuar === 's' || continuar === 'S') {
        continuar = prompt("¿Desea continuar? (s/n): ")
        continuar = continuar.toLowerCase()
    }
    alert("Fin del programa.")
}   