function obtenerTipoValor(valor) {
    return typeof valor;
}


alert(obtenerTipoValor(5)); // Devolverá "number"
alert(obtenerTipoValor("Hola")); // Devolverá "string"
alert(obtenerTipoValor(true)); // Devolverá "boolean"
alert(obtenerTipoValor(null)); // Devolverá "object"
alert(obtenerTipoValor(undefined)); // Devolverá "undefined"
alert(obtenerTipoValor({})); // Devolverá "object"
alert(obtenerTipoValor([])); // Devolverá "object"
alert(obtenerTipoValor(function() {})); // Devolverá "function"

