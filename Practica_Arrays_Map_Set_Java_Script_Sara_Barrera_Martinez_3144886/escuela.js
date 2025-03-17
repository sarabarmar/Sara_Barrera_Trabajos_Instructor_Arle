// 7. Suponga que estás desarrollando un sistema para una escuela que necesita organizar los puntajes de los estudiantes en un examen. Tienes un arreglo de puntajes [85, 92, 78, 95, 88]y deseas crear un Map donde las claves sean los índices del arreglo (0, 1, 2, etc.) y los valores sean los puntajes correspondientes. Luego, quieres agregar un nuevo puntaje 90 al Map con la clave correspondiente al siguiente índice disponible (en este caso, 5).
// Pregunta:
// ¿Cuál de las siguientes opciones completa correctamente el código para crear un Map a partir del arreglo de puntajes y luego agregar el nuevo puntaje 90 con la clave 5?
// Código base:

const puntajes = [85, 92, 78, 95, 88];
const mapaPuntajes = new Map(puntajes.map((valor, indice) => [indice, valor]));
mapaPuntajes.set (5, 90);
console.log(mapaPuntajes);
