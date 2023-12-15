//13. Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.
function ejercicio13(){
    let letra
    letra = prompt("Ingrese una letra : ")
    letra = letra.toLowerCase()

    if (letra === "a"  || letra === "e"  || letra === "i"  || letra === "o"  || letra === "u") {
        alert("La letra es una vocal ")
    } else {
        alert("La letra no es una vocal")
    }
}