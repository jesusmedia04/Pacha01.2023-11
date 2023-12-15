function minMax(numeros) {
    const minimo = Math.min(...numeros);
    const maximo = Math.max(...numeros);
    return [minimo, maximo];
}

const resultado = minMax([1, 2, 3, 4, 5]);
alert(resultado); 
