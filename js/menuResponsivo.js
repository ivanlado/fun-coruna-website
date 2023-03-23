document.addEventListener("DOMContentLoaded", function (event) {
    const btn = document.querySelector(".btn-menu");
    const dropdownMenu = document.querySelector(".dropdown-menu");
    btn.onclick = function () {
        dropdownMenu.classList.toggle("open");
    }

});

