

let notas = [];

function añadir(){
    var calificacion = parseFloat(document.getElementById("numero").value);
    if(isNaN(calificacion)){
        document.getElementById("aviso").innerHTML = "Debes introducir un número entre el 0 y el 10";
    }
    else{
        if(calificacion<0 || numero>10){
            document.getElementById("aviso").innerHTML = "Debes introducir un numero entre 0 y 10";
        }
        else{
        notas.push(calificacion);
        document.getElementById("notas").innerHTML = notas;
        }
    } 
}

function borrar(){
    notas.pop();
    document.getElementById("notas").innerHTML = notas;
}

function calcularMedia(){
    suma = 0.0;
    promedio = 0;
    for(var i = 0; i<notas.length; i++){
        suma += notas[i];
        promedio = suma/notas.length;
        document.getElementById("resultado").innerHTML = promedio.toFixed(2);
    }
}