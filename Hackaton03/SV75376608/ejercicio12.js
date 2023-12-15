//Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.
let n1 = parseInt(prompt("Escrib un numero (n1)"))
let n2 = parseInt(prompt("Escrib un numero (n2)"))  
let mayor = 0;


if(n1 > n2  ){
    mayor = n1;
}
else{
    mayor = n2
}

alert("El numero mayor es " + mayor)