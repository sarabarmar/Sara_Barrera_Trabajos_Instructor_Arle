let encendido = true
let velocidad = 45
if (encendido) {
    console.log("La moto esta encendida..");
    if (velocidad == 0) {
        console.log("La moto esta frenada..");
    }
    else if (velocidad > 0 && velocidad <= 100) {
        console.log("La moto esta en marcha..");
    }
    else {
        console.log("Baje la velocidad y evite un accidente.. exceso de velocidad");
    }
}
else {
    console.log("Enciend el vehiculo");
}
