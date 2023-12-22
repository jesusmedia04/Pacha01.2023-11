let titulo = document.getElementById("titulo");
console.log(titulo);
titulo.innerText = "Este es mi titulo";
let h1Pagina = document.getElementById("h1Pagina");
h1Pagina.innerText = "Hola esta es mi pagina";

let div1 = document.getElementById("div1");
div1.innerHTML = `<select name="cars" id="cars">
<option value="volvo">Volvo</option>
<option value="saab">Saab</option>
<option value="mercedes">Mercedes</option>
<option value="audi">Audi</option>
</select>`;

const countriesData = {
    "Australia": "🇦🇺",
    "Canada": "🇨🇦",
    "UK": "🇬🇧",
    "USA": "🇺🇸"
}

let selPaises = document.createElement("select");
for (let key in countriesData) {
    let option = document.createElement("option");
    option.setAttribute('value', countriesData[key]);
    let optionText = document.createTextNode(key);
    option.appendChild(optionText);
    selPaises.appendChild(option);
}

document.getElementById("div2").appendChild(selPaises);

let arrDivs = document.getElementsByTagName("div");
console.log(arrDivs);

for (let index = 0; index < arrDivs.length; index++) {
    const element = arrDivs[index];
    console.log(element.innerHTML)
}

let tblData = document.getElementsByClassName("tblData");
let tr = document.createElement("tr");
let td0 = document.createElement("td");
td0.innerText = "CocaCola";
let td1 = document.createElement("td");
td1.innerText = "Juan Perez";
let td2 = document.createElement("td");
td2.innerText = "Peru"
tr.appendChild(td0)
tr.appendChild(td1)
tr.appendChild(td2)
console.log(tblData);
tblData[0].appendChild(tr);

let lista = document.querySelector("ul")
console.log(lista)

let ceviche = document.querySelector(".ceviche")
console.log(ceviche)


let ceviche2 = document.querySelector("#ceviche")
console.log(ceviche2)

let listaUl = document.querySelectorAll("ul");
console.log(listaUl);

let camote = document.getElementById("camote").parentNode.nodeName;
console.log(camote)

let numb = document.getElementById("ceviche").childNodes
console.log(numb)

let estilo = document.getElementById("ceviche");
estilo.style.display = "none"

let tablaEstilo = document.getElementById("tablaEstilo")
tablaEstilo.setAttribute("class", "table table-dark")

tablaEstilo.setAttribute("class", "table table-info")


tablaEstilo.removeAttribute("class");


console.log(div1.clientWidth)

console.log(div1.clientHeight)

function clickdesdeHtml() {
    console.log("Hizo click desde Html")
}


let btnEvent = document.getElementById("btnEvent")

btnEvent.addEventListener("mousemove", myScript);

function myScript() {
    console.log("click desde add event listener")
}

let x = document.getElementById("myForm");
x.addEventListener("focus", myFocusFunction, true);
x.addEventListener("blur", myBlurFunction, true);

function myFocusFunction() {
    document.getElementById("myInput").style.backgroundColor = "";
}

function myBlurFunction() {
    let contenido = document.getElementById("myInput").value;
    console.log(contenido.length)
    if (contenido.length < 5) {
        document.getElementById("myInput").style.backgroundColor = "red";
    }
    else {
        document.getElementById("myInput").style.backgroundColor = "green";
    }
}
