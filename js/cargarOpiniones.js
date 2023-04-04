const fileName = "opiniones.xml";
const filePath = "xml/" + fileName;

$(document).ready(function(){
    // Empresas
    $("#opiniones-empresas .presentacion p").load(filePath + " " + "empresa nombre");
    $("#opiniones-empresas blockquote").load(filePath + " " + "empresa opinion");
    // Usuarios
    $("#opiniones-usuarios .presentacion p").load(filePath + " " + "usuario nombre");
    $("#opiniones-usuarios blockquote").load(filePath + " " + "usuario opinion");
})