function ejercicio36(){
//Hacer un algoritmo en JavaScript para calcular la serie de Fibonacci.

let a = 0, b = 1, c, terminos;

a = 0;
b = 1;

terminos = parseInt(prompt("Ingrese la cantidad de términos: "));

console.log("La serie de Fibonacci para ", terminos, " términos:");

for (let i = 1; i <= terminos; i++) {
    console.log(a);

    c = a + b;
    a = b;
    b = c;
}
}