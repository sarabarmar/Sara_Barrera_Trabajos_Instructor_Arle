// 1. Suponga que está desarrollando un sistema para una biblioteca que necesita filtrar una lista de números que representan los códigos de libros disponibles. La lista está almacenada en un arreglo llamado codigosLibros y el objetivo es crear una función que devuelva solo los códigos mayores a 50 utilizando una función flecha y el método filter. El arreglo inicial es: [10, 25, 60, 45, 80, 15, 70].
// Pregunta:
// ¿Cuál de las siguientes opciones completa correctamente el código para filtrar los códigos mayores a 50 y devolver un nuevo arreglo con esos valores?
// Código base:

const codigosLibros = [10, 25, 60, 45, 80, 15, 70];
const filtrarCodigos = codigosLibros.filter (num => num > 50); // filtra
console.log(filtrarCodigos);
