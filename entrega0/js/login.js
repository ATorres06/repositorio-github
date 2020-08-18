
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

        
});

function submit(e){
    e.preventDefault()
    try{
        let formulario = document.getElementById('formulario-login')
        let formData = new FormData(formulario)
        let userObj = Object.fromEntries(formData.entries())
        
        location.href = "/portada.html";

    }
    catch {
        throw new error("carlitos")
    }
    return false
};