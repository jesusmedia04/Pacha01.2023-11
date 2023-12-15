function ejercicio01(){
//Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.
    try {
        let numero = parseInt(document.getElementById("ej1num").value);
        if(numero>99 && numero< 1000){
            alert("Este numero tiene 3 digitos");
        }
        else{
            alert(`Este numero no tiene 3 digitos, tiene ${(''+numero).length} cifras`);
        }
    } catch (error) {
        console.error(error.message);
    }
    finally{
        document.getElementById("ej1num").value = "";
    }
}
function ejercicio02(){
        try {
            let numero = parseInt(document.getElementById("ej2num").value);
            if(numero<0){
                alert("Este número es negativo");
            }
            else{
                alert("Este número es positivo");
            }
        } catch (error) {
            console.error(error.message);
        }
        finally{
            document.getElementById("ej2num").value = "";
        }
    }
function ejercicio03(){
    try {
        let numero = parseInt(document.getElementById("ej3num").value);
        if(numero%10 === 4){
            alert(`Este número termina en 4`);
        }
        else{
            alert(`Este número NO termina en 4, termina en "${numero%10}"`);
        }
    } catch (error) {
        console.error(error.message);
    }
    finally{
        document.getElementById("ej3num").value = "";
    }
}
function ejercicio04(){
    let arrNums = [];
    let count = 0;
    var temp = 0;
    while (count<3){
        let num = parseInt(prompt(`Ingrese el N°${count+1}`));
        arrNums.push(num);
        count++;
    }
    for(let i=0;i<3;i++){
        if(arrNums[i] > arrNums[i+1]){
            temp = arrNums[i];
            arrNums[i] = arrNums[i+1];
            arrNums[i+1] = temp;
        }
    }
    alert(`Orden ascendente: [${arrNums}]`);
}
function ejercicio05(){
    try {
        let dsct = 0;
        let numero = parseInt(document.getElementById("ej5num").value);

        if(numero<=0 || isNaN(numero)) throw new Error("No es admiten Negativos ni nulos");
        
        if(numero>10){
            dsct = 10;
            if(numero>20 && numero<30){
                dsct = 20;
            }else{
                dsct = 40;
            }
        }
        
        alert(`El Total a pagar es S/.${numero*80*(100-dsct)/100} ${dsct<=0 ? "": (", con un descuento de "+dsct+"%")}`)
    } catch (error) {
        alert(error.message);
    }
    finally{
        document.getElementById("ej5num").value = "";
    }
}
function ejercicio06(){
    try {
        let sueldo = 0;
        let horas = parseInt(document.getElementById("ej6num").value);

        if(horas<=0 || isNaN(horas)) throw new Error("No es admiten Negativos ni nulos");
        
        if(horas<40){
            sueldo = horas*20;
        }
        else if(horas>40 && horas<168){
            sueldo = (horas*45) - 1000;
        }
        else{
            throw  new Error("Cantidad de horas inválida!, sobrepasa las 168 horas que tiene una semana!")
        }
        
        
        alert(`El sueldo semanal es: s/${sueldo}${horas-40>0 ? ", con " + (horas-40) + " hora(s) extra!":""}`);
    } catch (error) {
        alert(error.message);
    }
    finally{
        document.getElementById("ej6num").value = "";
    }
}
function ejercicio07(){
    try {
        let membresia = (document.getElementById("ej7txt").value).toUpperCase();
        dsct = 0
        switch(membresia){
            case 'A': dsct = 10; break;
            case 'B': dsct = 15; break;
            case 'C': dsct = 20; break;
            default: throw new Error("Ingrese un caracter válido!");
        }
        alert(`El descuento que le corresponde es del ${dsct}%`)
    } catch (error) {
        alert(error.message);
    }
    finally{
        document.getElementById("ej7txt").value = "";
    }
}
function ejercicio08(){
    let arrNotas = [];
    let count = 0;
    while (count<3){
        let nota = parseInt(prompt(`Ingrese el N°${count+1}`));
        if(nota<=20 && nota>=0){
            arrNotas.push(nota);
            count++;    
        }
        else{
            alert("Ingrese nota válida! [PRESIONE ENTER PARA SEGUIR]")
        }
    }
    let notaFinal = (arrNotas.reduce((a,c)=>a+c,0))/3;
    
    if(notaFinal>10){
        alert(`Notas ingresadas: [${arrNotas}] FELICIDADES! APROBÓ CON ${notaFinal.toFixed(2)}`)
    }
}
function ejercicio09(){
    try {
        let sueldo = parseFloat(document.getElementById("ej9num").value);
        let aumento = sueldo && sueldo>2000 ? 5 : sueldo && sueldo<2000 ? 10:0;
        if(aumento>0){
            alert(`El trabajador ganaba S/.${sueldo.toFixed(2)} y ahora ganarás S/.${(sueldo*(1+(aumento/100))).toFixed(2)} con un aumento del ${aumento}%`);
        }
    } catch (error) {
        alert(error.message);
    }
    finally{
        document.getElementById("ej9num").value = "";
    }
}
function ejercicio10(){
    try {
        let numero = parseInt(document.getElementById("ej10num").value);
        if(numero%2==0){
            alert(`el número ${numero} ES PAR!`);
        }
        else{
            alert(`el número ${numero} ES IMPAR!`);
        }
    } catch (error) {
        alert(error.message);
    }
    finally{
        document.getElementById("ej10num").value = "";
    }
}
function ejercicio11(){
    try {
        let arrNums = [];
        let count = 0;
        while (count<3){
            let num = parseInt(prompt(`Ingrese el N°${count+1}`));
            if(!isNaN(num)){
                arrNums.push(num);
                count++;
            }
            else{
                alert("No se aceptan nulos ni letras!");
            }
        }
        let nMayor = arrNums.length>0 ? arrNums[0]:0;
        for(let i=0;i<3;i++){
            if(arrNums[i] > nMayor){
                nMayor = arrNums[i];
            }
        }
        alert(`El mayor de los número ingresados es: [${nMayor}]`);        
    } catch (error) {
        
    }
}
function ejercicio12(){
    try {
        let arrNums = [];
        let count = 0;
        while (count<2){
            let num = parseInt(prompt(`Ingrese el N°${count+1}`));
            if(!isNaN(num)){
                arrNums.push(num);
                count++;
            }
            else{
                alert("No se aceptan nulos ni letras!");
            }
        }
        let nMayor = arrNums.length>0 ? arrNums[0]:0;
        for(let i=0;i<2;i++){
            if(arrNums[i] > nMayor){
                nMayor = arrNums[i];
            }
        }
        alert(`El mayor de los número ingresados es: [${nMayor}]`);        
    } catch (error) {
        
    }
}
function ejercicio13(){
   try {
    let vocales = "AÁEÉIÍOÓUÚ";
    let letra = (document.getElementById("ej13txt").value).toUpperCase();
    if(vocales.includes(letra)){
        alert(`El caracter "${letra}" es una vocal!`);
    }
    else{
        alert(`El caracter "${letra}" NO es una vocal!`);
    }
   } catch (error) {

   }
   finally{
    document.getElementById("ej13txt").value="";
   }
}
function ejercicio14(){
    try {
        let numero = parseInt(document.getElementById("ej14num").value);
        let countDivisores = 1;
        if(isNaN(numero)) throw new Error("No se aceptan nulos!");

        for (let i = 2; i <= numero; i++) {
            if(numero % i == 0){
                countDivisores ++;
            }
        }
        if(countDivisores===2){
            alert(`El número "${numero}" es PRIMO!`);
        }else{
            alert(`El número "${numero}" NO ES PRIMO!`);
        }

    } catch (error) {
        alert(error.message);
    }
    finally{
        document.getElementById("ej14num").value=""
    }
}
function ejercicio15(){
	let input = new Number();
	let medida = "";
	while (!(medida.toLowerCase()==="cm" || medida.toLowerCase()==="lb")) {
		medida = prompt("Ingrese la medida a convertir a sistema Internacional (cm/lb):");
	}
	input = Number(prompt(`Ingrese cantidad de ${medida.toLowerCase()}:`));
	switch (medida.toLowerCase()) {
	case "cm":
		alert(`los ${input + " " + medida}, equivalen a ${(input/2.54.toFixed(2))} in`);
		break;
	case "lb":
		alert(`los ${input + " " + medida}, equivalen a ${(input/2.2046.toFixed(2))} kg`);
		break;
	}
}
function ejercicio16(){
    try {
        let ndia = 0;
        ndia = Number(document.getElementById("ej16num").value);
        if (isNaN(ndia))throw new Error("No se aceptan nulos");
        switch (ndia) {
        case 1:
            alert("Lunes");
            break;
        case 2:
            alert("Martes");
            break;
        case 3:
            alert("Miércoles");
            break;
        case 4:
            alert("Jueves");
            break;
        case 5:
            alert("Viernes");
            break;
        case 6:
            alert("Sábado");
            break;
        case 7:
            alert("Domingo");
            break;
        default:
            throw new Error("Número fuera de rango. Ingrese un número del 1 al 7.");
        }
    } catch (error) {
        alert(error.message);
    }
    finally{
        document.getElementById("ej16num").value="";
    }
}
function ejercicio17(){
    let horas = -1;
    let minutos = -1;
    let segundos = -1;
    while(horas<0 || horas>23){
        horas =parseInt(prompt("Ingrese la hora:"));
        if (horas>0 && horas<24) {
			while (minutos<0 || minutos>59) {
				minutos = parseInt(prompt("Ingrese los minutos:"));
				if (minutos>=0 && minutos<60) {
					while (segundos<=0 || segundos>59) {
						segundos = parseInt(prompt("Ingrese los segundos:"));
					}
				}
			}
		}
        let horaActual = `${horas}:${minutos}:${segundos}`;
    if ((segundos+1)==60) {
		minutos++;
		segundos = 0;
		if (minutos==60) {
			horas++;
			minutos = 0;
			if (horas>=24) {
				horas = horas-24;
			}
		}
	}
    alert(`La hora indicada es ${horaActual}, en 1 segundo será ${horas}:${minutos}:${segundos}`);
    }
}
function ejercicio18(){
    try {
        let numerocd = parseInt(document.getElementById("ej18num").value);
        let totalpago = 0;
        if(isNaN(numerocd) || numerocd===0) throw new Error("No se aceptan nulos");
        if (numerocd>=1 && numerocd<10) {
            totalpago = (numerocd*10);
        } else {
            if (numerocd>=10 && numerocd<100) {
                totalpago = (numerocd*8);
            } else {
                if (numerocd>=100 && numerocd<500) {
                    totalpago = (numerocd*7);
                } else {
                    totalpago = (numerocd*6);
                }
            }
        }
        alert(`El total a pagar es de S/${totalpago}, ganando S/${totalpago*0.0825}`);
    } catch (error) {
        alert(error.message);
    }
}
function ejercicio19(){
    var idempleado = new Number();
	var salariodiario = new Number();
	var dias = new Number();
	var cargoempleado = new String();
	while (!(idempleado==48 || idempleado==56 || idempleado==64 || idempleado==80)) {
		idempleado = parseInt(prompt("Ingrese un identificador válido [48,56,64,80]:"));
		if ((idempleado==48 || idempleado==56 || idempleado==64 || idempleado==80)) {
			while (dias<=0 || dias>6) {
				dias = parseInt(prompt("Ingrese el número de días trabajados (6 días máximo): "));
			}
		}
	}
    switch (idempleado) {
        case 48:
            cargoempleado = "Mantenimiento";
            salariodiario = 48;
            break;
        case 56:
            cargoempleado = "Cajero";
            salariodiario = 56;
            break;
        case 64:
            cargoempleado = "Servidor";
            salariodiario = 64;
            break;
        case 80:
            cargoempleado = "Preparador de mezclas";
            salariodiario = 80;
            break;
    }
    alert(`El empleado con el cargo de "${cargoempleado}", trabajó durante ${dias} día(s), Se le debe pagar s/${salariodiario*dias}`);
}
function ejercicio20(){
    let msg = "";
    let count = 0;
    let n = 0;
    let numeros = [];
    let countpares = 0;
    let sumatotal = 0;
    while (count<4) {
		n = parseInt(prompt(`Ingrese el N°${count+1}`));
		numeros.push(n);
		count++;
	}
    let nMayor= numeros.length>0?numeros[0]:0;
    for (let i=0; i<4; ++i) {
		if (numeros[i]>nMayor) {
			nMayor = numeros[i];
		}
		if (numeros[i]%2==0) {
			countpares++;
		}
		sumatotal += numeros[i];
	}
    if (countpares>=1) {
		msg +=(`Hay ${countpares} número(s) PAR(ES)\n`);
		if (numeros[2]%2==0) {
			msg +=(`El cuadrado del 2do número ingresado es: ${Math.pow(numeros[1], 2)}\n`);
		}
	}
	if (numeros[0]>numeros[3]) {
		msg +=(`El promedio de los 4 números ingresados es: ${sumatotal/4}\n`);
	}
	if (numeros[1]>numeros[2] && (numeros[2]>=50 && numeros[2]<=700)) {
		msg +=(`La suma de los 4 números es: ${sumatotal}\n`);
	}
	msg +=(`El número "${nMayor}" es el MAYOR\n`);
    alert(msg);
}
function ejercicio21(){
	try {
        let n = parseInt(document.getElementById("ej21num").value);
        if(isNaN(n) || n<=1) throw new Error("No se aceptan nulos, negativos o 1");
        let fact = 0;
        fact = 1;
        for (let i=n; i>=1; --i) {
            fact = fact*i;
        }
        alert(`Factorial: ${fact}`);
    } catch (error) {
        alert(error.message);
    }
    finally{
        document.getElementById("ej21num").value = "";
    }
}
function ejercicio22(){
	try {
        let n = parseInt(document.getElementById("ej22num").value);
        var suma = new Number();
        if(isNaN(n) || n<=1) throw new Error("No se aceptan nulos, negativos o 1");

        suma = n*(n+1)/2;

        alert(`La suma de los ${n} primeros números es: ${suma}`);
    } catch (error) {
        alert(error.message);
    }
    finally{
        document.getElementById("ej22num").value = "";
    }
}
function ejercicio23(){
	try {
        let n = parseInt(document.getElementById("ej23num").value);
        var sumaImpares = new Number();
        if(isNaN(n) || n<=1) throw new Error("No se aceptan nulos, negativos o 1");

        if (n%2==0) {
            sumaImpares = Math.pow((n/2), 2);
        } else {
            sumaImpares = Math.pow(((n+1)/2), 2);
        }

        alert(`La suma de los ${n} primeros números impares es: ${sumaImpares}`);
    } catch (error) {
        alert(error.message);
    }
    finally{
        document.getElementById("ej23num").value = "";
    }
}
function ejercicio24() {
    var cantidadpares = new Number();
	var sumapares = new Number();
	cantidadpares = 500;
	// Ya que la cantidad(n) de pares hasta 1000 es su mitad
	sumapares = cantidadpares*(cantidadpares+1);
    alert(`La suma de los números pares de 0 a 1000 es "${sumapares}"`)
}
function ejercicio25(){
	try {
        let n = parseInt(document.getElementById("ej25num").value);
        if(isNaN(n) || n<=1) throw new Error("No se aceptan nulos, negativos o 1");
        let fact = 1;
        let count = 1;
        while(count <= n){
            fact = fact * count;
            count++;
        }
        alert(`Factorial: ${fact}`);
    } catch (error) {
        alert(error.message);
    }
    finally{
        document.getElementById("ej21num").value = "";
    }
}
function ejercicio26() {
    var divisor = 0;
	var dividendo = 0;
	var acum = 0;
	while (dividendo<=0) {
		dividendo = parseInt(prompt("Ingrese el dividendo(D): "));
		if (dividendo>0) {
			while (divisor<=0 || divisor>dividendo) {
				divisor = parseInt(prompt("Ingrese el divisor(d): "));
			}
		}
	}
	// 15:4 -> 15-4=11 , 11-4=7 , 7-4=3 , 3-4=-1
	// 15:5 -> 15-5=10 , 10-5=5 , 5-5=0
	while (dividendo>=divisor) {
		dividendo = dividendo-divisor;
		acum = acum+1;
	}
	alert(`El cociente es: ${acum} y el resto es: ${dividendo}`);
}
function ejercicio27() {
    let n = 0;
	let contador =0;
	let suma = 0;
	n = 1;
	while (n>0) {
		n = parseInt(prompt(`suma actual: "${suma}" \nEl programa termina cuando se ingresa un Cero o negativo\nIngrese el N°${contador+1}`));
		if (n>0) {
			suma = suma+n;
			contador = contador+1;
		}
	}
	alert(`La media de los números ingresados es: ${suma/contador}`);
}
function ejercicio28() {
    let suma = 0;
	let contador = 0;
	contador = 0;
	suma = 0;
	do {
		// Primero ejecuta
		contador++;
		suma += contador;
	} while (contador!=100);
	// luego comprueba
	alert(`La suma de los primeros 100 números es: ${suma}\n
    let suma = 0;
	let contador = 0;
	contador = 0;
	suma = 0;
	do {
		contador++;
		suma += contador;
	} while (contador!=100);`);
}
function ejercicio29() {
    let suma = 0;
	let contador = 0;
	contador = 0;
	suma = 0;
	while (contador<100) {
		contador ++;
		suma += contador;
	}
	alert(`La suma de los primeros 100 números es: ${suma}\n
    let suma = 0;
	let contador = 0;
	contador = 0;
	suma = 0;
	while (contador<100) {
		contador ++;
		suma += contador;
	}`);
}
function ejercicio30() {
	let suma = 0;
	for (let i=1; i<=100; ++i) {
		suma += i;
	}
	alert(`La suma de los primeros 100 números es: ${suma}\n
    let suma = 0;
	for (let i=1; i<=100; ++i) {
		suma += i;
	}`);
}
function ejercicio31(){
    let n = new Number();
	let count = new Number();
	let countpares = new Number();
	let countimpares = new Number();
	let sumapares = new Number();
	let sumaimpares = new Number();
	count = 0;
	countpares = 0;
	countimpares = 0;
	while (count<10) {
		n = parseInt(prompt(`Ingrese el N°${count+1}:`));
		if (n>0) {
			count = count+1;
			if (n%2==0) {
				countpares = countpares+1;
				sumapares = sumapares+n;
			} else {
				countimpares = countimpares+1;
				sumaimpares = sumaimpares+n;
			}
		}
	}
	if (countpares>0) {
		alert(`La media de los números pares ingresados es: ${sumapares/countpares}`);
	}
	if (countimpares>0) {
		alert(`La media de los números impares ingresados es: ${sumaimpares/countimpares}`);
	}
}
function ejercicio32() {
    var eleccion = new String();
	do {
		eleccion = prompt("Desea continuar?");
		if (!(eleccion.toUpperCase=="N" || eleccion.toUpperCase=="S")) {
			alert("Caracter no válido!");
		}
	} while (Seleccion.toUpperCase()!="N");
}
function ejercicio33() {
    const tablas = document.getElementById("tablasMultiplicar");
    if(tablas.innerHTML.trim()===""){
        var i, j;
        for (i=1; i<=9; ++i) {
            tablas.innerHTML+=`<li>-----TABLA DEL ${i}-------</li>`;
            for (j=1; j<=12; ++j) {
                tablas.innerHTML += `<li>${i} X  ${j} =  ${i*j}</li>`;
            }
        }
    }
    else{
        tablas.innerHTML = "";
    }
}
function ejercicio34() {
    let count, i;
	let n = new Number();
	let nmayor = new Number();
	let nmenor = new Number();
	count = 0;
	let numeros = new Array(20);
	while (count<20) {
		n = Number(prompt(`Ingrese el N°${count+1}`));
		numeros[count] = n;
		count ++;
	}
	nmayor = numeros[0];
	nmenor = numeros[0];
	for (i=1; i<=20; ++i) {
		if (numeros[i-1]>nmayor) {
			nmayor = numeros[i-1];
		}
		if (numeros[i-1]<nmenor) {
			nmenor = numeros[i-1];
		}
	}
	alert(`El número mayor es ${nmayor}\nEl número menor es ${nmenor}`);
}
function ejercicio35() {
    const res = document.getElementById("resultadoFibonacci");
    try {
        var i;
        var t1 = new Number();
        var t2 = new Number();
        var next = new Number();
        var n = new Number();
        t1 = 0;
        t2 = 1;
        n = Number(document.getElementById("ej35num").value);
        if(res.innerHTML.trim()!== "") {res.innerHTML = "";}
        if (isNaN(n) || n==1 || n<=0) {throw new Error("No se aceptan nulos, negativos o 1"); res.innerHTML=""}
        res.innerHTML += `Serie: ${t1},${t2},`;
        for (i=1; i<=n-2; ++i) {
            next = t1+t2;
            res.innerHTML += i<n-2 ? `${next},` : `${next}`;
            t1 = t2;
            t2 = next;
        }        
    } catch (error) {
        alert(error.message);
    }finally{
        document.getElementById("ej35num").value = "";
    }
}
function ejercicio36(){
    var n1 = 0;
	var n2 = 0;
	var resto = 0;
	while (n1<=0) {
		n1 = parseInt(prompt("Ingrese el N°1:"));
		if (n1>0) {
			while (n2<=0) {
				n2 = parseInt(prompt("Ingrese el N°2:"));
			}
		}
	}
	while (n2!=0) {
		resto = n1%n2; 
		n1 = n2; //este será el MCD resultante
		n2 = resto;
	}
	alert(`El MCD es: ${n1}`);
}
function ejercicio37() {
    var finiteracion, i;
	var num = 0;
	var sumadivisores = 0;
	num = parseInt(document.getElementById("ej37num").value);
	finiteracion = num%2==0 ? num/2 : num;
	for (i=1; i<=finiteracion; ++i) {
		if (num%i==0) {
			sumadivisores = sumadivisores+i;
		}
	}
	if (num==sumadivisores) {
		alert(`El número "${num}" es Perfecto!!`);
	} else {
		alert(`El número "${num}" NO es Perfecto!!`);
	}
}