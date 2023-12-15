function getBudgets(personas) {
    return personas.reduce((total, persona) => total + persona.budget, 0);
}

const personas = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 }
];

const totalPresupuestos = getBudgets(personas);
alert(totalPresupuestos); 
