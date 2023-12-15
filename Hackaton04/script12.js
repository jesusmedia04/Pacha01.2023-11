/*Cree una función que tome una matriz de estudiantes y devuelva una matriz de 
nombres de estudiantes.
getStudentNames([
  { name: "Steve" },
  { name: "Mike" },
  { name: "John" }
]) ➞ ["Becky", "John", "Steve"]
 */

function getStudentNames(estudiantes) {
    // Utiliza map para obtener un array de nombres de estudiantes
    const nombres = estudiantes.map(estudiante => estudiante.name);

    return console.log(nombres);
}
