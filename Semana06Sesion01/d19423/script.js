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
  let td0  = document.createElement("td");
  td0.innerText = "CocaCola";
  let td1  = document.createElement("td");
  td1.innerText = "Juan Perez";
  let td2  = document.createElement("td");
  td2.innerText = "Peru"
  tr.appendChild(td0)
  tr.appendChild(td1)
  tr.appendChild(td2)
  console.log(tblData);
  tblData[0].appendChild(tr);
  