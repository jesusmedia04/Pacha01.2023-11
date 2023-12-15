/*Crea una función que retorne la potencia de un número 
dado, esta función deberá recibir la potencia y el número a potenciar. */

function potencia(numero,potencia){

    // let numero = parseInt(prompt('ingrese numero'));
    // let potencia = parseInt(prompt('ingrese numero'));

     
    const potenciar = Math.pow(numero, potencia); 
    
    return console.log(`la potencia del numero: ${numero}, es: ${potenciar}`)
    // `la potencia del numero: ${numero}, es: ${potenciar}`
    


}