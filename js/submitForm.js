const email = document.querySelector('input[name="email"]');
document.getElementById("btnSubmit").addEventListener("click", submitReserva);
const regexEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i;


function submitReserva(e) {
    console.log(regexEmail.test(email.value));
    if (regexEmail.test(email.value)) {
        alert("Se ha enviado la petición de reserva de entradas. En breves recibirán un email para realizar el pago de las mismas.");
    } else {
        alert("El email introducido no es correcto. Introduzca uno correcto");
        e.preventDefault();
    }
}
