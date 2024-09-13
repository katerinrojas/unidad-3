$(document).ready(function () {
    // Acá colocaremos nuestro código
    // Sintaxis de jQuerry
    // $(selector).accion();
    // Con JS
    document.querySelector("#tittle").innerHTML = "DOM con JS";
    // Con jQuery
    $("#tittle").html("DOM con jQuery");

    //Seleccionar por clase 
    $(".demo").html("Clase seleccionada");
    //Solo usar el primero de una clase
    $(".demo").first().html("Primer elemento de clase");


    //Seleccionar elemento y cambiar un atributo
    // .attr("atributo", "valor")
    $("img").attr(
        "src",
        "https://cdn.britannica.com/26/162626-050-3534626F/Koala.jpg"
    );

    $("img").attr("title","Un Koala");

    // Evento de click
    // $("btn").click(() => $("#resultado").toggle())
    $("#btn").click(funtion () 
        $("#resultado").toggle());
    }
    ));
});