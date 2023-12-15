function ejercicio37(){
//Hacer un algoritmo en JavaScript para conseguir el M.C.D de un número por medio del algoritmo de Euclides.

let num1, num2, resto;

num1 = parseInt(prompt("Ingrese el primer número: "));
num2 = parseInt(prompt("Ingrese el segundo número: "));

while (num2 !== 0) {
    resto = num1 % num2;
    num1 = num2;
    num2 = resto;
}

console.log("El M.C.D es:", num1);
}