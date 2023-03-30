// Preguntas
const preguntas = document.querySelectorAll('.accordion button');

// Se añade el evento a todas las preguntas
preguntas.forEach((item) => item.addEventListener('click', toggleAccordion));

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');
    // Se cierran o encartan el resto de preguntas
    for (item of preguntas) {
        item.setAttribute('aria-expanded', 'false');
    }
    // Si no está expandida, se expande o abre la respuesta la pregunta actual
    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}
