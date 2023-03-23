document.addEventListener("DOMContentLoaded", function (event) {
    const btn = document.querySelector(".btn-menu");

    const dropdownMenu = document.querySelector(".nav-items");
    console.log(dropdownMenu);
    btn.onclick = function () {
        dropdownMenu.classList.toggle("open-menu");
        const isOpen = dropdownMenu.classList.contains("open-menu");
        const nuevoDisplay = isOpen ? "auto" : "0px";
        // dropdownMenu.style.display = nuevoDisplay;
        dropdownMenu.style.height = nuevoDisplay;
        // for(e of entradasMenu){
        //     e.style.display = nuevoDisplay;
        // }

    }

});

