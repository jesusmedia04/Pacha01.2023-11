//Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor. (Pendiente)

let n1 = parseInt(prompt("Escrib un numero (n1)"))
let n2 = parseInt(prompt("Escrib un numero (n2)"))
let n3 = parseInt(prompt("Escrib un numero (n3)"))


let mayor, medio, menor;


if (n1 > n2 && n1 > n3) {
    mayor = n1
    if (n2 > n3) {
        medio = n2
        menor = n3
    } else {
        medio = n3
        menor = n2
    }
} else if (n2 > n1 && n2 > n3) {
    mayor = n2
    if (n1 > n3) {
        medio = n1
        menor = n3
    } else {
        medio = n3
        menor = n1
    }
} else {
    mayor = n3
    if (n1 > n2) {
        medio = n1
        menor = n2
    } else {
        medio = n2
        menor = n1
    }
}



alert("Mayor a menor  " + mayor + " >> " + medio + " >> " + menor)
