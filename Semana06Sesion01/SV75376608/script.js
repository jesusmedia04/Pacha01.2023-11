let titulo = document.getElementById("titulo")
console.log(titulo)

titulo.innerText = "Tiulo cambiado"

let h1Pagina = document.getElementById("h1Pagina");
h1Pagina.innerText = "Hola esta es mi pagina"

let div1 = document.getElementById("div1")
div1.innerHTML = `<select name="cars" id="cars">
<option value="volvo">Volvo</option>
<option value="toyota">TOYOTA</option>
</select>`