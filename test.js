var puntajeSquad = document.getElementById("puntaje_squad");
var puntajeMax = document.getElementById("puntaje_max");
var divSalida = document.getElementById ("salida");
var puntajeFinal = 0;

function calcular () {
    var valorPuntajeSquad = puntajeSquad.value;
    var valorPuntajeMax = puntajeMax.value;
    var relacion = parseFloat(puntajeSquad.value)/parseFloat(puntajeMax.value);
    var porcentaje = relacion*100;
    
    if (valorPuntajeSquad == "" || valorPuntajeMax == ""){
        salida.innerHTML = "0.00";
        document.getElementById("mensajes").innerHTML = "<div class='alert alert-danger'>No se ingresaron valores</div>";
    }
    if else (porcentaje>=80) {
        puntajeFinal = 
    }
    else {
        console.log("notas");
        puntajeFinal = porcentaje;
        salida.innerHTML = puntajeFinal.toFixed(2);
    }
}