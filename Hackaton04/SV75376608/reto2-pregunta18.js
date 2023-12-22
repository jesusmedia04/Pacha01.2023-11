//Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.
//filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]

function filterList(matriz){
    let newMatriz = []

    for(let i = 0 ; i  < matriz.length ; i++) {
        if(typeof(matriz[i]) != "string"){
            newMatriz.push(matriz[i])
        }
    }

    return newMatriz;

}

console.log(filterList([1,4,"er","fd",5,96,"dfdfd",4,"dfdf"]))