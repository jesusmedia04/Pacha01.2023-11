/*Crea una función llamada calculator que recibe 3 parámetros, dos números y
una operación matemática (+,-,/,x,%), y si la operación no es correcta que
 envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4 */

 function calculator(n1,operation,n2){

    const num1 = parseInt(n1);
    const num2 = parseInt(n2);
    let result

    switch(operation){
        case '+':
            result =  num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '/':
            result = num1 / num2; 
            break;
        case 'x':
            result = num1 * num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        default:
            result  = 'El parámetro no es reconocido'
    }
    return console.log('resultado: ', result )

 }