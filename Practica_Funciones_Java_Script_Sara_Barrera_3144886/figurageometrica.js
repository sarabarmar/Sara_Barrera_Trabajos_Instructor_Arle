const cualFigura = puntas => {
    if (puntas === 3) {
        return "El poligono es un triangulo"
    }
    else if (puntas === 4) {
        return "El poligono es un cuadrado (rectangulo si tiene 2 lados paralelos mas largos que los otros 2)"
    }
    else if (puntas === 5) {
        return "El poligono es un pentagono"
    }
    else if (puntas === 6) {
        return "El poligono es un hexagono"
    }
    else if (puntas === 7) {
        return "El poligono es un heptagono"
    }
    else if (puntas === 8) {
        return "El poligono es un octagono"
    }
    else if (puntas === 9) {
        return "El poligono es un eneagono"
    }
    else if (puntas === 10) {
        return "El poligono es un decagono"
    }
    else {
        return "poligono no reconocido"
    }
}
console.log(cualFigura(9))