/*Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest) */


function sumarTodos(...numeros) {
    return console.log(numeros.reduce((total, numero) => total + numero, 0));
}



  

  