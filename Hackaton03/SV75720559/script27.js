//27. Hacer un algoritmo en JavaScript para determinar 
//la media de una lista indefinida de números positivos, 
//se debe acabar el programa al ingresar un número negativo.
function ejercicio27(){
    let suma = 0;
    let cantidad = 0;
    let num = 0;

    prompt("Ingrese numeros positivos para calcular la media (Ingrese un número negativo para terminar):");

    while (true) {
        num = parseFloat(prompt("Ingrese un numero: "))

        if (num >= 0) {
            suma += num;
            cantidad++;
        } else {
            break;
        }
    }

    if (cantidad > 0) {
        let media = suma / cantidad;
        alert("La media de los numeros positivos ingresados es: " + media)
    } else {
        alert("No se ingresaron numero positivos para calcular la media.")
    }
}

