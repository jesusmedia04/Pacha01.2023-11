function countdown(numero) {
    const resultado = [];
    for (let i = numero; i >= 0; i--) {
        resultado.push(i);
    }
    return resultado;
}

const resultado = countdown(5);
alert(resultado); 
