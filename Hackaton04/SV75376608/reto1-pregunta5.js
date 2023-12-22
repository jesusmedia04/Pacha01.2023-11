//Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática (+,-,/,x,%), y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4

function calculator(n1, n2, operador) {
    let resultado = 0
    let operacion = ""
    switch (operador) {
        case "+":
            operacion = "suma"
            resultado =  n1 + n2
            break;
        case "-":
            operacion = "resta"
            resultado =  n1 + n2
            break;
        case "-":
            operacion = "multiplicacion"
            resultado =  n1 * n2
            break;
        case "-":
            operacion = "division"
            resultado =  n1 / n2
            break;
        default :
            console.log("El parámetro no es reconocido");
            break
    }

    console.log("Elegiste la operacion " + operacion + " y este dará como resultado " + resultado)
}

calculator(4,5,"+")