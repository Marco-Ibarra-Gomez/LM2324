function mayor(vector){
    let mayor = vector[0] // Por defecto, el primer elemento es el mayor
    for(var i=0; i<vector.length; i++){
        if(vector[i]>mayor)
        mayor = vector[i];
    }
    return mayor;
}

function menor(vector){
    let menor = vector[0] // Por defecto, el primer elemento es el menor
    for(var i=0; i<vector.length; i++){
        if(vector[i]<menor)
        menor = vector[i];
    }
    return menor;
}

function imprimir(vector){
    for(var contador=0; contador<vector.length; contador++){
        document.getElementById("resultado").innerHTML = document.getElementById("resultado").innerHTML + vector[contador] + "<br/>"
    }
}

