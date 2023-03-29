const fileName = "opiniones.xml";
const filePath = "http://127.0.0.1:5500/xml/" + fileName;


$(document).ready(function(){
    console.log($(".opiniones-empresas blockquote"));
    // Empresas
    $("#opiniones-empresas .presentacion p").load(filePath + " " + "empresa nombre");
    $("#opiniones-empresas blockquote").load(filePath + " " + "empresa opinion");
    
    // Usuarios
    $("#opiniones-usuarios .presentacion p").load(filePath + " " + "usuario nombre");
    $("#opiniones-usuarios blockquote").load(filePath + " " + "usuario opinion");
})