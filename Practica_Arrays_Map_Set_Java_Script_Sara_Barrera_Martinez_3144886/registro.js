// 3. Suponga que estás desarrollando un sistema de registro para un evento en el que necesitas almacenar los nombres de los asistentes junto con sus códigos de identificación únicos. Decides usar la estructura de datos Map para asociar cada código (un número) con el nombre correspondiente. Tienes una lista inicial de asistentes y deseas agregar un nuevo asistente al Map utilizando una función flecha para procesar los datos. El Map inicial contiene: {1 => "Ana", 2 => "Luis"}, y quieres agregar el par {3 => "Sofía"}.
// Pregunta:
// ¿Cuál de las siguientes opciones completa correctamente el código para agregar el nuevo asistente {3 => "Sofía"} al Map existente utilizando una función flecha?

const asistentes = new Map ([[1, "Ana"],[2, "Luis"]]);
const agregarAsistente = (map, id, nombre) => map.set(id, nombre); // .set(id, nombre) para agregar el nuevo par clave-valor al mapa
agregarAsistente(asistentes, 3, "Sofia");
console.log(asistentes);
