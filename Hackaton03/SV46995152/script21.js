/*Hacer un algoritmo en JavaScript que permita 
calcular el factorial de un número. */

function ejercicio21(){
    let n = parseInt(prompt('ingrese en numero: '))

        if (n === 0 || n === 1) {
        return 1;
        }
        
    // De lo contrario, el factorial es el producto de todos los números desde 1 hasta n
        var factorial = 1;
        for (var i = 2; i <= n; i++) {
         factorial *= i;
        }
    // Ejemplo de uso
        alert ('el factorial de:' + n + ',' + 'es : ' + factorial)
    

        




}


