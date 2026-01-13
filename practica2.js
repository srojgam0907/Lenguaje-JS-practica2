const contador= document.querySelector("#contador");
const numero= document.querySelector("#numero");

//Evento del boton aumentar
contador.addEventListener("aumentar", function() {

    if(numero > 10) {
        alert("No se puede de 10");
    }


});

//Evento del boton Disminuir
contador.addEventListener("disminuir", function() {

    if(numero < 0) {
        
    }


});

//Evento del boton reiniciar
contador.addEventListener("reiniciar", function() {



});