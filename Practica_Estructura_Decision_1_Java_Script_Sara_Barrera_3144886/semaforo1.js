let color = `rosado`
let estadoSemaforo = true

let mensajeSemaforo = color == `verde` ? `seguir..` : color == `rojo` ? `detengase` : color == `amarillo` ? `alistarse` : `dañado`
let encendido = estadoSemaforo ? mensajeSemaforo : `apagado el semaforo`

console.log(encendido)