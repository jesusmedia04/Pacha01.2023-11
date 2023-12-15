/*Cree una función que tome una matriz de números y devuelva los números
mínimos y máximos, en ese orden.
minMax([1, 2, 3, 4, 5]) ➞ [1, 5]*/
function minMax(array) {
    // Verifica si la matriz no está vacía
    if (array.length === 0) {
        return []; // Devuelve una matriz vacía si no hay elementos
    }

    // Utiliza Math.min y Math.max para encontrar los valores mínimo y máximo
    const min = Math.min(...array);
    const max = Math.max(...array);

    // Devuelve un array con los valores mínimo y máximo
    return console.log([min, max]);
}

