const userAdvert = '<h2 class="inputName" style="color: red; margin-left: -300px;">---> Ingrese un nombre de usuario porfavor</h2>';
const mailAdvert = '<h2 class="inputName" style="color: red; margin-left: -300px;">---> Ingrese un mail porfavor</h2>';
const passAdvert = '<h2 class="inputName" style="color: red; margin-left: -300px;">---> Ingrese una contraseña porfavor</h2>';
const userRep = '<h2 class="inputName" style="color: red; margin-left: -300px;">---> Ese nombre de usuario ya existe!</h2>';
const formRegistro = `<div class="row">
<div class="col-md-3">
    <h2 class="inputName"> Usuario: </h2>
</div>
<div class="col-md-7">
    <input type="text" name="user" id="userBox" placeholder="Ingrese el Usuario..." class="inputBox">
</div>
<div id="userInd" class="col-md-2"></div> <!--Indicacion-->
</div>
<div class="row">
<div class="col-md-3">
    <h2 class="inputName"> Email: </h2>
</div>
<div class="col-md-7">
    <input type="text" name="mail" id="emailBox" placeholder="Ingrese el email..." class="inputBox">
</div>
<div id="mailInd" class="col-md-2"></div> <!--Indicacion-->
</div>
<div class="row">
<div class="col-md-3">
    <h2 class="inputName"> Password: </h2>
</div>
<div class="col-md-7">
    <input type="text" name="pass" id="passwordBox" placeholder="Ingrese la Contraseña..." class="inputBox">
</div>
<div id="passInd" class="col-md-2"></div> <!--Indicacion-->
</div>
<div class="row">
<div class="col-md-3">
    <h2 class="inputName"> Perfil: </h2>
</div>
<div class="col-md-9">
    <div class="dropdown">
      <select name="rol" id="rolUser">
        <option value="estandar">Estandar</option>
        <option value="avanzado">Avanzado</option>
        <option value="administrador">Administrador</option>
      </select>
</div>
</div>

<div class="row">
<div class="col-md-3"></div>
<div class="col-md-3">
    <div class="col-md-3">
        <input type="button" class="btn btn-primary registrarBtn" style="width: 100px; margin-left: 5px" onclick="validarBtn()" value="Registrar"></input>
    </div>
</div>
</div>`;
const formLogin = `<div class="row">
<div class="col-md-3">
    <h2 class="inputName"> Usuario: </h2>
</div>
<div class="col-md-7">
    <input type="text" name="user" id="userBox" placeholder="Ingrese el Usuario..." class="inputBox">
</div>
<div id="userInd" class="col-md-2"></div> <!--Indicacion-->
</div>
<div class="row">
<div class="col-md-3">
    <h2 class="inputName"> Email: </h2>
</div>
<div class="col-md-7">
    <input type="text" name="mail" id="emailBox" placeholder="Ingrese el email..." class="inputBox">
</div>
<div id="mailInd" class="col-md-2"></div> <!--Indicacion-->
</div>
<div class="row">
<div class="col-md-3">
    <h2 class="inputName"> Password: </h2>
</div>
<div class="col-md-7">
    <input type="text" name="pass" id="passwordBox" placeholder="Ingrese la Contraseña..." class="inputBox">
</div>
<div id="passInd" class="col-md-2"></div> <!--Indicacion-->
</div>
<div class="row">
<div class="col-md-3"></div>
<div class="col-md-3">
    <div class="col-md-3">
        <input type="button" class="btn btn-primary registrarBtn" style="width: 100px; margin-left: 5px" onclick="validarIngresoBtn()" value="Iniciar"></input>
    </div>
</div>
</div>`;
const registrarUsuariosScreen = `<div class="container-fluid ingreso-Usuario" style="background-color: #99CCFF; height: 300px;">
<div class="row">
    <div class="col-md-12">
        <h1>
            REGISTRO DE UN NUEVO USUARIO
        </h1>
    </div>
    <form action="">
        <div class="row">
            <div class="col-md-3">
                <h2 class="inputName"> Usuario: </h2>
            </div>
            <div class="col-md-7">
                <input type="text" name="user" id="userBox" placeholder="Ingrese el Usuario..." class="inputBox">
            </div>
            <div id="userInd" class="col-md-2"></div> <!--Indicacion-->
        </div>
        <div class="row">
            <div class="col-md-3">
                <h2 class="inputName"> Email: </h2>
            </div>
            <div class="col-md-7">
                <input type="text" name="mail" id="emailBox" placeholder="Ingrese el email..." class="inputBox">
            </div>
            <div id="mailInd" class="col-md-2"></div> <!--Indicacion-->
        </div>
        <div class="row">
            <div class="col-md-3">
                <h2 class="inputName"> Password: </h2>
            </div>
            <div class="col-md-7">
                <input type="text" name="pass" id="passwordBox" placeholder="Ingrese la Contraseña..." class="inputBox">
            </div>
            <div id="passInd" class="col-md-2"></div> <!--Indicacion-->
        </div>
        <div class="row">
            <div class="col-md-3">
                <h2 class="inputName"> Perfil: </h2>
            </div>
            <div class="col-md-9">
                <div class="dropdown" id="rolUserDiv">
                  <select name="rol" id="rolUser">
                    <option value="estandar">Estandar</option>
                    <option value="avanzado">Avanzado</option>
                    <option value="administrador">Administrador</option>
                  </select>
            </div>
        </div>

        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-3">
                <div class="col-md-3">
                    <input type="button" class="btn btn-primary registrarBtn" style="width: 100px; margin-left: 5px" onclick="validarBtn()" value="Registrar"></input>
                </div>
            </div>
        </div>
            

    </form>
</div>
</div>
<div class="container-fluid" style="margin-top: 50px;">
<div class="row">
    <div class="col-md-12">
        <h1 style="font-size: 30px; text-align: center;">
            USUARIOS REGISTRADOS
        </h1>
    </div>
</div>
<div id="usersTable">
    <div class="row" id="header" style="background-color: aqua;"> <!-- TABLA  -->
        <div class="col-md-3 celdaTabla">
            <h2 style="font-size: 30px; text-align: center; font-weight: bold;">
                Usuario
            </h2>
        </div>
        <div class="col-md-3 celdaTabla">
            <h2 style="font-size: 30px; text-align: center; font-weight: bold;">
                Mail
            </h2>
        </div>
        <div class="col-md-3 celdaTabla">
            <h2 style="font-size: 30px; text-align: center; font-weight: bold;">
                Rol
            </h2>
        </div>
        <div class="col-md-3 celdaTabla">
            <h2 style="font-size: 30px; text-align: center; font-weight: bold;">
                Acciones
            </h2>
        </div>
    </div>

</div>
</div>`;
const noadmin = `<select name="rol"  id="rolUser">
<option value="estandar">Estandar</option>
</select>`;
const headerTabla = `<div class="row" id="header" style="background-color: aqua;"> <!-- TABLA  -->
<div class="col-md-3 celdaTabla">
    <h2 style="font-size: 30px; text-align: center; font-weight: bold;">
        Usuario
    </h2>
</div>
<div class="col-md-3 celdaTabla">
    <h2 style="font-size: 30px; text-align: center; font-weight: bold;">
        Mail
    </h2>
</div>
<div class="col-md-3 celdaTabla">
    <h2 style="font-size: 30px; text-align: center; font-weight: bold;">
        Rol
    </h2>
</div>
<div class="col-md-3 celdaTabla">
    <h2 style="font-size: 30px; text-align: center; font-weight: bold;">
        Acciones
    </h2>
</div>
</div>`;

var actualUserRole = "estandar";


var counter = 0;
var flagLogin = true;








function validarIngresoBtn() {
    let usuario = document.getElementById("userBox");
    let mail = document.getElementById("emailBox");
    let contrasenia = document.getElementById("passwordBox");

    if (camposVacios(usuario, mail, contrasenia) == false) {
        autenticarUser(usuario, mail, contrasenia);
    }
}

function recargarTabla(){
    

    let tabla = document.getElementById("usersTable");
    let data = window.localStorage.getItem("users");
    //data = JSON.parse(data);
    //alert(Object.keys(data).length);
    let arreglo = JSON.parse(data);
    console.log(arreglo);
    let color = "background-color: aqua;";
    tabla.innerHTML = headerTabla;

    for(var clave in arreglo){
        if (arreglo.hasOwnProperty(clave)){
            if(arreglo[clave].rol == "administrador"){
                color = "background-color: #CFE005;";
            }else{
                color = "background-color: aqua;";
            }
            tabla.innerHTML +=  `<div class="row" id="`+arreglo[clave].usuario+`fila" style="`+color+`">
            <div class="col-md-3 celdaTabla">
                <h2 style="font-size: 30px; text-align: center;">
                `+arreglo[clave].usuario+`
                </h2>
            </div>
            <div class="col-md-3 celdaTabla">
                <h2 style="font-size: 30px; text-align: center;">
                `+arreglo[clave].mail+`
                </h2>
            </div>
            <div class="col-md-3 celdaTabla">
                <h2 style="font-size: 30px; text-align: center;">
                `+arreglo[clave].rol+`
                </h2>
            </div>
            <div class="col-md-3 celdaTabla" style="text-align:center;">
                <button class="eliminarFila" onclick="eliminarFila('`+arreglo[clave].usuario+`')"> X </button>
            </div>
        </div>`;  
        console.log(document.getElementById(arreglo[clave].usuario+"fila"));      
    }
}
}
function eliminarFila(id){
    let data = window.localStorage.getItem("users");
    data = JSON.parse(data);
    delete data[id];
    window.localStorage.setItem("users", JSON.stringify(data));
    recargarTabla();
}
function loadLogin(){ 
    if(actualUserRole != "administrador"){
        document.getElementById("rolUserDiv").innerHTML = noadmin;
    }
    recargarTabla();
    flagLogin = false;
}

function autenticarUser(usuario, mail, contrasenia) {
    let flag = true;
    let data = window.localStorage.getItem("users");

    if (data == null) {
        console.log("No hay usuarios");
        flag = false;
        alert("De momento no existen usuarios. Se el primero!");
        document.getElementById("formulario").innerHTML = formRegistro;
        document.getElementById("contenidoMain").classList.remove("ingreso-Usuario");
        document.getElementById("contenidoMain").classList.add("registro-Usuario");
        document.getElementById("contenidoMain").setAttribute("style", "background-color: #99CCFF;");
        document.getElementById("titulo").innerHTML = "REGISTRARSE";
        return;
    } else {
        data = JSON.parse(data);
        if (data[usuario.value] == null) {
            console.log("No existe el usuario");
            //No existe el usuario
            flag = false;
        } else {
            if (data[usuario.value].contrasenia != contrasenia.value) {
                falg = false;
                console.log("Contra incorrecta");
                //Contra incorrecta
            }
            if (data[usuario.value].mail != mail.value) {
                console.log("Mail incorrecto");
                flag = false;
                //Mail incorrecto
            }
        }

        if (flag == true) {
            //Redireccionar a la pagina de inicio
            console.log("Usuario autenticado");
            //Load login
            actualUserRole = data[usuario.value].rol;
            document.getElementById("main").innerHTML = registrarUsuariosScreen;
            loadLogin();
        } else {
            console.log(counter);
            counter++;
            if (counter == 3) {
                alert("Se ha excedido el numero de intentos");
                counter = 0;
                document.getElementById("formulario").innerHTML = formRegistro;
                document.getElementById("contenidoMain").classList.remove("ingreso-Usuario");
                document.getElementById("contenidoMain").classList.add("registro-Usuario");
                document.getElementById("contenidoMain").setAttribute("style", "background-color: #99CCFF;");
                document.getElementById("titulo").innerHTML = "REGISTRARSE";
                return;
            }
        }
    }
}


function validarBtn() {
    let usuario = document.getElementById("userBox");
    let mail = document.getElementById("emailBox");
    let contrasenia = document.getElementById("passwordBox");
    let rol = document.getElementById("rolUser");

    console.log(rol.value);
    if (camposVacios(usuario, mail, contrasenia) == false) {
        storeUser(usuario, mail, contrasenia, rol);
    }
}

function camposVacios(usuario, mail, contrasenia) {
    if (estaVacio(usuario) == false) {
        if (estaVacio(mail) == false) {
            if (estaVacio(contrasenia) == false) {
                return false;
            }
        }
    }
    return true;

    /*
    if(estaVacio(usuario) || estaVacio(mail) || estaVacio(contrasenia)){
        return true;
    }else{
        return false;
    }*/
}

function estaVacio(campo) {
    if (campo.value == "") {
        let contenedor = campo;
        switch (campo.id) {
            case "userBox":
                contenedor = document.getElementById("userInd");
                contenedor.innerHTML = userAdvert;
                break;
            case "emailBox":
                contenedor = document.getElementById("mailInd");
                contenedor.innerHTML = mailAdvert;
                break;
            case "passwordBox":
                contenedor = document.getElementById("passInd");
                contenedor.innerHTML = passAdvert;
                break;
        }
        campo.setAttribute("style", "border-color:red; border-width:3px;");
        return true;
    } else {
        switch (campo.id) {
            case "userBox":
                contenedor = document.getElementById("userInd");
                contenedor.innerHTML = "";
                break;
            case "emailBox":
                contenedor = document.getElementById("mailInd");
                contenedor.innerHTML = "";
                break;
            case "passwordBox":
                contenedor = document.getElementById("passInd");
                contenedor.innerHTML = "";
                break;
        }
        campo.setAttribute("style", "border-color:green; border-width:3px;");
        return false;
    }
}



function storeUser(usuario, mail, contrasenia, rol) {
    let creado = false;
    const newUser = {
        usuario: usuario.value,
        mail: mail.value,
        contrasenia: contrasenia.value,
        rol: rol.value,
    }

    let data = window.localStorage.getItem("users");

    if (data == null) {
        data = {
            userName: newUser['usuario'],
            user: newUser
        };
        data[newUser.usuario] = newUser;
        delete data.user;
        delete data.userName;
        creado = true;
    } else {
        data = JSON.parse(data);
        if (data[newUser.usuario] == null) {
            data[newUser.usuario] = newUser;
            console.log("Usuario guardado");
            console.log(data[newUser.usuario]);
            let containter = document.getElementById("userInd");
            containter.innerHTML = "";

            creado = true;


        } else {
            estaRepetido(usuario);
            return;
        }
    }
    window.localStorage.setItem("users", JSON.stringify(data));
    if (creado == true) {
        if (flagLogin == true) {
            document.getElementById("formulario").innerHTML = formLogin;
            document.getElementById("contenidoMain").classList.add("ingreso-Usuario");
            document.getElementById("contenidoMain").setAttribute("style", "background-color: #69FF99;");
            document.getElementById("titulo").innerHTML = "INICIO DE SESION";
            return;
        }else{
            recargarTabla();
        }
    }

}

function refrescar(usuario, mail, contrasenia, rol) {
    usuario.setAttribute("style", "border-color:black; border-width:3px;");
    mail.setAttribute("style", "border-color:black; border-width:3px;");
    contrasenia.setAttribute("style", "border-color:black; border-width:3px;");
    rol.setAttribute("style", "border-color:black; border-width:3px;");
}

function estaRepetido(usuario) {
    usuario.setAttribute("style", "border-color:red; border-width:3px;");
    console.log("Usuario repetido");
    usuario.value = "";
    usuario.setAttribute("placeholder", "Usuario repetido");
    let containter = document.getElementById("userInd");
    containter.innerHTML = userRep;
}
