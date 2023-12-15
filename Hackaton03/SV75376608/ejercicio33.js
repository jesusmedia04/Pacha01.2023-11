//Hacer un algoritmo en JavaScript que imprima la tabla de multiplicar de los números del uno nueve.

for (let i = 1 ; i <= 9; i++) {

    console.log("Comienza la tabla del " + i)
    
    for (let j = 1; j <= 9; j++) {
        
        console.log(i + " x " + j + " = " + (i*j))
    }
    
    console.log("Termina la tabla del " + i)
}