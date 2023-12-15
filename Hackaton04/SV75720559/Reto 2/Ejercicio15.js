function multiplyByLength(matriz) {
    const multiplicador = matriz.length;
    return matriz.map(valor => valor * multiplicador);
}


const resultado = multiplyByLength([2, 3, 1, 0]);
alert(resultado);
