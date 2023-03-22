document.addEventListener("DOMContentLoaded", function (event) {
    const btnEmpresas = document.getElementById("btn-mensual-anual-empresas");
    const btnUsuarios = document.getElementById("btn-mensual-anual-usuarios");
    btnEmpresas.addEventListener("click", cambiarModalidadPagoEmpresas);
    btnUsuarios.addEventListener("click", cambiarModalidadPagoUsuarios);

    const textosMensualAnual = document.querySelectorAll("#planes_organizadores .modalidad-pago");

    const cte = 9;

    function cambiarModalidadPagoEmpresas() {
        // If the checkbox is checked, display the output text
        if (btnEmpresas.checked == true) {
            //Anual
            for (e of textosMensualAnual){
                e.innerText = "/año";
                const precio = parseInt(e.parentNode.firstChild.textContent);
                e.parentNode.firstChild.textContent = Math.trunc(precio*cte);
            }
        } else {
            for (e of textosMensualAnual){
                e.innerText = "/mes";
                const precio = parseInt(e.parentNode.firstChild.textContent);
                e.parentNode.firstChild.textContent = Math.trunc(precio/cte);
            }
        }
    }
    
    function cambiarModalidadPagoUsuarios() {
        // console.log("cambio");
    }
});


