function validarBtn(){ 
    let usuario = document.getElementById("userBox");
    let mail = document.getElementById("emailBox");
    let contrasenia = document.getElementById("passwordBox");
    let rol = document.getElementById("rolUser");
    let flagEmpty = false;
    let flagRepetido = false;
    console.log(usuario.value);
   
    if(camposVacios(usuario,mail,contrasenia) == false){
        if(usuarioRepetido(usuario,mail) == false){
            storeUser(usuario,mail,contrasenia,rol);
            //Aca estamos creando usuarios simulando que somo el adm. Debemos mostrar una tabla con los usuarios creados y poder eliminarlo de ahí.
            //Es decir es una funcion de la pagina, el registrar, no es registrarse como tal.
            //Este registro se haria despues de loguearse, hay q crear otro registro casi igual pero para registrar un usuario adm nuevo si no se puede loguear.
        }
    }
}

function camposVacios(usuario,mail,contrasenia){
    if(estaVacio(usuario) || estaVacio(mail) || estaVacio(contrasenia)){
        return true;
    }else{
        return false;
    }
}
function usuarioRepetido(usuario,mail){
    if(estaRepetido(usuario,"usuario") || estaRepetido(mail,"mail")){
        return true;
    }else{
        return false;
    }
}


function storeUser(usuario,mail,contrasenia,rol){
    let ide = 0;
    if(window.localStorage.getItem("id")){
        ide = parseInt(window.localStorage.getItem("id"));
     }else{
         window.localStorage.setItem("id", JSON.stringify(1));
         ide = 1;
     }

     const NewUser = {
         usuario: usuario.value,
         mail: mail.value,
         contrasenia: contrasenia.value,
         rol: rol.value,
         id: ide
     }
     
     window.localStorage.setItem("User"+ide, JSON.stringify(NewUser));
     console.log(window.localStorage.getItem("User"+ide));

     ide += 1;
     window.localStorage.setItem("id", JSON.stringify(ide));
     console.log(window.localStorage.getItem("id"));
}


function estaRepetido(campo, label){
    let repetido = false;
    if(window.localStorage.getItem("id")){
        ide = parseInt(window.localStorage.getItem("id"));
        for(let i = 1; i < ide; i++){
           
            if(label == "usuario"){
                if(campo.value == JSON.parse(window.localStorage.getItem("User"+i)).usuario){
                    repetido = true;
                    campo.setAttribute("style", "border-color:red; border-width:3px;");
                    campo.value = "";
                    campo.setAttribute("placeholder", "El "+label+" ya existe");
                    break;
                }  
            }else{
                if(campo.value == JSON.parse(window.localStorage.getItem("User"+i)).mail){
                    repetido = true;
                    campo.setAttribute("style", "border-color:red; border-width:3px;");
                    campo.value = "";
                    campo.setAttribute("placeholder", "El "+label+" ya existe");
                    break;
                }  
            }       
        }
     }else{
        repetido = false;
        campo.setAttribute("style", "border-color:green; border-width:3px;");
     }
     return repetido;
}

function estaVacio(campo){
    if(campo.value == ""){
        campo.setAttribute("style", "border-color:red; border-width:3px;");
        return true;
    }else{
        campo.setAttribute("style", "border-color:green; border-width:3px;");
        return false;
    }
}