//---------------FUNCIONES RETO 1-----------------------------
function sumar(num1,num2) {
    return num1+num2
}
function potencia(exponente,base) {
    return Math.pow(base,exponente)
}
function sumOfCubes(n1,n2,n3) {
    return potencia(3,n1) + potencia(3,n2) + potencia(3,n3)
}
function triArea(b,h) {
    return b*h/2
}
function calculator(n1,op,n2) {
    resultado = 0
    switch (op){
        case "+": resultado=n1+n2; break;
        case "-": resultado=n1-n2; break;
        case "/": resultado=n1/n2; break;
        case "x": resultado=n1*n2; break;
        case "%": resultado=n1%n2; break;
    }
    return resultado;
}
//------------------------------------------------------------
function ejercicio01(){
    try {
        num1 = parseInt(document.getElementById('ej1num1').value)
        num2 = parseInt(document.getElementById('ej1num2').value)
        if (isNaN(num1) || isNaN(num2)) throw new Error("No se aceptan Nan")
        alert(`La suma de los números ${num1} y ${num2} es ${sumar(num1,num2)}`)
        document.getElementById('ej1num1').value = ""
        document.getElementById('ej1num2').value = ""
    } catch (error) {
        alert(`Error: ${error.message}`)
    }
}

function ejercicio02(){
    try {
        pot = parseInt(document.getElementById('ej2num1').value)
        bas = parseInt(document.getElementById('ej2num2').value)
        if (isNaN(pot) || isNaN(bas)) throw new Error("No se aceptan Nan")
        alert(`El resultado de ${bas}^${pot} es ${potencia(pot,bas)}`)
        document.getElementById('ej2num1').value = ""
        document.getElementById('ej2num2').value = 1
    } catch (error) {
        alert(`Error: ${error.message}`)
    }
}
function ejercicio03(){
    try {
        count = 0
        numeros = []
        while (count < 3){
            let n = parseInt(prompt(`Ingrese el N°${count+1}`))
            if(!isNaN(n)){
                count++
                numeros.push(n)
            }
            else{
                alert("No se aceptan Nan")
            }
        }
        alert(`La suma de los cubos de ${numeros[0]}, ${numeros[1]}, ${numeros[2]} es ${sumOfCubes(...numeros)}`)
    } catch (error) {
        alert(`Error: ${error.message}`)
    }
}

function ejercicio04(){
    try {
        alt = parseInt(document.getElementById('ej4num1').value)
        bas = parseInt(document.getElementById('ej4num2').value)
        if (isNaN(alt) || isNaN(bas) || alt===0 || bas === 0) throw new Error("No se aceptan Nan")
        alert(`El área del triangulo de base ${bas}u y ${alt}u de alto es ${triArea(bas,alt)}u^2`)
        document.getElementById('ej4num1').value = ""
        document.getElementById('ej4num2').value = ""
    } catch (error) {
        alert(`Error: ${error.message}`)
    }
}
function ejercicio05(){
    try {
        count = 0
        valores = []
        while (count < 2){
            let n = parseInt(prompt(`Ingrese el N°${count+1}`))
            if(!isNaN(n)){
                count++
                valores.push(n)
            }
            else{
                alert("No se aceptan Nulos")
            }
        }
        let operadores = "+-/x%"
        let operando = "_"
        while (!operadores.includes(operando)){
            operando = prompt("Ingrese un operador (+,-,/,x,%):")
        }

        alert(`El resultado de ${valores[0]} ${operando} ${valores[1]} es ${calculator(valores[0],operando,valores[1])}`)
    } catch (error) {
        alert(`Error: ${error.message}`)
    }
}