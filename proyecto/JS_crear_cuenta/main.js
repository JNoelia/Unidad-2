function ingresar(){
    var passwordSistema = localStorage.getItem("_password");
    var usuario = localStorage.getItem("_usuario");

    var passordInput = document.getElementById("password").value;
    var usuarioInput = document.getElementById("usuario").value;
    var mensajeError = "Error Fatal..."
    
    if (passordInput == passwordSistema && usuario == usuarioInput){
        location.href= "page2.html"
    }else{
        document.getElementById("error").innerHTML = mensajeError;
    }
}

function mostrarNombre(){
    document.getElementById("saludo").innerHTML += localStorage.getItem("_usuario");
}

mostrarNombre();

function guardarDatos(){
   var datosNombre = document.getElementById("usarioLogin").value;
   var datosPasswpord = document.getElementById("passwordLogin").value;

   localStorage.setItem("_usuario",datosNombre);
   localStorage.setItem("_password",datosPasswpord);

   location.href = "index.html";
}

// CONTRASEÑA VALIDADA  +dsglohkgfrinjsy

var aceptable_contraseña = 1234;
var aceptable_nombre = 12;

if (datosNombre == ""  || datosNombre < aceptable_nombre.length & datosPasswpord == "" < aceptable_contraseña.length ){
   console.log(mensajeError);
} else {
    location.href = "index.html";
}