// 5. Suponga que estás desarrollando un sistema para una tienda que registra los códigos de productos vendidos en un día. Utilizas un Set para almacenar estos códigos, ya que no quieres duplicados. El Set inicial contiene: {1001, 1002, 1003}. Necesitas verificar si un código específico, como 1002, está en el Set para confirmar si ya se vendió ese producto hoy, o si un nuevo código, como 1004, no está registrado aún.
// Pregunta:
// ¿Cuál de las siguientes opciones completa correctamente el código para verificar si un código dado existe en el Set de productos vendidos y devuelve true o false?
// Código base:

const productosVendidos = new Set ([1001, 1002, 1003]);
const verificarProducto = (codigo) => productosVendidos.has(codigo);
console.log(verificarProducto(1002));
console.log(verificarProducto(1004));
