/*Escriba una función, .vreplace () que extienda el prototipo de 
cadena reemplazando todas las vocales en una cadena con una vocal especificada.
"apples and bananas".vreplace("u") ➞ "upplus und bununus" */

String.prototype.vreplace = function (nuevaVocal) {
    // Utiliza una expresión regular para reemplazar todas las vocales
    return console.log(this.replace(/[aeiou]/g, nuevaVocal));
};

// // Ejemplo de uso
// const resultado = "apples and bananas".vreplace("u");
// console.log(resultado); // Resultado: "upplus und bununus"
