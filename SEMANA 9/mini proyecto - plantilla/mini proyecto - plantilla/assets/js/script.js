// Mini proyecto 
// Inicializamos nuestro arreglo con nombres de marcas de vehiculos
const cars = ["bmw", "volvo", "saab"];

//Métodos de array
let btnPush = document.getElementById("btn_push");
// Asignamos la función al botón
btnPush.onclick =funcionPush;

function funcionPush () {
    // Actualizamos el array
    cars.push("lexus");
    // Carrgamos las imagenes nuevamente
    mostrarImagenes();
    }

//push
let btnPop =document.getElementById("btn_pop")
// Asignamos la función al botón
btnPop.onclick = funcionPop;

function funcionPop() {
    if (cars.length > 0) {
        // Actualizamos el array
        cars.pop();
        // Cargamos las imagenes nuevamente
        mostrarImagenes();
    } else {
        alert("No se puede eliminar más elementos ya que el arreglo está vacío");
    }
}

// Esta funcion carga las imagenes en el elemento demo
function mostrarImagenes() {
    let text = "";

    for (let car of cars) {
        text += `<img src="./assets/img/${car}.png" alt="${car}" width="100" />`;
    }
    document.getElementById("demo").innerHTML = text;
}

mostrarImagenes();