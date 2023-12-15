function capLast(cadena) {
    const palabras = cadena.split(' ');

    const palabrasCapitalizadas = palabras.map(palabra => {
        const ultimaLetra = palabra.slice(-1).toUpperCase();
        return palabra.slice(0, -1) + ultimaLetra;
    });

    return palabrasCapitalizadas.join(' ');
}

const resultado = capLast("hello");
alert(resultado); 
