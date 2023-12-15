/*Cree la función que toma una matriz con objetos y devuelve la suma de los 
presupuestos de las personas.
getBudgets([
{ name: "John", age: 21, budget: 23000 },
{ name: "Steve",  age: 32, budget: 40000 },
{ name: "Martin",  age: 16, budget: 2700 }
]) ➞ 65700 */

function getBudgets(personas) {
    // Utiliza reduce para sumar los presupuestos de las personas
    const sumaPresupuestos = personas.reduce((acumulador, persona) => acumulador + persona.budget, 0);

    return console.log(sumaPresupuestos);
}

