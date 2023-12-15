function squaresSum(n) {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += Math.pow(i, 2); 
    }
    return suma;
}

const resultado = squaresSum(3);
alert(resultado); 
