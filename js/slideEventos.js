$(".prev, .next").on("click", function (e) {
    cambiarContenido(e);
});

// Devuelve el nuevo indice
function siguienteIndex(i, n, sentido) {
    let nuevoValor = i + sentido;
    nuevoValor = nuevoValor < 0 ? n-1 : nuevoValor;
    return nuevoValor % n;
}

function cambiarContenido(e) {
    // Se recatan los contenedores y elementos correspondientes a los eventos
    const target = e.target;
    const container = $(target).parent().find(".caja_eventos")[0];
    const eventos = $(container).children();
    // Datos relacionados con el indice
    const sentido = parseInt($(target).attr("class") == "prev" ? -1 : 1);
    let i = parseInt($(target).parent().find(".indexActual").text());
    const n = eventos.length;
    // Se actualiza el indice actual
    i = siguienteIndex(i, n, sentido);
    $(target).parent().find(".indexActual").text(i);
    // Se ocultan eventos
    eventos.each(function () {
        $(this).hide();
    })
    // Array auxiliar para ver conseguir los indices de los elementos a mostrar
    const mostrarSet = Array.from({ length: 4 }, (_, j) => siguienteIndex(j + i - 1, n, 1));
    // Se muestran los eventos oportunos
    eventos.each(function (index) {
        if (mostrarSet.includes(index)) $(this).show();
    });

}