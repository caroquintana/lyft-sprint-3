/* Validación número de teléfono 


    var inputUsuario = document.getElementById('numero').value,
        boton = document.getElementById('botonTelefono'),    
        phone = /^[0-9]{9,11}$/;

    var validarTelefono = function(e){
       var phone = /^[0-9]{9,11}$/;
        if(inputUsuario == phone){
            alert("Registro exitoso");
        }else{
            alert("Ingresa número de teléfono");
        }       
    };
    
    var validar = function(e){
        validarTelefono(e);
    };
    boton.addEventListener("click", validar);

/*            e.preventDefault();


var validarFono = function(inputUsuario){
    var regex = /^[0-9]{9,11}$/;
    if(inputUsuario.match(regex)){
        inputUsuario.value = "";
        alert("No funciona")
    }else{
        inputUsuario.value = "";
        alert("Ingrese número de teléfono válido");   
        return false; 
    }
};

*/

// validacion formulario
var inputUsuario = document.getElementById("telefono").value,
    botonForm = document.getElementById("botonTelefono");


var validarFono = function(e){
    var phone =  /^[8]{1}[1-9]{2}[0-9]{5}$/;
        if(inputUsuario !== phone){
            alert("Registro exitoso");
        }else{
            alert("Ingresa número de teléfono válido");
        }       
    };

var validar = function(event){
    event.preventDefault();

    if(validarFono(inputUsuario)){
        alert("Registro realizado con éxito");
    }
};

//Boton escuchador

botonForm.addEventListener("click", validar);






//tablero

var botonStar = document.getElementById("navicon");


var muestrameVentana = function(){
    var crearDiv = document.createElement("div");
    crearDiv.setAttribute("class", "tablero");
    document.getElementsByClassName("auto")[0].appendChild(crearDiv);
    };


botonStar.addEventListener("click", muestrameVentana);




