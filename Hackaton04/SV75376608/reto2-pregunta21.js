//Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta:
// "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".
//findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"
 function findNemo(cadena){

    let posciNemo = cadena.indexOf("Nemo")

    return `Nemo se encuentra en la posicion ${posciNemo}`
 }

 console.log(findNemo("No Nemo donde se encuentra Nemo"))