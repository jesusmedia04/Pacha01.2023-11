//Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.
let n1 = parseInt(prompt("Escrib un numero (n1)"))
let n2 = parseInt(prompt("Escrib un numero (n2)"))
let n3 = parseInt(prompt("Escrib un numero (n3)"))
let mayor = 0;


if(n1 > n2 && n1 > n3  ){
    mayor = n1;
}
else if (n2 > n1 && n2 > n3) {
    mayor = n2
}else{
    mayor = n3
}

alert("El numero mayor es " + mayor)
