/*Cree una función que tome una matriz y devuelva la diferencia entre 
los números más grandes y más pequeños.
diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32.*/

function diffMaxMin(arr) {
    // Utiliza Math.min y Math.max para encontrar el número más pequeño y más grande
    const minimo = Math.min(...arr);
    const maximo = Math.max(...arr);

    // Calcula la diferencia entre el número más grande y más pequeño
    const diferencia = maximo - minimo;

    return console.log(diferencia);
}

