function ejercicio01(){
    //Crea una función que retorne la suma de dos números.
    function suma(n1,n2){
        return n1 + n2;
    }
    let num1 = parseInt( prompt("Escribe el 1er número"))
    let num2 = parseInt( prompt("Escribe el 2do número"))
    
  alert(`La suma es: ${suma(num1,num2)}`)
    }

function ejercicio02(){
    //Crea una función que retorne la potencia de un número dado, 
    //esta función deberá recibir la potencia y el número a potenciar.
    function potenciaNumero(n,p){
        return n**p;
    }
    
    let num = parseInt( prompt("Escribe un número"))
    let pot = parseInt( prompt("Escribe la potencia"))
    
    alert(`El numero ${num} elevado a la potencia ${pot} es: ${potenciaNumero(num,pot)}`)
    }
    function ejercicio03(){
    //Crea una función que tome números y devuelva la suma de sus cubos. 
    //sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
    function sumaCubos(n1,n2,n3){
        return (n1**3)+(n2**3)+(n3**3)
    }
    let num1 = parseInt( prompt("Escribe el 1er número"))
    let num2 = parseInt( prompt("Escribe el 2do número"))
    let num3 = parseInt( prompt("Escribe el 3er número"))

    alert(`La suma de los cubos de los 3 números es: ${sumaCubos(num1,num2,num3)}`)
    }

    function ejercicio04(){
    //Escribe una función que tome la base y la altura de un triángulo y devuelva su área. 
    //triArea(3, 2) ➞ 3
    function areaTri(b,h){
        return b*h/2;
    }
    let base = parseInt( prompt("Ingrese la base del triangulo"))
    let altura = parseInt( prompt("Ingrese la altura del triangulo"))
 
    alert(`El área de un triangulo es: ${areaTri(base,altura)}`)
    }

    function ejercicio05(){
    //Crea una función llamada calculator que recibe 3 parámetros, 
    //dos números y una operación matemática (+,-,/,x,%), 
    //y si la operación no es correcta que envié un mensaje 
    //“El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4
    function operacion(n1,n2,op){
        switch(op){
            case "+":
                return n1+n2;        
                break;
            case "-":
                return n1-n2;        
                break;
            case "/":
                return n1/n2;        
                break;
            case "x":
                return n1*n2;        
                break;
            case "%":
                return n1%n2;        
                break;
            default:
                alert("El parámetro no es reconocido")
                break;
        }
    }
    let num1 = parseInt( prompt("Escribe el 1er número"))
    let num2 = parseInt( prompt("Escribe el 2do número"))
    let oper = prompt("Escribe el operador matemático: (+,-,/,x,%)")

    alert(`El resultado de ${num1} ${oper} ${num2} = ${operacion(num1,num2,oper)}`)
    }

    //PREGUNTAS:

    //¿Cómo defines una función?

    //Una función es un bloque de código que nos permite utilizarlo tantas veces como querramos 
    //y se compone de la declaración y de la invocaión.
    
    //¿Hasta cuantos argumnetos puedes declarar en una función?

    //Se puede declarar un sin fin de argumentos o parametros.

    function ejercicioR2_01(){
    //Utilizando función arrow, crear una función que reciba como parámetros un nombre, 
    //apellido y edad y los retorne en un string concatenado 
    //“Hola mi nombre es sebastián yabiku y mi edad 33”
    const present = (nombre,apellido,edad)=>{
        return `Hola mi nombre es ${nombre} ${apellido} y mi edad es ${edad}`
    }
    let n = prompt("Escriba su nombre")
    let a = prompt("Escriba su apellido")
    let e = prompt("Escriba su edad")

    if (n.length>0 && a.length>0 && e>0){
    alert(present(n,a,e));
    }else{
    alert(`Datos incorrectos`);
    }
    }
    function ejercicioR2_02(){
    //Cree una función que tome números y devuelva la suma de sus cubos.
    //sumOfCubes(1, 5, 9) ➞ 855
    // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
    function sumOfCubes(n1,n2,n3){
        return (n1**3)+(n2**3)+(n3**3);
    }    
    let num1 = parseInt( prompt("Escribe el 1er número"))
    let num2 = parseInt( prompt("Escribe el 1er número"))
    let num3 = parseInt( prompt("Escribe el 1er número"))

    alert(`La suma de los cubos es ${sumOfCubes(num1,num2,num3)}`)
    }
    function ejercicioR2_03(){
    //Crear una funcion que me retorne el tipo de valor entregado, 
    //invocar la función para los distintos tipos de js
    function TipoValor( v1,v2,v3,v4,v5,v6){
        return typeof v1;
        return typeof v2;
        return typeof v3;
        return typeof v4;
        return typeof v5;
        return typeof v6;
      };
      let dato1 = "Gustavo";
      let dato2 = 33;
      let dato3 = true;
      let dato4 = null;
      let dato5;
      let dato6 = {
        name: "Aldo",
        lastname: "Chacón"
      };
    alert(`El tipo de valor de "${dato1}" es ${TipoValor(dato1)}`);
    alert(`El tipo de valor de "${dato2}" es ${TipoValor(dato2)}`);
    alert(`El tipo de valor de "${dato3}" es ${TipoValor(dato3)}`);
    alert(`El tipo de valor de "${dato3}" es ${TipoValor(dato4)}`);
    alert(`El tipo de valor de "${dato5}" es ${TipoValor(dato5)}`);
    alert(`El tipo de valor de "${dato6}" es ${TipoValor(dato6)}`);
    }
    function ejercicioR2_04(){
    //Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)
    const sumarArgumentos = (...args)=>{
        return args.reduce((suma,arg)=>suma+arg,0)
        }
        alert(sumarArgumentos(1,2,3,4,5))
    }
    function ejercicioR2_05(){
    //Crear una función que reciba un array de valores y filtre los valores que no son string
    const miArray = [1,2,3,`Juan`,`Pedro`,`cuatro`,`5`]
    const filtrarArray = (array) =>{
    return array.filter((value)=>typeof value === "string")
 }
 alert(filtrarArray(miArray))
    }
    function ejercicioR2_06(){
    //Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, 
    //en ese orden.
    //minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
    let numero3=[1,2,3,4,5];

    alert(`El valor minimo de la matriz es ${Math.min(...numero3)}`);
    alert(`El valor Maximo de la matriz es ${Math.max(...numero3)}`);

    }
    function ejercicioR2_07(){
    //Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y 
    //devuelva una cadena en forma de un número de teléfono.
    //formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"
    const formatearNumero = (numeros) =>{
        return`(${numeros.slice(0,3).join("")}) ${numeros.slice(3,6).join("")}-${numeros.slice(6).join("")}`
    }
    let phone=(prompt("Ingrese 10 numeros del 0 al 9"));
    console.log(phone);
    alert(formatearNumero(phone.split('')));
    }
    function ejercicioR2_08(){
    //Cree una función que tome una matriz de matrices con números. 
    //Devuelve una nueva matriz (única) con el mayor número de cada uno.
    //findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]
    function matrizMayor(a1,a2,a3){
        m1 = Math.max(...a1);
        m2 = Math.max(...a2);
        m3 = Math.max(...a3);
        let mT = [m1,m2,m3]
        return mT;
    }
        
        let arr1=[];
        let arr2=[];
        let arr3=[];
    
        for(i=0;i<4;i++){
        arr1[i]=prompt(`Ingrese el elemento ${i} de la matriz 1`);
    }
        for(i=0;i<4;i++){
        arr2[i]=prompt(`Ingrese el elemento ${i} de la matriz 2`);
    }
        for(i=0;i<4;i++){
        arr3[i]=prompt(`Ingrese el elemento ${i} de la matriz 3`);
    }
        alert(`La matriz con los numeros mayores es [${matrizMayor(arr1,arr2,arr3)}]`);
    }
    function ejercicioR2_09(){
    //Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
    
    //charIndex("hello", "l") ➞ [2, 3]
    // The first "l" has index 2, the last "l" has index 3.
    //charIndex("circumlocution", "c") ➞ [0, 8]
    // The first "c" has index 0, the last "c" has index 8.
    function primerUltimo(palabra){
        const array = palabra.split('');
        return "El primer es "+ array[0]+" y el ultimo "+array[array.length-1];
    }
    pal=prompt("Ingrese una palabra");
    alert(primerUltimo(pal));
    }
    function ejercicioR2_10(){
    //Escriba una función que convierta un objeto en una matriz, 
    //donde cada elemento representa un par clave-valor.
    //toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
    const obj1={
        a:1,
        b:2
        }
        
        const toArray = (object) => Object.entries(object)
        
        console.log(toArray(obj1));
    }
    function ejercicioR2_11(){
    //Cree la función que toma una matriz con objetos y 
    //devuelve la suma de los presupuestos de las personas.

    //getBudgets([
    //{ name: "John", age: 21, budget: 23000 },
    //{ name: "Steve",  age: 32, budget: 40000 },
    //{ name: "Martin",  age: 16, budget: 2700 }
    //]) ➞ 65700
    function presupuesto(a){
        return a[0].budget+a[1].budget+a[2].budget
        }
          
        let arr = [{
                name:"John",
                age:21,
                budget:23000},{
                name:"Steve",
                age:32,
                budget:40000},{
                name:"Martin",
                age:16,
                budget:2700}]
        alert(`La suma de los presupuestos es ${presupuesto(arr)}`);
    }
    function ejercicioR2_12(){
    //Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.
    //getStudentNames([
    //{ name: "Steve" },
    //{ name: "Mike" },
    //{ name: "John" }
    //]) ➞ ["Becky", "John", "Steve"]
    const students =[
        {name: "Steve"},
        {name: "Mike"},
        {name: "John"}
        ]
        alert(students.map((student,index)=>{return student.name}))
    }
    function ejercicioR2_13(){
    //Escriba una función que convierta un objeto en una matriz de claves y valores.
    //objectToArray({
    //likes: 2,
    //dislikes: 3,
    //followers: 10
    //}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]
    const obj1={
        likes: 2,
        dislikes: 3,
        followers: 10
        }
        const toArray = (object) => Object.entries(object)
        
        console.log(toArray(obj1));
    }
    function ejercicioR2_14(){
    //Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.
    //squaresSum(3) ➞ 14
    // 1² + 2² + 3² =
    // 1 + 4 + 9 =
    // 14
    function sumaCuadrados(n){
        let sumaC=0;
        for(i=1;i<=n;i++){
            sumaC+=Math.pow(i,2);
            }
            return sumaC;
    }
   
    n=parseInt(prompt("Ingrese un numero"))
    alert(sumaCuadrados(n));
    }
    function ejercicioR2_15(){
    //Cree una función para multiplicar todos los valores en una matriz 
    //por la cantidad de valores en la matriz dada
    //multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]
    const multiplicarLength = (arr) =>{
        return arr.map(element => element * arr.length)
    }
    alert(multiplicarLength([2,3,1,0]));

    }
    function ejercicioR2_16(){
    //Cree una función que tome un número como argumento y 
    //devuelva una matriz de números contando desde este número a cero.
    //countdown(5) ➞ [5, 4, 3, 2, 1, 0]
    const contarArray = (number) =>{
        return Array.from({length: number+1},(_,i)=>number-i)
        }
        console.log(contarArray(4))
    }
    function ejercicioR2_17(){
    //Cree una función que tome una matriz y devuelva la diferencia entre 
    //los números más grandes y más pequeños.
    //diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
    // Smallest number is -50, biggest is 32.
    const diferenciaMayorMenor = (array) =>{
        const maximo = Math.max(...array)
        const minimo = Math.min(...array)

        const diferencia = Math.max(...array) - Math.min(...array)

        return `el valor maximo es ${maximo}, minimo es: ${minimo} y la diferencia es: ${diferencia}`;
    }
        alert((diferenciaMayorMenor([10,4,1,4,-10,-50,32,21])));
    }
    function ejercicioR2_18(){
    //Cree una función que filtre las cadenas de una matriz y 
    //devuelva una nueva matriz que solo contenga enteros.
    //filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]
    const res = []
    const array = [1,2,3,`x`,`y`,10]

    array.forEach(e=>{
        if(!isNaN(e)){
            res.push(e);
        };
    });
    const filterNumbers = (arr) => arr.filter(value => typeof value === `number`)
    alert((filterNumbers(array)));
    }
    function ejercicioR2_19(){
    //Cree una función que tome dos argumentos (elemento, tiempos). 
    //El primer argumento (elemento) es el elemento que necesita repetirse, 
    //mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento. 
    //Devuelve el resultado en una matriz.
    //repeat(13, 5) ➞ [13, 13, 13, 13, 13]
    const matrizD = (e,v)=>{
        return Array.from({length: v}, () => e)
    }
    let elem = parseInt(prompt("Ingrese un numero elemento"));
    let veces = parseInt(prompt("Ingrese un numero de veces"));
    alert(`[${matrizD(elem,veces)}]`);
    }
    function ejercicioR2_20(){
    //Escriba una función, .vreplace () que extienda el prototipo de cadena 
    //reemplazando todas las vocales en una cadena con una vocal especificada.
    //"apples and bananas".vreplace("u") ➞ "upplus und bununus"
    
    String.prototype.vreplace = function (vocalNueva){
        return this.replace(/[aeiou]/gi,vocalNueva)
    }
    const result = "apples and bananas".vreplace("u");

    alert(result);
    }
    function ejercicioR2_21(){
    //Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta: 
    //"¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".
    //findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"
    const cadena = `I am finding Nemo !`;

    const encontarNemo = (cadenaTexto) =>{
        const ArrayPalabras = cadenaTexto.split('')
      
        const posicionNemo = ArrayPalabras.indexOf('Nemo')
        return posicionNemo + 1;
        
    }
    alert(`Encontre a nemo en la posicion ${encontarNemo(cadena)}`);
    }
    function ejercicioR2_22(){
    //Cree una función que capitalice la última letra de cada palabra.
    //capLast("hello") ➞ "hellO"
    const capLast = (word) =>{
        return word.split().map(letter=>letter.slice(0,-1)+letter.slice(-1).toUpperCase()).join(``);
        
    }
    alert(capLast("hola"));
    }
    