// 2. Imagina que estás desarrollando un sistema para una tienda en línea que necesita verificar si hay productos con un precio superior a 1000 en una lista de precios almacenada en un arreglo llamado preciosProductos. El arreglo inicial es: [500, 1200, 300, 1500, 800]. Debes usar una función flecha con el método some para determinar si al menos un precio supera los 1000.
// Pregunta:
// ¿Cuál de las siguientes opciones completa correctamente el código para verificar si existe al menos un precio mayor a 1000 en el arreglo preciosProductos utilizando el método some?
// Código base:

const preciosProductos = [500, 1200, 300, 1500, 800];
const hayPreciosAltos = preciosProductos.some (num => num > 1000)
console.log(hayPreciosAltos);
