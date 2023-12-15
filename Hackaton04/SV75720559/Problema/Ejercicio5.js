function calculator() {
    const numero1 = parseFloat(prompt("Ingrese el primer numero:"));
    const numero2 = parseFloat(prompt("Ingrese el segundo numero:"));
    const operacion = prompt("Ingrese la operacion a realizar (+, -, /, x, %):");

    let resultado;

    switch (operacion) {
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = numero1 - numero2;
            break;
        case '/':
            resultado = numero1 / numero2;
            break;
        case 'x':
            resultado = numero1 * numero2;
            break;
        case '%':
            resultado = numero1 % numero2;
            break;
        default:
            return "El parametro no es reconocido";
    }

    return resultado;
}

const operacionRealizada = calculator();
alert(operacionRealizada);
