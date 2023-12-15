function ejercicio34(){
//Hacer un algoritmo en JavaScript que imprima la tabla de multiplicar de los números del uno nueve.

// Bucle externo para las filas
for (let i = 1; i <= 9; i++) {
    // Bucle interno para las columnas
    for (let j = 1; j <= 10; j++) {
        // Mostrar la multiplicación
        console.log(`${i} X ${j} = ${i * j}`);
    }
}
}