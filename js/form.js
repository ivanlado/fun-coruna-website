let formulario = document.getElementById("form-reserva");
let btnCerrar = document.getElementsByClassName("close")[0];

// Si se clica el btn de reservar se muestra el formulario
function reservar(btn) {
    formulario.style.display = "flex";
}

//Si se clica el btn de cerra se cierra el formulario
btnCerrar.onclick = function () {
    formulario.style.display = "none";
}

// Si se clica fuera del formulario, se cierra el formulario
window.onclick = function (event) {
    if (event.target == formulario) {
        formulario.style.display = "none";
    }
}