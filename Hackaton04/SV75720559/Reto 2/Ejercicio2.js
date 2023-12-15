function sumOfCubes(...numeros) {
    let sumaCubos = 0;

    for (let i = 0; i < numeros.length; i++) {
        sumaCubos += Math.pow(numeros[i], 3);
    }

    return sumaCubos;
}

const resultado = sumOfCubes(1, 5, 9);
alert(resultado);
