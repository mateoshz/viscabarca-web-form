document.getElementById("formularioContacto")
.addEventListener("submit", function(e){

    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    let asunto = document.getElementById("asunto").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();

    if(nombre === "" || email === "" || asunto === "" || mensaje === ""){
        alert("Por favor complete todos los campos obligatorios.");
        e.preventDefault();
        return;
    }

    alert("Formulario enviado correctamente.");
});