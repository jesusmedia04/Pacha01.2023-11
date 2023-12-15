//Hacer un algoritmo en JavaScript para calcular la suma de los números impares menores o iguales a n.


let numero = parseInt(prompt("Escriba el numero de numeros para calcular la suma de los impares"))

let suma = 0

for (let i = 1; i <= numero; i++) {
    if(i % 2 != 0 && i <= numero){
        suma += i
    }
}

alert("La sumatoria de los números impares menores o iguales a " + numero + " es " + suma)