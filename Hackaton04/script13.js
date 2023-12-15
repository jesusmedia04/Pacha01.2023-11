/*Escriba una función que convierta un objeto en una matriz de claves y valores.
objectToArray({
likes: 2,
dislikes: 3,
followers: 10
}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]*/

function objectToArray(objeto) {
    // Utiliza Object.entries para obtener un array de pares clave-valor
    const arrayDeEntradas = Object.entries(objeto);

    return console.log(arrayDeEntradas);
}

// Ejemplo de uso
// const resultado = objectToArray({
//     likes: 2,
//     dislikes: 3,
//     followers: 10
// });

// console.log(resultado);
// // Resultado: [["likes", 2], ["dislikes", 3], ["followers", 10]]
