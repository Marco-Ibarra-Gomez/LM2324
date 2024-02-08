function validar(elementos){
    let estanCorrectos = true;
    for (var i=0;i<elementos.length;i++){
        document.getElementById("campo"+(i+1).toString()).innerHTML = "";        
        if (elementos[i].value == "" || (i==6 && !elementos[i].checked)){
            document.getElementById("campo"+(i+1).toString()).innerHTML = "El campo " + elementos[i].id + " está vacío";
            estanCorrectos = false;
        }
        
    }
    if(!validarEmail()){ // Validar correo
        document.getElementById("campo3").innerHTML = "Email no válido";        
        estanCorrectos = false;
    }
    if(!validaPasswords){ // Validar las contraseñas
        document.getElementById("campo4").innerHTML = "La contraseña no cumple con requisitos de longitud o no coinciden";
        document.getElementById("campo5").innerHTML = "La contraseña no cumpe con requisitos de longitud o no coinciden";
        estanCorrectos = false;
    }
    if(!validarDNI){
        document.getElementById("campo6").innerHTML
    }
    return estanCorrectos;
}
/* Función validarEmail tomada de:
* https://www.coderbox.net/blog/validar-email-usando-javascript-y-expresiones-regulares/
*/
function validarEmail(){              
	var valido;
	var emailField = document.getElementById('email');
	var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
	if( validEmail.test(emailField.value) ){
		valido=true;
	}else{
        valido=false;
	}
    return valido;
}

function validaPasswords(){
    return document.getElementById("password1").value == ocument.getElementById("password2").value && document.getElementById("password1").value.length>=8;

    return passwordOK;
}

function validarDNI(){
    let letra= ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];
    var cadena = document.getElementById("dni").value; // DNI completo
    var numero = parseInt(cadena.substring(0, 8));
    var letraUsuario = cadena[8]; //Letra escrita por el usuario
    var letraReal = letra[numero%23]; // Letra real del dni calculada según fórmula
    var dniValido = true;
    if(letraUsuario!=letraReal) // Si no coincide, DNI falso
        dniValido = false;
    return dniValido   
}