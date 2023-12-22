//Escriba una función que convierta un objeto en una matriz de claves y valores.
/*objectToArray({
    likes: 2,   newMatriz.push(JSON.stringify(objeto))
    dislikes: 3,
    followers: 10
  }) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]
*/

function objectToArray(objeto){
    let newMatriz = []

     for(let propiedad in objeto){
        newMatriz.push([propiedad,objeto[propiedad]])
     }


    return newMatriz
}

console.log(objectToArray({
    likes: 2,
    dislikes: 3,
    followers: 10
  }))