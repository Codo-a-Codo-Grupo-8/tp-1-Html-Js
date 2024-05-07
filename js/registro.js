function validarFormulario() {
    var usuario= document.getElementById("nombre").value;
    var contrasena = document.getElementById("pass").value;

    if (usuario.length < 8 || usuario.length > 12) {
        alert("El usuario debe tener entre 8 y 12 caracteres.");
        return false;
    }

    if (!contrasena.match(/^(?=.*[A-Z])(?=.*\d{4,}).{8,12}$/)) {
        alert("La contraseña debe tener al menos una mayúscula y cuatro números, y estar entre 8 y 12 caracteres.");
        return false;
    }

    return true;
}