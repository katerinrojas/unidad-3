//Consumo de API con jQuery

// Obtener url con id aleatoria 
function generateUrl() {
    let id = Math.round(Math.random() * 500);
    return `https://picsum.photos/id/${id}/info`;
  }


//Función para construir la api
function getPicture() {
    //Pantalla ajax con jQery
    $.ajax({
        type: "GET",
        url :generateUrl(),
        datatype: "json",
        async: true,
        success: function (data) {
            renderPicture(data);
          },
    });
}

//Funcion para rederizar la imagen
function renderPicture(data) {
    //Probamos algunos datos
    console.log(data);
    console.log(data.author);

    //Creo mi card manipulando el DON con jQuer
    //Creamos un div
    let div =$("<div></div").addClas("card");
    div.append();

    //Creamos una imagen y agregamos su src
    let img = $("<img />").attr("src", data.download_url).addClass
    ("card-img");
    // Agregamos la imagen del div
    div.append(img);

    //Creamos un h3 y agregamos el autor
    let autor = $(
        `<a hre>${data.author}</a>`).addClass
    ("card-title");
    //Agregamos el h3 al div
    div.append(autor);


    //Agregamos el contenido al pictures container
    $("#pictures-container").append(div);

}

$(document).ready(function () {
    // Acá escribo mi código
    for (let i=0; i < 10; i++)
    getPicture();
});