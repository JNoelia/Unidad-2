function ingresar() {
    var passwordSistema = localStorage.getItem("_password");
    var usuario = localStorage.getItem("_usuario");

    var password = document.getElementById("password").value;
    var nombreUsser = document.getElementById("nombre").value;
    var Mensajeerror = "Tu contraseña o usuario son incorecctos"

    if (password == passwordSistema && usuario == nombreUsser) {
        document.getElementById("error").innerHTML = " ";
        location.href = "opciones.html";
        localStorage.setItem("nombre", nombreUsser);

    } else {
        document.getElementById("error").innerHTML = Mensajeerror;
    }
}

function muestra() {

    document.getElementById("saludo").innerHTML += localStorage.getItem("nombre");
}
muestra();

function redireccion1() {
    location.href = "encriptar.html";
}

function redireccion2() {
    location.href = "desencriptar.html"
}
function ir_Inicio() {
    location.href = "index.html"
}

// CREAR CUENTA

// document => recupera

function ir_crear() {

    location.href = "Cuenta.html"
}

function crear_cuenta() {
    var nombre_usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;

    // CONTRASEÑA VALIDADA  

    var aceptable = "ab";
    var caracteres_aceptable = aceptable.length;
    var error_cuenta = "Su cuenta no cumple los requisitos"


    if (nombre_usuario.length >= caracteres_aceptable & contraseña.length >= caracteres_aceptable) {
        localStorage.setItem("_usuario", nombre_usuario);
        localStorage.setItem("_password", contraseña);
        location.href = "index.html";
    }
    else{
        document.getElementById("error").innerHTML = error_cuenta;

    }

}

//  
function opciones() {
    location.href = "opciones.html"
}

function encriptar() {

    var mensaje = document.getElementById("mensaje").value;
    var mensajeEncriptado = btoa(mensaje);
    document.getElementById("msjEncript").innerHTML = mensajeEncriptado

}

function desencriptar() {

    var mensajecodigo = document.getElementById("msgcodigo").value;
    var mensajedesencriptado = atob(mensajecodigo);

    document.getElementById("msjreal").innerHTML = mensajedesencriptado;


}