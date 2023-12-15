/*Cree una función para multiplicar todos los valores en una matriz por la 
cantidad de valores en la matriz dada
multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]*/

function multiplyByLength(arr) {
    const longitud = arr.length;

    // Utiliza map para multiplicar cada valor por la longitud de la matriz
    const resultado = arr.map(valor => valor * longitud);

    return console.log(resultado);
}
