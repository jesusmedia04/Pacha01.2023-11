/*Escriba una función que convierta un objeto en una matriz,
donde cada elemento representa un par clave-valor.
toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]*/

function toArray(objeto) {
    // Utiliza Object.entries para obtener un array de pares clave-valor
    const arrayDeEntradas = Object.entries(objeto);

    // Utiliza map para convertir cada par clave-valor en un array
    const arrayResultado = arrayDeEntradas.map(par => [par[0], par[1]]);

    return console.log(arrayResultado);
}

// // Ejemplo de uso
// const resultado = toArray({ a: 1, b: 2 });
// console.log(resultado); // Resultado: [["a", 1], ["b", 2]]
