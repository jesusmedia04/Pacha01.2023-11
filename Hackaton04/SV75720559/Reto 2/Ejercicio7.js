function formatoNumero(array) {
    const numeros = array.join('');
    const formato = `(${numeros.substring(0, 3)}) ${numeros.substring(3, 6)}-${numeros.substring(6)}`;
    return formato;
}

const resultado = formatoNumero([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
alert(resultado); 
