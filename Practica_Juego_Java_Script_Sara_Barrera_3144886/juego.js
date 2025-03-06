const readline = require('readline');  

let jugador1 = 0;
let jugador2 = 0;
let jugador1continua = true;
let jugador2continua = true;

function numeroAleatorio() {
    return Math.floor(Math.random() * 10) + 1; 
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


jugador1 += numeroAleatorio();
jugador2 += numeroAleatorio();
jugador1 += numeroAleatorio();
jugador2 += numeroAleatorio();

console.log("Después de 2 rondas:");
console.log("Jugador 1:", jugador1);
console.log("Jugador 2:", jugador2);


function preguntarSiQuiereSeguir(jugador) {
    return new Promise((resolve) => {
        rl.question(`Jugador ${jugador}, ¿Quieres seguir? (sí/no): `, (respuesta) => {
            resolve(respuesta.toLowerCase() === 'sí');
        });
    });
}


async function jugar() {
    jugador1continua = await preguntarSiQuiereSeguir(1);
    jugador2continua = await preguntarSiQuiereSeguir(2);

    if (jugador1continua) {
        jugador1 += numeroAleatorio();  
    }
    if (jugador2continua) {
        jugador2 += numeroAleatorio();  
    }

    console.log("\n=== Resultados Finales ===");
    console.log("Jugador 1:", jugador1);  
    console.log("Jugador 2:", jugador2);  

   
    if (jugador1 > 21 && jugador2 > 21) {
        console.log("¡Nadie gana, ambos pasaron de 21!");  
    } else if (jugador1 > 21) {
        console.log("¡Jugador 2 gana!");  
    } else if (jugador2 > 21) {
        console.log("¡Jugador 1 gana!");  
    } else if (jugador1 > jugador2) {
        console.log("¡Jugador 1 gana!");  
    } else if (jugador2 > jugador1) {
        console.log("¡Jugador 2 gana!");  
    } else {
        console.log("¡Empate!");  
    }

    rl.close();  
}

jugar();  
