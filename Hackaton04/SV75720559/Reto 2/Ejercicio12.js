function getStudentNames(estudiantes) {
    return estudiantes.map(estudiante => estudiante.name);
}

const estudiantes = [
    { name: "Steve" },
    { name: "Mike" },
    { name: "John" }
];

const nombresEstudiantes = getStudentNames(estudiantes);
alert(nombresEstudiantes); 
