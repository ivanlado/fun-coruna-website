let indexTestimonio = 0;
let indexTestimonioAnterior = 0;
let testimonios;

document.addEventListener("DOMContentLoaded", function (event) {
    testimonios = document.getElementsByClassName("testimonio");
    for (i = 0; i < testimonios.length; i++) {
        if (i == indexTestimonio) continue;
        testimonios[i].style.display = "none";
    }
});

function updateIndex(direccion) {
    indexTestimonio += direccion;
    indexTestimonio = indexTestimonio < 0 ? testimonios.length - 1 : indexTestimonio;
    indexTestimonio %= testimonios.length;
}

function cambiarTestimonio(direccion) {
    updateIndex(direccion);
    $(".testimonio").hide();   
    $(".testimonio").eq(indexTestimonio).show();  
}