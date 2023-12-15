function filterList(matriz) {
    return matriz.filter(elemento => Number.isInteger(elemento));
}

const resultado = filterList([1, 2, 3, "x", "y", 10]);
alert(resultado); 
