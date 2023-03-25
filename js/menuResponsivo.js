document.addEventListener("DOMContentLoaded", function (event) {
    const btn = document.querySelector(".btn-menu");

    const dropdownMenu = document.querySelector(".nav-items");
    console.log(dropdownMenu);
    btn.onclick = function () {
        $(".nav-items").slideToggle();
    }

});

