/*Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva
una cadena en forma de un número de teléfono.
formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-78*/
function formatPhoneNumber(array) {
    return console.log(`(${array.slice(0, 3).join("")}) ${array.slice(3, 6).join("")}-${array.slice(6).join("")}`); 
}
  