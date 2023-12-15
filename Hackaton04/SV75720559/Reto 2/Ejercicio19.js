function repeat(elemento, veces) {
    const resultado = Array(veces).fill(elemento);
    return resultado;
}

const resultado = repeat(13, 5);
alert(resultado); 
