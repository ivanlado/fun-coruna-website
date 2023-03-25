const fileName = "eventos.json";
const filePath = "http://127.0.0.1:5500/json/" + fileName;

function cargarEventos() {
    let xhttp = new XMLHttpRequest()
    xhttp.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
            let json = JSON.parse(this.responseText);
            let code = '';
            // const eventos = json.eventos.filter(evento => evento.fecha === "25 abril");
            const eventos = json.eventos;
            for (e of eventos) {
                code += '<article class="evento"> <div class="container_imagen_evento"> <img src="./images/depobadajoz.jpg" alt="Deportivo vs. Badajoz" class="image_evento img"></div><div class="container_text_evento"><h3 class="nombre_evento">';
                code += e.nombreEvento;
                code += '</h3><p class="fecha-evento"> ';
                code += e.fecha;
                code += '</p><p class="lugar-evento"> ';
                code += e.lugar
                code += '</p><div class="footer-evento"><p class="container-precio"> Desde <span class="precio">';
                code += e.precio;
                code += '€</span></p><p class="btn-reservar" onclick="reservar(this)"> Reservar</p></div></div></article>';
            }
            const container = $('#eventos-hoy .caja_eventos');
            container.append(code);
        }
    }
    xhttp.open("GET", filePath);
    xhttp.send();
}


/*

<article class="evento">
    <div class="container_imagen_evento">
        <img src="./images/depobadajoz.jpg" alt="Deportivo vs. Badajoz" class="image_evento img">
    </div>
    <div class="container_text_evento">
        <h3 class="nombre_evento">Partido Deportivo vs. Badajoz</h3>
        <p class="fecha-evento"> sabado 1 abril, 21:00</p>
        <p class="lugar-evento"> Estadio de Abanca Riazor</p>
        <div class="footer-evento">
            <p class="container-precio"> Desde <span class="precio">20€</span></p>
            <p class="btn-reservar" onclick="reservar(this)"> Reservar</p>
        </div>
    </div>
</article>

*/

cargarEventos();