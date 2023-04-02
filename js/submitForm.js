const email = document.querySelector('input[name="email"]');

// Expresión regular correo
const regexEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i;

// Listener eventos
document.getElementById("form-reserva").addEventListener("submit", submitReserva);
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        btnCerrar.click();
    }
});

function submitReserva(e) {
    if (regexEmail.test(email.value)) {
        alert("Se ha enviado la petición de reserva de entradas. En breves recibirán un email para realizar el pago de las mismas.");
    } else {
        alert("El email introducido no es correcto. Introduzca uno correcto");
        e.preventDefault();
    }
}

function exitForm() {
    btnCerrar.click();
}
