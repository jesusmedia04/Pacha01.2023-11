function ejercicio01(){
    //Hacer un algoritmo en JavaScript que lea un número por el teclado y 
    //determinar si tiene tres dígitos.
    let numero = parseInt( prompt("Escribe un numero"))
    if(numero>99 && numero< 999){
        alert("Este numero tiene 3 digitos")
    }
    else{
        alert("Este numero no tiene 3 digitos")
    }
    }

function ejercicio02(){
    //Hacer un algoritmo en JavaScript que lea un número por el teclado y 
    //determinar si es negativo.
    let numero = parseInt( prompt("Escribe un numero"))
    if(numero<0){
        alert("Este numero es negativo")
    }
    else{
        alert("Este numero no es negativo")
    }
    }

function ejercicio03(){
    //Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.
    let num = parseInt(prompt("Escribe un numero"))
    let term

    term = num - Math.trunc(num/10)*10;
    if(term === 4 || term === -4){
        alert("El numero termina en 4")
    }
    else{
        alert("El numero no termina en 4")
    }
}

function ejercicio04(){
    //Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor.
    let num1 = parseInt(prompt("Escribe el 1er numero"))
    let num2 = parseInt(prompt("Escribe el 2do numero"))
    let num3 = parseInt(prompt("Escribe el 3er numero"))
    let auxi
    do{
        if(num1>num2){
            auxi = num1;
            num1 = num2;
            num2 = auxi;
        }
        if(num2>num3){
            auxi = num2;
            num2 = num3;
            num3 = auxi;
        }
    }
    while (num1 > num2 && num2 > num3)
    
    alert("El 1er numero: "+num1)
    alert(`El 2do numero: ${num2}`)
    alert(`El 3er numero: ${num3}`)
}

function ejercicio05(){
    //Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una promoción de descuento 
    //para vender al mayor, esta dependerá del número de zapatos que se compren. Si son más de diez, 
    //se les dará un 10% de descuento sobre el total de la compra; 
    //si el número de zapatos es mayor de veinte pero menor de treinta, 
    //se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. 
    //El precio de cada zapato es de $80.
    let cantZap = parseInt(prompt("Ingrese cuantos zapatos desear comprar:"))
    subTot = cantZap*80;
    let desc = 0;
    if(cantZap>10 && cantZap<=20){
        desc = subTot*0.1; 
    }
    if(cantZap>20 && cantZap<=30){
        desc = subTot*0.2;
    }
    if(cantZap>30){
        desc = subTot*0.4;
    }
    let total = subTot-desc;
    alert("Precio subtotal:" + subTot)
    alert(`El descuento es: ${desc}`)
    alert("Precio final: "+total)
}

function ejercicio06(){
    //Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber cuál será su sueldo semanal, 
    //se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas 
    //entonces las horas extras se le pagarán a $25 por hora.
    let horas = parseInt(prompt("Ingrese las horas de trabajo"))
    let pago
    let horaExt

    if(horas>40){
        horaExt = horas - 40
        pago = 800 + horaExt*25
    }
    else{
        pago = horas*20
    }
    alert(`El pago mensual es: ${pago}`)
}

function ejercicio07(){
    //Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento por compra 
    //a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, 
    //tipo A, tipo B y tipo C. Los descuentos son los siguientes:

    //Tipo A 10% de descuento
    //Tipo B 15% de descuento
    //Tipo C 20% de descuento
    let precio = parseFloat(prompt("Ingrese el precio del helado: "));
    let tipo = prompt("Indique el tipo membresia: A,B o C");
    let nTipo = tipo.toUpperCase();
    switch(nTipo){
     case "A":
        desc = (precio*10)/100;
        precio = precio - desc;
        break;
     case "B":
        desc = (precio*15)/100;
        precio = precio - desc;
        break;
    case "C":
        desc = (precio*20)/100;
        precio = precio - desc;
        break;
    default:
        alert("Tipo de membresia incorrecta");
        break;
    }
    alert("El precio del helado es: "+precio);
}

function ejercicio08(){
    //Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si 
    //el estudiante aprobó o no.
    let nota1 = parseFloat(prompt("Ingrese 1er nota: "));
    let nota2 = parseFloat(prompt("Ingrese 2da nota: "));
    let nota3 = parseFloat(prompt("Ingrese 3ra nota: "));
    let prom = (nota1 + nota2 + nota3)/3;

    if(prom >= 11){
        alert("El estudiante aprobó")
    }
    else
        alert("El estudiante no aprobó")
}

function ejercicio09(){
    //Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, 
    //se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, 
    //si generaba menos de $2000 su aumento será de un 10%.
    let sueldo = parseFloat(prompt("Ingrese el sueldo que ganaba"))
    let incremento;
    if(sueldo > 2000){
        incremento = sueldo*0.05;
    }
    if(sueldo<=2000){
        incremento = sueldo*0.1;
    }
    let nuevoSueldo = sueldo + incremento;

    alert("Incremento en el sueldo: "+incremento)
    alert(`Sueldo actualizado ${nuevoSueldo}`)
}

function ejercicio10(){
    //Hacer un algoritmo en JavaScript que diga si un número es par o impar.
    let num = parseInt(prompt("Ingresa un numero entero: "))

    if(Math.trunc(num/2)===num/2){
        alert("El numero ingresado es par")
    }
    else{
        alert("El numero ingresado es impar")
    }
        
}

function ejercicio11(){
    //Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.
    let num1 = parseInt(prompt("Ingrese el 1er numero: "))
    let num2 = parseInt(prompt("Ingrese el 2do numero: "))
    let num3 = parseInt(prompt("Ingrese el 3er numero: "))
    let mayorcito = num1;

    if(mayorcito<num2){
        mayorcito = num2
    }
    if(mayorcito<num3){
        mayorcito = num3
    }
    alert("El numero mayor es: "+mayorcito)
}

function ejercicio12(){
    //Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.
    let num1 = parseInt(prompt("Ingrese el 1er numero: "))
    let num2 = parseInt(prompt("Ingrese el 2do numero: "))
    let mayorcito = num1;

    if(mayorcito<num2){
        mayorcito = num2
    }
    alert("El numero mayor es: "+mayorcito)
}

function ejercicio13(){
    //Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.
    let Letra = prompt("Ingrese una letra: ")
    let nLetra = Letra.toUpperCase();

    switch(nLetra){
        case "A": alert(nLetra+" es una vocal")
        break;
        case "E": alert(nLetra+" es una vocal")
        break;
        case "I": alert(nLetra+" es una vocal")
        break;
        case "O": alert(nLetra+" es una vocal")
        break;
        case "U": alert(nLetra+" es una vocal")
        break;
        default: alert("La letra ingresada no es una vocal")
    }
}

function ejercicio14(){
    //Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez y al 9 y 
    //determine si es un número primo.
    let num = parseInt(prompt("Ingrese un numero del 1 al 10"))

    while(num < "1" || num > "10"){
    num = parseInt(prompt("Ingrese un numero del 1 al 10"))
    }
    let contar = 0;
    
    for(let i=2;i<=num;i++){
        if(num%i==0){
            contar+=1;
        }
    }
    if(contar==1){
        alert("El "+num+" es un numero primo")
    }
    else{
        alert("El "+num+" no es un numero primo")
    }
}

function ejercicio15(){
    //Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos.
    let cent = parseFloat(prompt("Ingresa el valor en centimetros: "))
    let pulg = cent/2.54;

    alert("El valor convertido de centimetros a pulgadas es :"+pulg)

    let lib = parseFloat(prompt("Ingrese el valor en libras: "))
    let kil = lib*0.45359237;

    alert("El valor convertido de libras a kilogramos es: "+kil)
}

function ejercicio16(){
    //Hacer un algoritmo en JavaScript que lea un número y según ese número, indique el día que corresponde.
    let numDia = parseInt(prompt("Ingrese un numero del 1 al 7: "))

    switch(numDia){
        case 1:
            alert("Lunes")
            break;
        case 2:
            alert("Martes")
            break;
        case 3:
            alert("Miercoles")
            break;
        case 4:
            alert("Jueves")
            break;
        case 5:
            alert("Viernes")
            break;
        case 6:
            alert("Sabado")
            break;
        case 7:
            alert("Domingo")
            break;
        default:
            alert("Numero no válido")
            break;
    }
}

function ejercicio17(){
    //Hacer un algoritmo en JavaScript donde se ingrese una hora y nos calcule la hora dentro de un segundo.
    let hora = parseInt(prompt("Ingrese la hora: "))
    let min = parseInt(prompt("Ingrese el minuto: "))
    let seg = parseInt(prompt("Ingrese el suegundo: "))

    seg += 1;

    if(seg>=60){
        seg=0
        min+=1
    }
    if(min>=60){
        min=0
        hora+=1
    }
    if(hora>=24){
        hora=hora-24
    }

    alert("La hora despues de un segundo es: "+hora+" : "+min+" : "+seg)
}

function ejercicio18(){
    //Hacer un algoritmo en JavaScript para una empresa se encarga de la venta y distribución de CD vírgenes. 
    //Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) 
    //por cantidad. Los precios son:

    //$10. Si se compran unidades separadas hasta 9.
    //$8. Si se compran entre 10 unidades hasta 99.
    //$7. Entre 100 y 499 unidades.
    //$6. Para mas de 500 unidades.

    //La ganancia para el vendedor es de 8,25 % de la venta. 
    //Realizar un algoritmo en JavaScript que dado un número de CDs a vender calcule 
    //el precio total para el cliente y la ganancia para el vendedor.
    let cantCd = parseInt(prompt("Ingrese la cantidad de CDs a vender: "))
    let preUnit, preTotal, ganVend

    while(cantCd<1){
        cantCd = parseInt(prompt("Ingrese la cantidad de CDs a vender: "))
    }

    if(cantCd<=9){
        preUnit=10
    }
    else if(cantCd<=99){
        preUnit=8
    }
    else{
        preUnit=6
    }

    preTotal=cantCd*preUnit
    ganVend=0.0825*preTotal

    alert("Precio total para el cliente: $ "+preTotal)
    alert("Ganancia para el vendedor: $ "+ganVend)
}

function ejercicio19(){
    //Hacer un algoritmo en JavaScript para una heladería se tienen 4 tipos de empleados 
    //ordenados de la siguiente forma con su número identificador y salario diario correspondiente:

    //Cajero (56$/día).

    //Servidor (64$/día).

    //Preparador de mezclas (80$/día).

    //Mantenimiento (48$/día).

    //El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros 
    //que representen al número identificador del empleado y la cantidad de días que trabajó en la semana 
    //(6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que 
    //el dueño le debe pagar al empleado que ingresó
    let idEmple = parseInt(prompt("Ingrese el número identificador del empleado (1: Cajero, 2: Servidor, 3: Preparador de mezclas, 4: Mantenimiento):"))
    let diaTrabaj = parseInt(prompt("Ingrese la cantidad de días trabajados (1 a 6):"))
    let salDiario, totPago

    switch(idEmple){
        case 1: salDiario=56
        break;
        case 2: salDiario=64
        break;
        case 3: salDiario=80
        break;
        case 4: salDiario=48
        default: alert("Numero de empleado no válido")
    }

        totPago=salDiario*diaTrabaj

        if(idEmple>=1 && idEmple<=4){
            alert("El empleado con identificador "+idEmple+" debe recibir $ "+totPago+" por "+diaTrabaj+" días trabajados")
        }
}

function ejercicio20(){
    //Hacer un algoritmo en JavaScript que que lea 4 números enteros positivos y verifique y 
    //realice las siguientes operaciones:

    //¿Cuántos números son Pares?

    //¿Cuál es el mayor de todos?

    //Si el tercero es par, calcular el cuadrado del segundo.

    //Si el primero es menor que el cuarto, calcular la media de los 4 números.

    //Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre 
    //los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.
    let num1 = parseInt(prompt("Ingrese el 1er número"))
    let num2 = parseInt(prompt("Ingrese el 2do número"))
    let num3 = parseInt(prompt("Ingrese el 3er número"))
    let num4 = parseInt(prompt("Ingrese el 4to número"))
    let contPares=0

    if(num1%2==0){
        contPares+=1
    }
    if(num2%2==0){
        contPares+=1
    }
    if(num3%2==0){
        contPares+=1
    }
    if(num4%2==0){
        contPares+=1
    }

    alert("Contidad de números pares: "+contPares)

    let mayorcito=num1

    if(num2>mayorcito){
        mayorcito=num2
    }
    if(num3>mayorcito){
        mayorcito=num3
    }
    if(num4>mayorcito){
        mayorcito=num4
    }
    alert("El mayor de todos es: "+mayorcito)

    if(num3%2==0){
        alert("El cuadrado del segundo numero es: "+Math.pow(num2,2))
    }

    if(num1<num4){
        let media = (num1+num2+num3+num4)/4

        alert("La media de los 4 números es: "+media)
    }

    if(num2>num3){
        if(num3>=50 && num3<=700){
            let sum = num1+num2+num3+num4
        alert("La suma de los 4 números es: "+sum)
        }
    }
}

function ejercicio21(){
    //Hacer un algoritmo en JavaScript que permita calcular el factorial de un número.
    let num = parseInt(prompt("Ingrese un número para calcular su factorial:"))
    let fact = 1, i

    for(i=1;i<=num;i++){
        fact=fact*i
    }
    alert("El factorial de "+num+" es: "+fact)
}

function ejercicio22(){
    //Hacer un algoritmo en JavaScript para calcular la suma de los n primeros números.
    let n = parseInt(prompt("Ingrese un número entero positivo para calcular la suma de los primeros n números:"))
    let sum = 0, i

    for(i=1;i<=n;i++){
        sum=sum+i
    }
    alert("La suma de los primeros "+n+" números es "+sum)
}

function ejercicio23(){
    //Hacer un algoritmo en JavaScript para calcular la suma de los números impares menores o iguales a n.
    let n = parseInt(prompt("Ingrese un número entero positivo para calcular la suma de los impares menores o iguales a n:"))
    let sum = 0, i

    for(i=1;i<=n;i+=2){
        sum=sum+i
    }
    alert("La suma de los impares menores o iguales a "+n+" es: "+sum)
}

function ejercicio24(){
    //Hacer un algoritmo en JavaScript para realizar la suma de todos los números pares hasta el 1000.
    let sum=0, I

    for(i=2;i<=1000;i+=2){
        sum=sum+i
    }
    alert("La suma de los números pares hasta 1000 es: "+sum)
}

function ejercicio25(){
    //Hacer un algoritmo en JavaScript para calcular el factorial de un número de una forma distinta.
    let num = parseInt(prompt("Ingrese un número para calcular su factorial:"))
    let fact=1,i=1

    while(i<=num){
        fact=fact*i
        i++
    }

    alert("El factorial de "+num+" es "+fact)
}

function ejercicio26(){
    //Hacer un algoritmo en JavaScript para calcular el resto y cociente por medio de restas sucesivas.
    let dividendo = parseInt(prompt("Ingrese el dividendo:"))
    let divisor = parseInt(prompt("Ingrese el divisor:"))
    let resto, cociente

    if(divisor==0){
    alert("Error: No se puede dividir por cero.")
    }
    else{
    cociente=0
    resto=dividendo
    }
    while(resto>=divisor){
        resto=resto-divisor
        cociente++
    }
    alert("Cociente: "+cociente)
    alert("Resto: "+resto)
}

function ejercicio27(){
    //Hacer un algoritmo en JavaScript para determinar la media de una lista indefinida de números positivos, 
    //se debe acabar el programa al ingresar un número negativo.
    let suma=0,contador=0
    let num = parseInt(prompt("Ingrese un número positivo"))
    while(num>=0){
        suma=suma+num
        contador++
        num = parseInt(prompt("Ingrese un número positivo"))
    }
    if(contador>0){
        alert("La media de los números positivos es: "+suma/contador)
    }
    else{
        alert("No se ingresaron números positivos")
    }
}

function ejercicio28(){
    //Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números 
    //con un ciclo repetir.
    let suma=0, contador=1

    do{
        suma=suma+contador
        contador++
    }
    while(contador<=100)

    alert("La suma de los primeros cien números es: "+suma)
}

function ejercicio29(){
    //Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números 
    //con un ciclo mientras.
    let suma=0, contador=1

    while(contador<=100){
        suma=suma+contador
        contador++
    }
    alert("La suma de los primeros cien números es: "+suma)
}

function ejercicio30(){
    //Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números 
    //con un ciclo para.
    let num=100, suma=0, i

    for(i=1;i<=num;i++){
        suma=suma+i
    }
    alert("La suma de los primeros cien números es: "+suma)
}

function ejercicio31(){
    //Hacer un algoritmo en JavaScript parar calcular la media de los números pares e impares, 
    //sólo se ingresará diez números.
    let sumaPares=0, sumaImpares=0, contadorPares=0, contadorImpares=0, mediaPares, mediaImpares, i, num

    for(i=1;i<=10;i++){
        num = parseInt(prompt("Ingrese un número:"))

        if(num%2==0){
            sumaPares=sumaPares+num
            contadorPares=contadorPares+1
        }
        else{
            sumaImpares=sumaImpares+num
            contadorImpares=contadorImpares+1
        }
    }
    if(contadorPares>0){
        mediaPares=(sumaPares/contadorPares)
        alert("La media de los números pares es: "+mediaPares)
    }
    if(contadorImpares>0){
        mediaImpares=(sumaImpares/contadorImpares)
        alert("La media de los números impares es: "+mediaImpares)
    }
}

function ejercicio32(){
    //Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y 
    //once ciudades, hacer un algoritmo en JavaScript que nos permita saber eso. (NO HAY DATOS SUFICIENTES)
}

function ejercicio33(){
    //Hacer un algoritmo en JavaScript que permita al usuario continuar con el programa.
    let eleccion, nEleccion
        do{
        eleccion = prompt("Desea continuar con el programa (S/N):")
        nEleccion = eleccion.toUpperCase()
        }
        while(nEleccion!=="N")
}

function ejercicio34(){
    //Hacer un algoritmo en JavaScript que imprima la tabla de multiplicar de los números del uno nueve.
    let i,j
    for(i=1;i<=9;i++){
        for(j=1;j<=10;j++){
            alert(i+" x "+j+" = "+i*j)
        }
    }
}

function ejercicio35(){
    //Hacer un algoritmo en JavaScript que nos permita saber cuál es el número mayor y menor, 
    //se debe ingresar sólo veinte números.
    let mayorcito=-9999, menorcito=9999, i, num
    for(i=1;i<=20;i++){
    num = parseInt(prompt("Ingrese el número: "+i))

    if(num>mayorcito){
        mayorcito=num
    }
    if(num<menorcito){
        menorcito=num
    }
    }
    alert("El menor es: "+menorcito)
    alert("El mayor es: "+mayorcito)
}

function ejercicio36(){
    //Hacer un algoritmo en JavaScript para calcular la serie de Fibonacci.
    let a=0, b=1, c
    let terminos = parseInt(prompt("Ingrese la cantidad de terminos:"))

    alert("La serie de Fibonacci para "+terminos+" terminos")

    for(i=1; i<=terminos;i++){
        alert(a)
        c=a+b
        a=b
        b=c
    }
}

function ejercicio37(){
    //Hacer un algoritmo en JavaScript para conseguir el M.C.D de un número por medio 
    //del algoritmo de Euclides.
    let a,b,resto,mcd
    let num1 = parseInt(prompt("Ingrese el 1er número:"))
    a=num1
    let num2 = parseInt(prompt("Ingrese el 2do número:"))
    b=num2
    while(num2!==0){
        resto=num1%num2

        num1=num2
    
        num2=resto
   
    }
    mcd=num1
    alert("El M.C.D de "+a+" y "+b+" es "+mcd)
}

function ejercicio38(){
    //Hacer un algoritmo en JavaScript que nos permita saber si un número es un número perfecto.
    let num = parseInt(prompt("Ingrese un númeo:"))
    let suma = 0,i

    for(i=1;i<num;i++){
        if(num%i==0){
            suma=suma+i
        }
    }
    if(suma==num){
        alert("El número "+num+" si es perfecto")
    }
    else{
        alert("El número "+num+" no es perfecto")
    }
}

function ejercicio39(){
    //Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con 
    //la serie de Gregory-Leibniz. La formula que se debe aplicar es:

    //Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...
    let constante=4, divisor=1,numPi=0
    let num = parseInt(prompt("Ingrese un número"))

    for(i=1;i<=num;i++){
        alert("Pi = "+constante+"/"+divisor)
        if(i%2!==0){
            numPi=numPi+(constante/divisor)
        }
        else{
            numPi=numPi-(constante/divisor)
        }
        divisor=divisor+2
    }
    alert("El resultado es: "+numPi)
}

function ejercicio40(){
    //Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con 
    //la serie de Nilakantha. La formula que se debe aplicar es:

    //Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...
    let constante=4,divisor=2,numPi=3,divInicial=2
    let num = parseInt(prompt("Ingrese un número"))
    
    for(i=1;i<=num;i++){
        divisor=divInicial*(divInicial+1)*(divInicial+2)

        alert("pi = "+constante+"/"+divisor)

        if(i%2!==0){
            numPi=numPi+(constante/divisor)
        }
        else{
            numPi=numPi-(constante/divisor)
        }
        divInicial=divInicial+2
    }
    alert("El resultado es: "+numPi)
}
