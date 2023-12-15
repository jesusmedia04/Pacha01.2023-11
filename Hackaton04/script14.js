/*Cree una función donde, dado el número n, devuelva la suma de todos
los números cuadrados  incluyendo n.
squaresSum(3) ➞ 14
1² + 2² + 3² =
1 + 4 + 9 =
14 */

function squaresSum(n) {
    let suma = 0;

    for (let i = 1; i <= n; i++) {
        suma += i ** 2;
    }

    return console.log(suma);
}

