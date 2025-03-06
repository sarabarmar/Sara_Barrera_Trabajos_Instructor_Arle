const crearMultiplicador = (factor) => {
    return (num) => num * factor
}
const duplicar = crearMultiplicador (2)
const triplicar= crearMultiplicador (3)
const cuadriplicar = crearMultiplicador (4)
const quituplicar = crearMultiplicador (5)

console.log(duplicar(2));
console.log(triplicar(3));
console.log(cuadriplicar(4));
console.log(quituplicar(5));
