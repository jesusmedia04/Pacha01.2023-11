//Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.
//formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"

function formatPhoneNumber(matriz){

    if(matriz.length > 9){
        alert("El maximo numero de valores es 9")
        return;
    }

    let _matriz = matriz
    _matriz.sort(function(a, b){return a-b})
    
    console.log(_matriz)
}

formatPhoneNumber([1,5,3,8,6,7,9,4,2])