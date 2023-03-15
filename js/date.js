document.addEventListener("DOMContentLoaded", function (event) {
    const currentDate = new Date();
    const dateString = currentDate.toLocaleDateString("es-SP", { day: "numeric", month: "long", year: "numeric" });
    const formattedDateString = "Eventos para hoy, " + dateString;
    document.getElementById("current-date").textContent = formattedDateString;

});