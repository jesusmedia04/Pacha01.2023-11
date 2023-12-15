//Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos

let opcion = parseInt(prompt("Escribe '1' si quieres transformar de cm a pulgadas o '2' si de libras a Kg"))
let valor;
let formula;
switch (opcion) {
    
    case 1:
        valor = prompt("Escribe el valor de cm que quieres transformar a pulgadas")
        formula = valor * 0.39
        alert(valor + "cm , serian " + formula + " pulgadas ")
        break;
    case 2:
        valor = prompt("Escribe el valor de cuantas libras  que quieres transformar a KG")
        formula = valor * 0.453
        alert(valor + "libras , serian " + Math.round(formula) + " kilos ")
        break;

}