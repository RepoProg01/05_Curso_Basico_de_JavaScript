
let array = ["piedra", "papel", "tijera"];

function random(max, min){
    return Math.floor(Math.random()*(max-min + 1) + min);
}

function seleccion(selJugador){
    var maquina = array[random(2, 0)];1
    var numJugador = Number(selJugador) - 1;
    var jugador = array[numJugador];

    if(jugador == "piedra" && maquina == "tijera"){
        console.log(`jugador ${jugador} maquina ${maquina} JUGADOR GANA`);
    }
    else if(jugador == "papel" && maquina == "piedra" ){
        console.log(`jugador ${jugador} maquina ${maquina} JUGADOR GANA`);
    }
    else if(jugador == "tijera" && maquina == "papel"){
        console.log(`jugador ${jugador} maquina ${maquina} JUGADOR GANA`);
    }

    else if(jugador == maquina){
        console.log(`jugador ${jugador} maquina ${maquina} EMPATE`);
    }
    else{
        console.log(`jugador ${jugador} maquina ${maquina} MAQUINA GANA`);
    }
}
var numero = prompt("piedra = 1, papel = 2, tijera = 3 Escribe tu opcion:  ");
seleccion(numero);

// ----------------------ejercicio 2-----------------------

function solution(estudiantes, deathCount, nuevo) {

    while(deathCount > 0){
        estudiantes.pop();
        deathCount --;
    }
    estudiantes.push(nuevo);
    return estudiantes;
    }
    
    console.log(solution(["Nico", "Zule"], 0, "Santi"));
    // solution(["Juan", "Juanita", "Daniela"], 1, "Julian");
    // solution(["Nath", "Luisa", "Noru"], 2, "Cami");