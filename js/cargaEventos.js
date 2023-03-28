const fileName = "eventos.json";
const filePath = "http://127.0.0.1:5500/json/" + fileName;
const numberVisiblesItems = 4;

function cargarEventos() {
    let xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
            let json = JSON.parse(this.responseText);
            cargaEventos("eventos-destacados",json.eventosDestacados);
            cargaEventos("eventos-deportivos",json.eventosDeportivos);
            cargaEventos("eventos-musicales",json.eventosMusicales);
            cargaEventos("eventos-sociales",json.eventosSociales);
        }
    }
    xhttp.open("GET", filePath);
    xhttp.send();
}

function cargaEventos(idHTML, eventos){
    let code = '';
    for (e of eventos) {
        code += '<article class="evento"> <div class="el sel"> <img src="';
        code += e.imagen;
        code += '" alt="Deportivo vs. Badajoz" class="image_evento img"></div><div class="container_text_evento"><h3 class="nombre_evento">';
        code += e.nombreEvento;
        code += '</h3><p class="fecha-evento"> ';
        code += e.fecha;
        code += '</p><p class="lugar-evento"> ';
        code += e.lugar
        code += '</p><div class="footer-evento"><p class="container-precio"> Desde <span class="precio">';
        code += e.precio;
        code += '€</span></p><p class="btn-std" onclick="reservar(this)"> Reservar</p></div></div></article>';
    }
    const container = $('#' + idHTML + ' .caja_eventos');
    container.append(code);
    const eventosHide = $(container).children();
    eventosHide.filter(':gt(' + ( numberVisiblesItems-1)+')').hide();
}

cargarEventos();