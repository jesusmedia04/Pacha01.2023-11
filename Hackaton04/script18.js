/*Cree una función que filtre las cadenas de una matriz y devuelva 
una nueva matriz que solo contenga enteros.
filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]*/

function filterList(arr) {
    // Utiliza filter para obtener un nuevo array con solo los enteros
    const enteros = arr.filter(elemento => typeof elemento === 'number');

    return console.log(enteros);
}

