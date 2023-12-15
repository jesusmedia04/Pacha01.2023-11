function ejercicio33(){
//Hacer un algoritmo en JavaScript que permita al usuario continuar con el programa.

// Definir variable
let eleccion;

// Repetir el proceso mientras eleccion sea diferente de "N" o "n"
do {
    // Solicitar al usuario si desea continuar
    eleccion = prompt("Desea continuar con el programa? (S/N):");
} while (eleccion.toUpperCase() !== "N");

// Mostrar un mensaje al finalizar
console.log("Fin del programa.");
}