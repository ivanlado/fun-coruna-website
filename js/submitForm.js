
document.addEventListener("DOMContentLoaded", function (event) {
    console.log("lasdjalksdshd");
    document.getElementById("btnSubmit").addEventListener("submit", submitReserva);
    const email = document.querySelector('input[name="email"]');
    const regexEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

    
});


function submitReserva() {
    console.log("submit event");
    if (regexEmail.test(email.value)) {
        console.log("lksadjasdkasd");
    } else {
        alert("lkasjdasd");
    }
}