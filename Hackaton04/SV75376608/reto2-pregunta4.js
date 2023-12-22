//Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)
function sumaNNumero(...numeros){
    let resultado = 0

    numeros.forEach(element => {
        resultado = resultado + element
    });

    return resultado
}

console.log(sumaNNumero(2,2,2,2))