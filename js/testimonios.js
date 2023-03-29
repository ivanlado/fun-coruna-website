let iEmpresas=0;
let iUsuarios=0;

let indexTestimonioUsuario = 0;
let testimoniosUsuario;

const testimoniosEmpresas = "#opiniones-empresas .testimonio";
const testimoniosUsuarios = "#opiniones-usuarios .testimonio";

const testimoniosEmpresasLen = $(testimoniosEmpresas).length;
const testimoniosUsuariosLen = $(testimoniosUsuarios).length;

$(testimoniosEmpresas).hide();
$(testimoniosUsuarios).hide();
$(testimoniosEmpresas).eq(0).show();
$(testimoniosUsuarios).eq(0).show();

document.querySelector("#opiniones-empresas .prev").addEventListener("click", slideEmpresasPrev);
document.querySelector("#opiniones-empresas .next").addEventListener("click", slideEmpresasNext);
document.querySelector("#opiniones-usuarios .prev").addEventListener("click", slideUsuariosPrev);
document.querySelector("#opiniones-usuarios .next").addEventListener("click", slideUsuariosNext);

function updateIndex(i, direccion, len) {
    i += direccion;
    i = i < 0 ? len - 1 : i;
    i %= len;
    return i;
}

function slide(elems, direccion) {
    if(elems == testimoniosEmpresas){
        iEmpresas = updateIndex(iEmpresas, direccion, testimoniosEmpresasLen);
        $(elems).hide();
        $(elems).eq(iEmpresas).show();
    } else {
        iUsuarios = updateIndex(iUsuarios, direccion, testimoniosUsuariosLen);
        $(elems).hide();
        $(elems).eq(iUsuarios).show();
    }
}

function slideEmpresasPrev(event){
    slide(testimoniosEmpresas, -1);
}

function slideUsuariosPrev(evento){
    slide(testimoniosUsuarios, -1);
}

function slideEmpresasNext(event){
    slide(testimoniosEmpresas, 1);
}

function slideUsuariosNext(evento){
    slide(testimoniosUsuarios, 1);
}