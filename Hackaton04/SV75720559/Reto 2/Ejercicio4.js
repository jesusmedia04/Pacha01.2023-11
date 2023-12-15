function sumarNumeros(...numeros) {
    return numeros.reduce((total, numero) => total + numero, 0);
}

// Ejemplo de uso:
alert(sumarNumeros(1, 2, 3)); 
alert(sumarNumeros(5, 10, 15, 20)); 
alert(sumarNumeros(2));
alert(sumarNumeros()); 
