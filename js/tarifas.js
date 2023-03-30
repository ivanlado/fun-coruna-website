// Botones de mensual anual
const btnEmpresas = document.getElementById("btn-mensual-anual-empresas");
const btnUsuarios = document.getElementById("btn-mensual-anual-usuarios");

// Se añaden eventos
btnEmpresas.addEventListener("click", cambiarModalidadPagoEmpresas);
btnUsuarios.addEventListener("click", cambiarModalidadPagoUsuarios);

// Textos de año/mes en las tarifas
const textosMensualAnualEmpresas = document.querySelectorAll("#planes_organizadores .modalidad-pago");
const textosMensualAnualUsuarios = document.querySelectorAll("#planes_usuarios .modalidad-pago");

// Cte para los precios
const cte = 9;

function cambiarModalidadPagoEmpresas() {
    cambioModalidad(textosMensualAnualEmpresas, btnEmpresas);
}

function cambiarModalidadPagoUsuarios() {
    cambioModalidad(textosMensualAnualUsuarios, btnUsuarios);
}

function cambioModalidad(textos, btn){
    if (btn.checked == true) {
        //Anual
        for (e of textos) {
            e.innerText = "/año";
            const precio = parseInt(e.parentNode.firstChild.textContent);
            e.parentNode.firstChild.textContent = Math.trunc(precio * cte);
        }
    } else {
        // Mensual
        for (e of textos) {
            e.innerText = "/mes";
            const precio = parseInt(e.parentNode.firstChild.textContent);
            e.parentNode.firstChild.textContent = Math.trunc(precio / cte);
        }
    }
}


