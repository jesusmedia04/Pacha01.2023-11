function ejercicio35(){
//Hacer un algoritmo en JavaScript que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.

let number, mayorcito = -9999, menorcito = 9999;

for (let i = 1; i <= 20; i++) {
    number = parseInt(prompt("Ingrese el número: "));

    if (number > mayorcito) {
        mayorcito = number;
    }

    if (number < menorcito) {
        menorcito = number;
    }
}

console.log("El número mayor es: ", mayorcito);
console.log("El número menor es: ", menorcito);
}