function ejercicio01() {
    const saludar = (nombre, apellido, edad) => {
        return `Hola mi nombre es ${nombre} ${apellido} y mi edad ${edad}`;
      };
    let nom = ""
    let ape = ""
    let ed = 0
    while (nom.length===0){
        nom = prompt("Ingrese el nombre:");
        if (nom.length>0){
            while (ape.length===0){
                ape = prompt("Ingrese el apellido:");
                if (ape.length>0){
                    while (ed<=0){
                        ed = parseInt(prompt("Ingrese la edad:"));
                    }   
                }
            }    
        }
    };
    alert(`${saludar(nom,ape,ed)}`) ;
}
function ejercicio02() {
    const sumOfCubes = (n1,n2,n3) =>{
        return Math.pow(n1,3) + Math.pow(n2,3) + Math.pow(n3,3);
    }
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
}
function ejercicio03() {
    const obtenerTipo = (valor) => {
        return typeof valor;
      };
    let input = "Hola";
    alert(`El tipo de valor de "${input}" es ${obtenerTipo(input)}`);
    input = 23;
    alert(`El tipo de valor de "${input}" es ${obtenerTipo(input)}`);
    input = 23.5;
    alert(`El tipo de valor de "${input}" es ${obtenerTipo(input)}`);
    input = true;
    alert(`El tipo de valor de "${input}" es ${obtenerTipo(input)}`);
    input = null;
    alert(`El tipo de valor de "${input}" es ${obtenerTipo(input)}`);
    input = {};
    alert(`El tipo de valor de "${input}" es ${obtenerTipo(input)}`);
    input = [1,2,3,4];
    alert(`El tipo de valor de "${input}" es ${obtenerTipo(input)}`);
}
function ejercicio04() {
    const sumar = (...args) => {
        return args.reduce((total, valor) => total + valor, 0);
      };
    let numeros = [];
    let n = 0;
    let count = 0;
    while (n>=0){
        n = parseFloat(prompt(`Ingrese el N°${count+1}:`));
        if(n>=0){
            count++;
            numeros.push(n);
        }
    }
    alert(`La suma de los ${count} número(s) es ${sumar(...numeros)}`)
}

function ejercicio05() {
    const filtrar = (args) => {
        let countNoString = 0;

        args.forEach(element => {
            if (typeof(element) !== "string") {countNoString++;}            
        });

        return countNoString;
      };
    let array = [1,2,"3",{"id":1,"nombre":"Mirko"},null,"Hola"];
    alert(`En el array [${array}] hay ${filtrar(array)} elementos no String`)
}

function ejercicio06() {
    const minMax = (args) => {
        let nMax = args[0];
        let nMin = args[0];
        for(let i=0;i<args.length;i++){
            if(args[i]>nMax){
                nMax = args[i];
            }else{
                nMin = args[i];
            }
        }
        return [nMin,nMax];
      };
    let array = [1,2,3,4,5,6,7,8,9,10];
    alert(`En el array [${array}] el máximo y el mínimo son [${minMax(array)}]`);
}

function ejercicio07() {
    const formatPhoneNumber = (...args) => {
        let phone = "(";
        for (let i = 0; i < args.length; i++) {
            phone += args[i];
            if(i===2){
                phone+=")";
            }
            else if(i===5){
                phone += "-"
            }
        }
        return phone;
      };
    let array = [];
    let count = 0;
    let n = 0;
    while(count<10 || n<0){
        n = parseInt(prompt(`Ingrese el N°${count+1}:`));
        if(n<10  && n>=0){
            array.push(n);
            count++;
        }
    }

    alert(`Con los números ${array}  se retorna el número telefonico ${formatPhoneNumber(...array)}`);
}

function ejercicio08() {
    const findLargestNums = (...args) => {
        const findLargestNum = (...args)=>{
            let nMax = args[0];
            for(let i=0;i<args.length;i++){
                if(args[i]>nMax){
                    nMax = args[i];
                }
            }
            return nMax;  
        }
        let res = [];
        for (let i = 0; i < args.length; i++) {
            res.push(findLargestNum(...args[i]));  
        }
        return res;
      };
    let n = 0;
    let count = 0;
    let countArrays = 0;
    let arrays = [];
    let currentArray = [];
    while(true){
        n = prompt(`Ingresa el N°${count+1}, para el array N°${countArrays+1}\nArray actual:[${currentArray}] \nArray de arrays:[${arrays}] \n(para detener el programa escriba 'stop', para un nuevo array ingrese un negativo):`);
        if(!isNaN(n)&&n>=0){
            currentArray.push(n);
            count++;
        }
        else if(!isNaN(n)&&n<0){
            arrays.push(currentArray);
            count = 0;
            currentArray = [];
            countArrays++;
        }
        else if(n.toString().toLowerCase() === "stop"){
            console.log(arrays);
            alert(`En el array [${arrays}] [${findLargestNums(...arrays)}]`);
            break;
        }
    };
}

function ejercicio09() {
    const charIndex = (word,character) =>{
        indices = [];
        for (let i = 0; i < word.length; i++) {
            if(word.charAt(i) === character){
                indices.push(i);
            }            
        }
        return [indices[0],indices[indices.length-1]];
    };
    let palabra = "";
    let letra = "";
    while(palabra.length===0){
        palabra = prompt("Ingrese una palabra:");
        while(letra.length>1 || letra.length===0 || !palabra.includes(letra)){
            letra = prompt(`Ingrese el caracter a buscar en la palabra ${palabra}:`);
        };
    };
    alert(`El primer y ultimo indice del caracter "${letra}" en la palabra "${palabra}" son [${charIndex(palabra,letra)}]`)
}

function ejercicio10() {
    const toArray = (obj)=>{
        return Object.entries(obj);
    };
    objeto = {"a":1,"b":2,"c":3};
    alert(`Para el objeto "${JSON.stringify(objeto)}" se devuelve el array de entradas [${toArray(objeto).map(par=>`[${par[0]},${par[1]}]`)}]`);
}
let itemsEJ11 = [];
function ejercicio11() {
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = '';
    const displayList = ()=>{
        itemsEJ11.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${JSON.stringify(item)} `;
            itemList.appendChild(listItem);
        });
    };
    const getBudgets = (...arrayObj)=>{
        return arrayObj.reduce((acum,p)=>acum + parseFloat(p.budget),0)
    };

    nombre = document.getElementById("ej11name").value;
    edad = parseInt(document.getElementById("ej11age").value);
    presupuesto = parseFloat(document.getElementById("ej11budget").value);
    itemsEJ11.push({"name":nombre,"age":edad,"budget":presupuesto});
    const presupuestoHTML = document.getElementById('presupuestoTotal');

    displayList();

    presupuestoHTML.innerText = "Presupuesto total: ";
    presupuestoHTML.innerText += getBudgets(...itemsEJ11);
    document.getElementById("ej11name").value = "";
    document.getElementById("ej11age").value = "";
    document.getElementById("ej11budget").value = "";
}
let itemsEJ12 = [];
function ejercicio12() {
    let nombre = document.getElementById("ej12name").value;
    const itemList = document.getElementById('itemListEJ12');
    const nombreHTML = document.getElementById('nombresEJ12');
    itemList.innerHTML = '';
    const displayList = ()=>{
        itemsEJ12.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${JSON.stringify(item)} `;
            itemList.appendChild(listItem);
        });
    };
    itemsEJ12.push({"name":nombre});
    displayList();
    const getStudentNames = (...array) =>{
        return array.map(e=>e.name);
    };
    document.getElementById("ej12name").value = "";
    nombreHTML.innerText = "Nombres: ";
    nombreHTML.innerText += `[${getStudentNames(...itemsEJ12)}]`;
}

function ejercicio13() {
    const objectToArray = (obj)=>{
        return Object.entries(obj);
    };
    objeto = {"likes": 2,"dislikes": 3,"followers": 10 };
    alert(`Para el objeto "${JSON.stringify(objeto)}" se devuelve el array de entradas [${objectToArray(objeto).map(par=>`["${par[0]}",${par[1]}]`)}]`);
}

function ejercicio14() {
    const squaresSum = (n)=>{
        return n*(n+1)*((2*n)+1)/6;
    };
    let num = parseInt(document.getElementById('ej14num').value);
    let sumaString = "";
    for (let i = 0; i < num; i++) {
        if(i===num-1){
            sumaString += `${(i+1)}^2`
        }
        else{
            sumaString += `${(i+1)}^2 + `
        }
    };
    alert(`la suma de ${sumaString} es ${squaresSum(num)}`);
}

function ejercicio15() {
    const multiplyByLength = (array) =>{
        return array.map(e=>e*array.length);
    };
    let n = 0;
    let count = 0;
    let numeros=[];
    while(n>=0){
        n = parseInt(prompt(`Ingrese el N°${count+1}:`));    
        if(n>=0){
            numeros.push(n);
            count++;
        }
    }
    alert(`El array [${numeros}] cada elemento se multiplicara por ${numeros.length}\nEl array resultante es: [${multiplyByLength(numeros)}]`);
}

function ejercicio16() {
    const countdown = (n) =>{
        let array = [];
        for (let i = n; i >= 0; i--) {
            array.push(i);
        };
        return array;
    };
    let n = parseInt(prompt(`Ingrese un número:`));    
    alert(`El aray resultante es: [${countdown(n)}]`);
}

function ejercicio17() {
    const diffMaxMin = (arr) => {
        const max = Math.max(...arr);
        const min = Math.min(...arr);
        return [max,min,(max-min)];
      };
    let n = 0;
    let numeros = [];
    while(!isNaN(n)){
        n = prompt(`Ingrese el N°${numeros.length+1} (para salir ingrese cualquier caracter no númerico):`);
        if(!isNaN(n) & n.length>0){
            numeros.push(n);
        }
    }
    resultado = diffMaxMin(numeros);
    alert(`En el array [${numeros}] el mayor es "${resultado[0]}" y el menor es "${resultado[1]}", su diferencia es "${resultado[2]}"`)
}

function ejercicio18() {
    const filterList = (...array)=>{
        let res = [];
        array.forEach(e=>{
            if(!isNaN(e)){
                res.push(e);
            };
        });
        return res;
    };
    let n = "";
    let valores = [];
    while(n.toLowerCase()!=="stop"){
        n = prompt(`Ingrese elemento N°${valores.length+1} (para salir ingrese la palabra 'stop':`);
        if(!isNaN(n)){
            valores.push(parseInt(n));
        }else if(n.toString().toLowerCase()!=="stop"){
            valores.push(n);
        }
        
    }
    alert(`En el array [${valores}] los números enteros son [${filterList(...valores)}]"`)
}

function ejercicio19() {
    const repeat = (element,times) => {
        let res = [];
        for (let i = 0; i < times; i++) {
            res.push(element);
        }
        return res;
    };
    try {
        elemento = document.getElementById('ej19input').value;
        veces = parseInt(document.getElementById('ej19veces').value);
        if(veces<=0 || elemento.length===0) throw new Error("No se aceptan nulos o cero");
        alert(`El elemento "${elemento}" se repetira ${veces} veces(vez): [${repeat(elemento,veces)}]`)
        document.getElementById('ej19input').value="";
        document.getElementById('ej19veces').value=1;
    } catch (error) {
        alert(error.message);
    }
}
function ejercicio20() {
    String.prototype.vreplace = function (vocal) {
        return this.replace(/[aeiou]/gi, vocal);
    };
    try {
        let cadena = prompt("Ingrese una palabra u oración:");
        let letra = prompt("Ingrese una vocal:");
        if(letra.length>1 || !"aeiou".includes(letra.toLowerCase())) throw new Error("No se acepta mas de un caracter ni consonantes!");
        alert(cadena.vreplace(letra));
    } catch (error) {
        alert(error.message);
    }
}

function ejercicio21() {
    const findNemo = (cadena) =>{
        let array =cadena.split(" ");
        return array.indexOf("Nemo")+1;
    };
    let oracion = prompt("ingrese el texto:");
    alert(`En la frase "${oracion}" la palabra "Nemo" se encuentra en la posición ${findNemo(oracion)}!`)
}

function ejercicio22() {
    try {
        const capLast = (cadena)=>{
            return cadena.toLowerCase().split(" ").map(
                function(e){
                    return e.slice(0,-1) + e.slice(-1).toUpperCase();
                }
                ).join(" ");
        };
        var frase = prompt("Ingrese una frase");
        if(frase.length===0) throw new Error("No se aceptan nulos!");
        alert(`original: ${frase}\nresultado: ${capLast(frase)}`);
    } catch (error) {
        alert(error.message);
    }
}