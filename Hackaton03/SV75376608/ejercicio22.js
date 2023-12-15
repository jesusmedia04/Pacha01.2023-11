//Hacer un algoritmo en JavaScript para calcular la suma de los n primeros números.

let numero = parseInt(prompt("Escriba el numero de numeros para calcular la suma"))

let suma = 0

for (let i = 1; i <= numero; i++) {
    suma += i
}

alert("La sumarotia de los " + numero + " primero numeros , es " + suma)
