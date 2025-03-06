// decision si simple - if else else if
let colorSemaforo = "rojo"
let encendido = true

if (encendido) {
    if (colorSemaforo == "rojo") {
        console.log(`debe parar por que el semaforo esta en color ${colorSemaforo}`)
    }
    else if (colorSemaforo == "verde") {
        console.log(`puede continuar por que el semaforo esta en color ${colorSemaforo}`)
    }
    else if (colorSemaforo == "amarillo") {
        console.log(`puede prepararse por que el semaforo esta en color ${colorSemaforo}`)
    }
    else {
        console.log(`el semaforo esta dañado`)
    }
}
else {
    console.log("el semaforo esta apagado")
}
