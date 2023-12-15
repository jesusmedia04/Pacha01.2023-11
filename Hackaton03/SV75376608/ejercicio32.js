//Hacer un algoritmo en JavaScript que permita al usuario continuar con el programa.

let bucle = true
while(bucle){
    let respuesta = prompt("Deseas continuar el programa? - 'Si' /'No'  ")

    if(respuesta.toUpperCase() == "NO"){
        alert("Programa cerrado")
        bucle = false
        break
    }

    alert("Continuamos con el programa")
}