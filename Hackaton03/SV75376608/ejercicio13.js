//Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.
let respuesta = prompt("Escribe una letra")
switch (respuesta.toUpperCase) {
    case "A":
        alert("Tu letra es la vocal : " + respuesta)
        break;
    case "E":
        alert("Tu letra es la vocal : " + respuesta)
        break;
    case "I":
        alert("Tu letra es la vocal : " + respuesta)
        break;
    case "O":
        alert("Tu letra es la vocal : " + respuesta)
        break;
    case "U":
        alert("Tu letra es la vocal : " + respuesta)
        break;
        default:
            alert("Tu letra es una consonante , es : " + respuesta)
        break;
}