
function mostrar(evt) {

    evt.preventDefault();

    var Nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var direccion = document.getElementById("direccion").value;
    var correo = document.getElementById("correo").value;
    var mensaje = document.getElementById("mensaje").value;

    if (Nombres == "") {
        document.getElementById("nombres").focus();
        alert('Ingrese sus Nombres');
    } else {
        if (apellidos == "") {
            document.getElementById("apellidos").focus();
           alert('Ingrese sus Apellidos');
        } else {
            if (direccion == "") {
                document.getElementById("direccion").focus();
                alert('Ingrese su Direccion');
            } else {
                if (correo == "") {
                    document.getElementById("correo").focus();
                    alert('Ingrese su Correo Electronico');
                } else {
                    if (mensaje == "") {
                        document.getElementById("mensaje").focus();
                        alert('Ingrese un Mensaje');
                    } else {
                        document.registro1.nombres1.value = Nombres;
                        document.registro1.apellidos1.value = apellidos;
                        document.registro1.direccion1.value = direccion;
                        document.registro1.correo1.value = correo;
                        document.registro1.mensaje1.value = mensaje;
                    }
                }
            }
        }
    }
}