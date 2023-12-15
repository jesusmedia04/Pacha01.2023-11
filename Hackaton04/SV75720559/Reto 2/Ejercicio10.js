function toArray(objeto) {
    return Object.entries(objeto);
}

const resultado = toArray({ a: 1, b: 2 });
alert(resultado); 
