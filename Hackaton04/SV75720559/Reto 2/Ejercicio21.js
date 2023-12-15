function findNemo(cadena) {
    const palabras = cadena.split(' ');
    const indice = palabras.indexOf('Nemo');

    if (indice !== -1) {
        const orden = indice + 1;
        return `I found Nemo at ${orden}!`;
    } else {
        return "Nemo not found";
    }
}

const resultado = findNemo("I am finding Nemo !");
alert(resultado); 
