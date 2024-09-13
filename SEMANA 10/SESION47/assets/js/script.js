/*
// Objetos literales
// Declaaramos nuestro objeto
const persona = {
    nombre: "Juan",
    apellido: "Días",
    edad: 25,
    dni_cedula: "364573488", //snake_case
}

// Mostramos el objeto
console.log(persona);

// ACCEDER O MODIFICAR UN OBJETO
// objeto.clave = valor;
// objeto["clave"]= valor;

//Agregamos alguna propiedad
// console.log(persona[0]); // Esto da undefined
console.log(persona.nombre);
console.log(persona["nombre"]);
console.log(persona.dni-cedula);
console.log(persona["dni_cedula"]);

// Agregar propiedades
persona.correo = "micorreo:com";
// Mostrar el objeto
console.log(persona);

// Modificar propiedades
persona.correo = "juandiaz@correo.com" ;
// Mostramos el objeto
console.log(persona);
*/

// Traer datos de un json
fetch("")
.them((res) => res.json())
.them((data) => {
    console.log(data);
    console.log(data.name);
    console.log(data.gender);

    document.querySelector
})
