function diffMaxMin(matriz) {
    const maximo = Math.max(...matriz); 
    const minimo = Math.min(...matriz);
    return maximo - minimo; 
}

const resultado = diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]);
alert(resultado); 
