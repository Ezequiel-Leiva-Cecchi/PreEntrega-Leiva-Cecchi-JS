alert("Bienvenido profesor!!!");
let cantidadAlumnos = parseInt(prompt("Ingrese la cantidad de alumnos: "));

for (let i = 1; i <= cantidadAlumnos; i++) {
    let nombre = prompt("Ingresar el nombre del alumno:");
    if(nombre != NaN){
        alert("Ingresaste un valor no valido ");
        nombre = prompt("Reingresar el nombre del alumno: ");
    }
    let apellido = prompt("Ingrese el apellido del alumno:");
    if(apellido != NaN){
        alert("Ingresaste un valor no valido ");
        apellido = prompt("Reingresar el nombre del alumno: ");
    }
    let nota1 = parseInt(prompt("Ingrese la primera nota del alumno " + nombre + ":"));
    if (nota1 == " " || nota1 > 10) {
        alert("Ingreso un valor no valido");
        nota1 = parseInt(prompt("Reingrese la primer nota: "));
    }
    let nota2 = parseInt(prompt("Ingrese la segunda nota del alumno " + nombre + ":"));
    if (nota2 == " " || nota2 > 10) {
        alert("Ingreso un valor no valido");
        nota2 = parseInt(prompt("Reingrese la segunda nota: "));
    }
    let nota3 = parseInt(prompt("Ingrese la tercera nota del alumno " + nombre + ":"));
    if (nota3 == " " || nota3 > 10) {
        alert("Ingreso un valor no valido");
        nota3 = parseInt(prompt("Reingrese la tercera nota: "));
    }
    function calcularPromedio(nota1, nota2, nota3) {
        let resultado = (nota1 + nota2 + nota3) / 3;
        return resultado;
    }
    let promedio = calcularPromedio(nota1, nota2, nota3);
    console.log("El promedio del alumno " + nombre + " " + apellido + " es de: " + promedio);
}




