let numero= 0;

const contador= document.querySelector("#contador");
const mensajeError= document.querySelector("#error");

const aumentar= document.querySelector("#aumentar");
const disminuir= document.querySelector("#disminuir");
const reiniciar= document.querySelector("#reiniciar");

//FUNCIONES

//Para actualizar el valor en la pantalla
function actualizar() {
    contador.textContent= numero;
}

//Para mostrar el mensaje de error durante un tiempo determinado
function mostrarError() {
    mensajeError.classList.remove("oculto");

    setTimeout(function() {
        mensajeError.classList.add("oculto");
    }, 1000);
}

//EVENTOS

//Evento del boton aumentar
aumentar.addEventListener("click", function() {
    numero++;
    actualizar();

    if(numero > 10) {
        alert("No se puede superar el 10");
    }

});

//Evento del boton Disminuir
disminuir.addEventListener("click", function() {
    if(numero == 0) {
        mostrarError();
        return;
    }
    
    numero--;
    actualizar();

});

//Evento del boton reiniciar
reiniciar.addEventListener("click", function() {
    numero= 0;
    actualizar();

});