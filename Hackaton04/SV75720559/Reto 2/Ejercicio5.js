function filtrarString(valores) {
    return valores.filter(valor => typeof valor === 'string');
}

const valores = [1, 'Hola', true, '123', 5, 'Mundo'];
const valoresFiltrados = filtrarString(valores);
alert(valoresFiltrados); 
