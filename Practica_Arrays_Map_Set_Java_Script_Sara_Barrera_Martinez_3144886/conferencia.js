// 4. Imagina que estás desarrollando un sistema de control de acceso para una conferencia. Los asistentes están registrados en un Map donde las claves son sus códigos de identificación (números) y los valores son sus nombres. El Map inicial contiene: {101 => "Carlos", 102 => "María", 103 => "José"}. Necesitas crear una función que verifique si un código específico está registrado en el Map, utilizando una función flecha, para decidir si se permite o no el acceso a un asistente.
// Pregunta:
// ¿Cuál de las siguientes opciones completa correctamente el código para verificar si un código dado existe en el Map de asistentes utilizando una función flecha y devuelve true o false?
// Código base:

const asistentes = new  Map ([[101, "Carlos"], [102, "Maria"], [103, "Jose"]]);
const verificarAsistentes = (map, codigo) => map.has (codigo);
console.log(verificarAsistentes(asistentes, 102));
console.log(verificarAsistentes(asistentes, 104));
