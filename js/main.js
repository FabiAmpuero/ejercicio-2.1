function calcular() {
    var puntajeSquad = document.getElementById("puntaje_squad").value;
    var puntajeMax = document.getElementById("puntaje_max").value;
    var porcentajeSquad = (100*puntajeSquad)/puntajeMax;
    
    if(porcentajeSquad >= 80) {
        document.getElementById("salida").innerHTML = "Muy bien squad!";
    }
    else {
        document.getElementById("salida").innerHTML = "Pueden hacerlo mejor";
    }
}